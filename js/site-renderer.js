/**
 * Site Renderer — Applies SiteConfig to DOM on DOMContentLoaded
 *
 * Reads the SiteConfig object and updates the page accordingly.
 * This makes every page city-agnostic without per-file edits.
 */

const SiteRenderer = {
  /**
   * Initialize — call all render methods
   */
  init() {
    if (typeof SiteConfig === 'undefined') {
      console.warn('SiteRenderer: SiteConfig not loaded');
      return;
    }
    this.applyTheme();
    this.updateMetaTags();
  },

  /**
   * Apply theme colors and fonts from config as CSS custom properties
   */
  applyTheme() {
    const { colors, fonts } = SiteConfig.theme;
    const root = document.documentElement;

    if (colors) {
      root.style.setProperty('--primary-gold', colors.primaryGold);
      root.style.setProperty('--primary-blue', colors.primaryBlue);
      root.style.setProperty('--accent-blue', colors.accentBlue);
      root.style.setProperty('--secondary-gold', colors.secondaryGold);
      root.style.setProperty('--text-dark', colors.textDark);
      root.style.setProperty('--text-light', colors.textLight);
      root.style.setProperty('--border-color', colors.borderColor);
      root.style.setProperty('--bg-light', colors.bgLight);
      root.style.setProperty('--bg-dark', colors.bgDark);
    }

    if (fonts) {
      root.style.setProperty('--font-heading', fonts.heading);
      root.style.setProperty('--font-body', fonts.body);
    }
  },

  /**
   * Update meta tags for SEO and social sharing
   */
  updateMetaTags() {
    const { site, city } = SiteConfig;

    // og:site_name
    this._setMeta('og:site_name', site.name, 'property');

    // geo meta tags
    this._setMeta('geo.region', `${city.country}-${city.stateCode}`, 'name');
    this._setMeta('geo.placename', city.name, 'name');
    if (city.coordinates) {
      this._setMeta('geo.position', `${city.coordinates.lat};${city.coordinates.lng}`, 'name');
      this._setMeta('ICBM', `${city.coordinates.lat}, ${city.coordinates.lng}`, 'name');
    }
  },

  /**
   * Get area config by ID
   */
  getArea(areaId) {
    return SiteConfig.areas.find(a => a.id === areaId) || null;
  },

  /**
   * Get all areas
   */
  getAreas() {
    return SiteConfig.areas;
  },

  // ---- Helpers ----

  _setMeta(nameOrProperty, content, attrType) {
    if (!content) return;
    const selector = attrType === 'property'
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let meta = document.querySelector(selector);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attrType, nameOrProperty);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }
};

// Auto-initialize on DOM ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => SiteRenderer.init());
  } else {
    SiteRenderer.init();
  }
}

// Make available globally
if (typeof window !== 'undefined') {
  window.SiteRenderer = SiteRenderer;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SiteRenderer;
}
