import { Outlet } from 'react-router-dom';

import { Header } from '@components/header/header';
import { Footer } from '@components/footer/footer';
import { DarkModeProvider } from '@contexts/darkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </DarkModeProvider>
  );
}

export default App;
