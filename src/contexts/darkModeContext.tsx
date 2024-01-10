import { createContext, useEffect, useState, PropsWithChildren } from 'react';

type ThemeContext = {
  darkMode: boolean;
  toggleDarkMode: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DarkModeContext = createContext<ThemeContext>({} as ThemeContext);

export const DarkModeProvider = (props: PropsWithChildren) => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (darkMode) {
      document.querySelector('body')?.setAttribute('data-theme', 'dark');
    } else {
      document.querySelector('body')?.setAttribute('data-theme', 'light');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      changeToLightMode();
    } else {
      changeToDarkMode();
    }
  };

  const changeToDarkMode = () => {
    document.querySelector('body')?.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    setDarkMode(true);
  };

  const changeToLightMode = () => {
    document.querySelector('body')?.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    setDarkMode(false);
  };

  return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{props.children}</DarkModeContext.Provider>;
};
