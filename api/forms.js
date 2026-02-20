const { createClient } = require('@supabase/supabase-js');

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const VALID_FORM_TYPES = ['contact', 'newsletter', 'business', 'event', 'support'];

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'hello@orlvibes.com';

/**
 * Send an email notification via Resend API when a form is submitted.
 * Requires RESEND_API_KEY env var. Silently skips if not configured.
 */
async function sendEmailNotification(formType, data) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return; // Skip if no API key configured

  const subjectMap = {
    contact: `New Contact Form: ${data.name || 'Unknown'}`,
    business: `New Business Submission: ${data.name || data.businessName || 'Unknown'}`,
    event: `New Event Submission: ${data.name || data.eventName || 'Unknown'}`,
    support: `Support Request: ${data.name || 'Unknown'}`,
    newsletter: `New Newsletter Subscriber: ${data.email || 'Unknown'}`,
  };

  const lines = Object.entries(data)
    .filter(([key]) => key !== 'page_uri')
    .map(([key, value]) => `<strong>${key.replace(/_/g, ' ')}:</strong> ${String(value)}`)
    .join('<br>');

  const html = `
    <h2>New ${formType} submission on Orlando Vibes</h2>
    <p>${lines}</p>
    <hr>
    <p style="color:#999;font-size:12px;">Submitted via orlvibes.com</p>
  `;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Orlando Vibes <notifications@orlvibes.com>',
      to: [NOTIFICATION_EMAIL],
      subject: subjectMap[formType] || `New ${formType} submission`,
      html: html,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Resend API error: ${response.status} - ${err}`);
  }
}

const SUCCESS_MESSAGES = {
  contact: 'Thank you for reaching out. We will get back to you shortly.',
  newsletter: 'You have been subscribed to our newsletter.',
  business: 'Your business submission has been received and is under review.',
  event: 'Your event submission has been received and is under review.',
  support: 'Your support request has been received. We will respond soon.',
};

module.exports = async function handler(req, res) {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, CORS_HEADERS);
    return res.end();
  }

  // Set CORS headers on all responses
  Object.entries(CORS_HEADERS).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

  try {
    const { formType, ...data } = req.body;

    // Validate form type
    if (!formType || !VALID_FORM_TYPES.includes(formType)) {
      return res.status(400).json({
        error: `Invalid form type. Must be one of: ${VALID_FORM_TYPES.join(', ')}`,
      });
    }

    const email = data.email || null;
    const ipAddress = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || null;
    const pageUri = data.page_uri || req.headers['referer'] || null;

    // Insert into form_submissions
    const { data: submission, error: submitError } = await supabase
      .from('form_submissions')
      .insert({
        form_type: formType,
        data: data,
        email: email,
        ip_address: ipAddress,
        page_uri: pageUri,
      })
      .select()
      .single();

    if (submitError) {
      return res.status(500).json({ error: submitError.message });
    }

    // If newsletter, also upsert into newsletter_subscribers
    if (formType === 'newsletter' && email) {
      const { error: subError } = await supabase
        .from('newsletter_subscribers')
        .upsert(
          {
            email: email,
            subscribed_at: new Date().toISOString(),
          },
          { onConflict: 'email', ignoreDuplicates: true }
        );

      if (subError) {
        console.error('Newsletter subscriber upsert error:', subError.message);
        // Non-blocking: still return success for the form submission
      }
    }

    // Send email notification if RESEND_API_KEY is configured
    await sendEmailNotification(formType, data).catch(err =>
      console.error('Email notification error (non-blocking):', err.message)
    );

    return res.status(200).json({
      success: true,
      message: SUCCESS_MESSAGES[formType],
      data: { id: submission.id },
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
