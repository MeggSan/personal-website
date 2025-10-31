import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MAIN_URL = 'https://meggsan.netlify.app';

export const useCanonicalUrl = () => {
  const location = useLocation();

  useEffect(() => {
    const canonicalUrl = `${MAIN_URL}${location.pathname}`;

    const link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute('href', canonicalUrl);
    }
  }, [location]);
};
