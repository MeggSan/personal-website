import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Header } from '@components/header/header';
import { Footer } from '@components/footer/footer';
import { DarkModeProvider } from '@contexts/darkModeContext';
import { useCanonicalUrl } from '@hooks/useCanonicalUrl';

function App() {
  const { i18n } = useTranslation();
  useCanonicalUrl();

  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language);
  }, [i18n.language]);

  return (
    <DarkModeProvider>
      <Header />
      <main tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </DarkModeProvider>
  );
}

export default App;
