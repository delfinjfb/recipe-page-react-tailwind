import { useEffect } from 'react';

const Matomo = () => {
  useEffect(() => {
    const _paq = (window._paq = window._paq || []);
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);

    (function () {
      const u = 'https://delfinowebsite.matomo.cloud/';
      _paq.push(['setTrackerUrl', u + 'matomo.php']);
      _paq.push(['setSiteId', '1']);
      const d = document;
      const g = d.createElement('script');
      const s = d.getElementsByTagName('script')[0];
      g.async = true;
      g.src = 'https://cdn.matomo.cloud/delfinowebsite.matomo.cloud/matomo.js';
      s.parentNode.insertBefore(g, s);
    })();
  }, []);

  return null; 
};

export default Matomo;
