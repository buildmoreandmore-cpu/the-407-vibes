/**
 * Google Places Client Helper
 * Provides convenience methods for place photos and map embeds.
 */
const GooglePlaces = {
  // Google Maps Embed API key (safe for client-side — Maps Embed API is free and designed for browser use)
  MAPS_EMBED_KEY: 'AIzaSyB1Et0TpTJaGLD8I6_XB7T4zs0o0y6H5cA',

  /**
   * Returns a URL that serves a real Google Places photo via the server-side proxy.
   * @param {string} query - Place name, e.g. "Lake Eola Park Orlando FL"
   * @param {number} [maxwidth=800] - Max image width
   * @returns {string} URL like /api/places?query=Lake+Eola+Park+Orlando+FL&maxwidth=800
   */
  getPhotoUrl(query, maxwidth) {
    const params = new URLSearchParams({ query });
    if (maxwidth) params.set('maxwidth', String(maxwidth));
    return '/api/places?' + params.toString();
  },

  /**
   * Returns a Google Maps Embed API URL for an iframe src.
   * @param {string} query - Place or area, e.g. "Downtown Orlando FL"
   * @param {number} [zoom=14] - Map zoom level
   * @returns {string} Google Maps Embed URL
   */
  getMapEmbedUrl(query, zoom) {
    const params = new URLSearchParams({
      key: this.MAPS_EMBED_KEY,
      q: query,
      zoom: String(zoom || 14),
    });
    return 'https://www.google.com/maps/embed/v1/place?' + params.toString();
  },

  /**
   * Applies a gradient fallback when an image fails to load.
   * Attach to img onError: onError={GooglePlaces.handleImageError}
   * @param {Event} e - The error event from the img element
   */
  handleImageError(e) {
    const img = e.target || e;
    img.style.display = 'none';
    const wrapper = img.parentElement;
    if (wrapper && !wrapper.querySelector('.places-fallback')) {
      const fallback = document.createElement('div');
      fallback.className = 'places-fallback';
      fallback.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg,#FF6B35 0%,#E8530E 40%,#1E293B 100%);';
      wrapper.style.position = 'relative';
      wrapper.insertBefore(fallback, wrapper.firstChild);
    }
  }
};

if (typeof window !== 'undefined') {
  window.GooglePlaces = GooglePlaces;

  // Global error handler: auto-fallback for any image loaded from /api/places
  document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG' && e.target.src && e.target.src.includes('/api/places')) {
      e.target.onerror = null; // prevent infinite loop
      e.target.style.background = 'linear-gradient(135deg, #FF6B35 0%, #E8530E 40%, #1E293B 100%)';
      e.target.style.objectFit = 'cover';
      e.target.removeAttribute('src');
    }
  }, true);
}
