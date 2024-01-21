import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from '@components/navbar/navbar';
import { DarkModeContext } from '@contexts/darkModeContext';
import { MenuIcon } from '@assets/icons/menuIcon';

import MSLogoDark from '@assets/images/logo/MS-logo-dark.svg';
import MSLogoLight from '@assets/images/logo/MS-logo-light.svg';

import styles from './header.module.css';

export const Header = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [showMenu, setShowMenu] = useState(false);

  const onClickMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className={styles.header}>
        <Link to={`/`}>
          <picture className={styles.pictureLogo}>
            {darkMode ? (
              <img
                className={styles.logo}
                src={MSLogoDark}
                alt='MS Logo Dark Mode Image'
                width='50'
                height='50'
                decoding='async'
              />
            ) : (
              <img
                className={styles.logo}
                src={MSLogoLight}
                alt='MS Logo Light Mode Image'
                width='50'
                height='50'
                decoding='async'
              />
            )}
          </picture>
        </Link>
        <button className={styles.menuIconContainer} onClick={onClickMenu} aria-label='menu'>
          <MenuIcon />
        </button>
      </div>
      <Navbar showMenu={showMenu} />
    </header>
  );
};
