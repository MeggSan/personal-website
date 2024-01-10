import { useContext } from 'react';

import { DarkModeContext } from '@contexts/darkModeContext';
import { SunIcon } from '@assets/icons/sunIcon';
import { MoonIcon } from '@assets/icons/moonIcon';

import styles from './darkModeToggle.module.css';

export const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className={styles.darkMode}>
      <input
        className={styles.darkModeInput}
        type='checkbox'
        id='dark-mode-toggle'
        onChange={toggleDarkMode}
        defaultChecked={!darkMode}
      />
      <label className={styles.darkModeLabel} htmlFor='dark-mode-toggle'>
        <SunIcon className={styles.sun} />
        <MoonIcon className={styles.moon} />
      </label>
    </div>
  );
};
