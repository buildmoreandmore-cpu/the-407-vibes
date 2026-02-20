/**
 * RSS Feed — Client-Side Rendering Module
 *
 * Fetches parsed RSS items from /api/rss-feed and renders them
 * as styled cards matching the site's blue/gold theme.
 *
 * Usage:
 *   <div id="rss-development"></div>
 *   <script>RSSFeed.load('rss-development', 'development');</script>
 *
 * API:
 *   RSSFeed.load(containerId, source)  — fetch + render cards into a container
 *   RSSFeed.refresh(containerId)       — re-fetch the last-loaded source
 */

const RSSFeed = (() => {
  // Track which containers are mapped to which source for refresh
  const _containerSourceMap = {};

  // Source display names for attribution
  const SOURCE_LABELS = {
    development: 'Orlando Development News',
    events: 'Orlando Events',
    restaurants: 'Orlando Food & Dining',
  };

  // =============================================
  // STYLES — injected once into the document head
  // =============================================

  let _stylesInjected = false;

  function injectStyles() {
    if (_stylesInjected) return;
    _stylesInjected = true;

    const css = `
      /* RSS Feed Grid */
      .rss-feed-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-top: 1.5rem;
      }

      /* RSS Card */
      .rss-card {
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.4s ease, box-shadow 0.4s ease;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        background: #fff;
        text-decoration: none;
        color: inherit;
        display: flex;
        flex-direction: column;
      }

      .rss-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.14);
      }

      /* Card Image */
      .rss-card-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        transition: transform 0.6s ease;
        background: var(--secondary-gold, #FFF5F0);
      }

      .rss-card:hover .rss-card-image {
        transform: scale(1.05);
      }

      /* Placeholder when no image is available */
      .rss-card-image-placeholder {
        width: 100%;
        height: 200px;
        background: linear-gradient(135deg, var(--primary-gold, #FF6B35) 0%, var(--secondary-gold, #FFF5F0) 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        color: var(--primary-blue, #1E293B);
        opacity: 0.5;
      }

      /* Card Body */
      .rss-card-body {
        padding: 1.25rem 1.5rem 1.5rem;
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      /* Source Tag */
      .rss-card-source {
        display: inline-block;
        font-size: 0.6rem;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: #fff;
        background: var(--primary-blue, #1E293B);
        padding: 0.2rem 0.6rem;
        margin-bottom: 0.6rem;
        font-weight: 700;
        border-radius: 2px;
        align-self: flex-start;
      }

      /* Card Title */
      .rss-card-title {
        font-family: 'Poppins', sans-serif;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1.3;
        color: var(--text-dark, #1E293B);
        margin-bottom: 0.5rem;
      }

      .rss-card:hover .rss-card-title {
        color: var(--primary-blue, #1E293B);
      }

      /* Card Description */
      .rss-card-desc {
        font-size: 0.88rem;
        line-height: 1.55;
        color: var(--text-light, #64748B);
        margin-bottom: 0.75rem;
        flex: 1;
      }

      /* Card Meta (date) */
      .rss-card-meta {
        font-size: 0.75rem;
        color: var(--text-light, #64748B);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: auto;
        padding-top: 0.75rem;
        border-top: 1px solid var(--border-color, #E2E8F0);
      }

      /* Attribution Footer */
      .rss-feed-attribution {
        text-align: center;
        margin-top: 1.5rem;
        font-size: 0.75rem;
        color: var(--text-light, #64748B);
        letter-spacing: 0.05em;
      }

      .rss-feed-attribution a {
        color: var(--primary-blue, #1E293B);
        text-decoration: none;
        font-weight: 600;
      }

      .rss-feed-attribution a:hover {
        text-decoration: underline;
      }

      /* Loading Skeleton */
      .rss-skeleton-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-top: 1.5rem;
      }

      .rss-skeleton-card {
        border-radius: 8px;
        overflow: hidden;
        background: #fff;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
      }

      .rss-skeleton-image {
        width: 100%;
        height: 200px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: rss-shimmer 1.5s ease-in-out infinite;
      }

      .rss-skeleton-body {
        padding: 1.25rem 1.5rem 1.5rem;
      }

      .rss-skeleton-tag {
        width: 80px;
        height: 14px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: rss-shimmer 1.5s ease-in-out infinite;
        border-radius: 2px;
        margin-bottom: 0.75rem;
      }

      .rss-skeleton-title {
        width: 90%;
        height: 20px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: rss-shimmer 1.5s ease-in-out infinite;
        border-radius: 3px;
        margin-bottom: 0.5rem;
      }

      .rss-skeleton-title-2 {
        width: 65%;
        height: 20px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: rss-shimmer 1.5s ease-in-out infinite;
        border-radius: 3px;
        margin-bottom: 0.75rem;
      }

      .rss-skeleton-line {
        width: 100%;
        height: 12px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: rss-shimmer 1.5s ease-in-out infinite;
        border-radius: 3px;
        margin-bottom: 0.4rem;
      }

      .rss-skeleton-line:last-child {
        width: 75%;
      }

      @keyframes rss-shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }

      /* Error State */
      .rss-feed-error {
        text-align: center;
        padding: 3rem 2rem;
        background: var(--secondary-gold, #FFF5F0);
        border-radius: 8px;
        border: 1px dashed var(--primary-gold, #FF6B35);
        margin-top: 1.5rem;
      }

      .rss-feed-error-icon {
        font-size: 2rem;
        margin-bottom: 0.75rem;
        opacity: 0.6;
      }

      .rss-feed-error-title {
        font-family: 'Poppins', sans-serif;
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--text-dark, #1E293B);
        margin-bottom: 0.5rem;
      }

      .rss-feed-error-msg {
        font-size: 0.9rem;
        color: var(--text-light, #64748B);
        margin-bottom: 1rem;
      }

      .rss-feed-retry-btn {
        display: inline-block;
        padding: 0.5rem 1.5rem;
        background: var(--primary-blue, #1E293B);
        color: #fff;
        border: none;
        border-radius: 4px;
        font-size: 0.85rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.3s ease;
      }

      .rss-feed-retry-btn:hover {
        background: var(--accent-blue, #E8530E);
      }

      /* Empty State */
      .rss-feed-empty {
        text-align: center;
        padding: 3rem 2rem;
        color: var(--text-light, #64748B);
        font-size: 0.95rem;
      }

      /* Responsive */
      @media (max-width: 1024px) {
        .rss-feed-grid,
        .rss-skeleton-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 640px) {
        .rss-feed-grid,
        .rss-skeleton-grid {
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        .rss-card-image,
        .rss-card-image-placeholder,
        .rss-skeleton-image {
          height: 160px;
        }
      }
    `;

    const style = document.createElement('style');
    style.setAttribute('data-rss-feed', 'true');
    style.textContent = css;
    document.head.appendChild(style);
  }

  // =============================================
  // RENDERING
  // =============================================

  /**
   * Render the loading skeleton into a container.
   */
  function renderSkeleton(container) {
    const skeletonCount = 6;
    let html = '<div class="rss-skeleton-grid">';

    for (let i = 0; i < skeletonCount; i++) {
      html += `
        <div class="rss-skeleton-card">
          <div class="rss-skeleton-image"></div>
          <div class="rss-skeleton-body">
            <div class="rss-skeleton-tag"></div>
            <div class="rss-skeleton-title"></div>
            <div class="rss-skeleton-title-2"></div>
            <div class="rss-skeleton-line"></div>
            <div class="rss-skeleton-line"></div>
            <div class="rss-skeleton-line"></div>
          </div>
        </div>
      `;
    }

    html += '</div>';
    container.innerHTML = html;
  }

  /**
   * Format an RSS pubDate string into a human-readable date.
   */
  function formatDate(pubDate) {
    if (!pubDate) return '';
    try {
      const date = new Date(pubDate);
      if (isNaN(date.getTime())) return '';
      const now = new Date();
      const diffMs = now - date;
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

      if (diffHours < 1) return 'Just now';
      if (diffHours < 24) return `${diffHours}h ago`;

      const diffDays = Math.floor(diffHours / 24);
      if (diffDays === 1) return 'Yesterday';
      if (diffDays < 7) return `${diffDays} days ago`;

      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
      });
    } catch {
      return '';
    }
  }

  /**
   * Escape HTML entities in a string to prevent XSS.
   */
  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /**
   * Render a single RSS item as a card link.
   */
  function renderCard(item) {
    const imageHtml = item.image
      ? `<img class="rss-card-image" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy" onerror="this.outerHTML='<div class=\\'rss-card-image-placeholder\\'>&#9781;</div>'">`
      : '<div class="rss-card-image-placeholder">&#9781;</div>';

    const dateStr = formatDate(item.pubDate);
    const dateHtml = dateStr ? `<span>${escapeHtml(dateStr)}</span>` : '';
    const sourceHtml = item.source ? `<span class="rss-card-source">${escapeHtml(item.source)}</span>` : '';

    return `
      <a class="rss-card" href="${escapeHtml(item.link)}" target="_blank" rel="noopener noreferrer">
        ${imageHtml}
        <div class="rss-card-body">
          ${sourceHtml}
          <div class="rss-card-title">${escapeHtml(item.title)}</div>
          ${item.description ? `<div class="rss-card-desc">${escapeHtml(item.description)}</div>` : ''}
          ${dateHtml ? `<div class="rss-card-meta">${dateHtml}</div>` : ''}
        </div>
      </a>
    `;
  }

  /**
   * Render the full card grid with attribution.
   */
  function renderGrid(container, items, source) {
    if (!items || items.length === 0) {
      container.innerHTML = `
        <div class="rss-feed-empty">
          No stories available right now. Check back soon.
        </div>
      `;
      return;
    }

    const label = SOURCE_LABELS[source] || source;
    const cardsHtml = items.map(renderCard).join('');

    container.innerHTML = `
      <div class="rss-feed-grid">
        ${cardsHtml}
      </div>
      <div class="rss-feed-attribution">
        Powered by <a href="#">${escapeHtml(label)}</a> RSS feeds
      </div>
    `;
  }

  /**
   * Render the error state with a retry button.
   */
  function renderError(container, containerId, message) {
    container.innerHTML = `
      <div class="rss-feed-error">
        <div class="rss-feed-error-icon">!</div>
        <div class="rss-feed-error-title">Feed Unavailable</div>
        <div class="rss-feed-error-msg">${escapeHtml(message || 'Unable to load the latest stories. Please try again.')}</div>
        <button class="rss-feed-retry-btn" onclick="RSSFeed.refresh('${escapeHtml(containerId)}')">Retry</button>
      </div>
    `;
  }

  // =============================================
  // PUBLIC API
  // =============================================

  return {
    /**
     * Load RSS feed items into a container element.
     *
     * @param {string} containerId — The DOM id of the container element
     * @param {string} source — One of: 'development', 'events', 'restaurants'
     */
    async load(containerId, source) {
      injectStyles();

      const container = document.getElementById(containerId);
      if (!container) {
        console.error(`RSSFeed.load: container #${containerId} not found`);
        return;
      }

      // Store source for refresh capability
      _containerSourceMap[containerId] = source;

      // Show loading skeleton
      renderSkeleton(container);

      try {
        const response = await fetch(`/api/rss-feed?source=${encodeURIComponent(source)}`);

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.error || `HTTP ${response.status}`);
        }

        const data = await response.json();
        renderGrid(container, data.items, source);
      } catch (err) {
        console.error(`RSSFeed.load error (${source}):`, err);
        renderError(container, containerId, err.message);
      }
    },

    /**
     * Re-fetch and re-render the last source loaded into a container.
     *
     * @param {string} containerId — The DOM id of the container element
     */
    async refresh(containerId) {
      const source = _containerSourceMap[containerId];
      if (!source) {
        console.warn(`RSSFeed.refresh: no source recorded for #${containerId}`);
        return;
      }
      return this.load(containerId, source);
    },
  };
})();

// Make available globally
if (typeof window !== 'undefined') {
  window.RSSFeed = RSSFeed;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RSSFeed;
}
