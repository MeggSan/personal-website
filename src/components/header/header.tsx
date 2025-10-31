import { useContext, useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Navbar } from '@components/navbar/navbar';
import { DarkModeContext } from '@contexts/darkModeContext';
import { MenuIcon } from '@assets/icons/menuIcon';

import MSLogoDark from '@assets/images/logo/MS-logo-dark.svg';
import MSLogoLight from '@assets/images/logo/MS-logo-light.svg';

import styles from './header.module.css';

export const Header = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const isMenuDisplayedRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideMenu, true);
    return () => {
      document.removeEventListener('click', handleClickOutsideMenu);
    };
  }, []);

  const onClickMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutsideMenu = ({ target }: MouseEvent): void => {
    if (!isMenuDisplayedRef.current?.contains(target as Node)) {
      setShowMenu(false);
    }
  };

  return (
    <header ref={isMenuDisplayedRef}>
      <div className={styles.header}>
        <Link to={`/`} aria-current={path === '/' ? 'page' : undefined}>
          <img
            className={styles.logo}
            src={darkMode ? MSLogoDark : MSLogoLight}
            alt={t('header.returnHome')}
            width='50'
            height='50'
            decoding='async'
          />
        </Link>
        <button
          className={styles.menuIconContainer}
          onClick={onClickMenu}
          aria-label={showMenu ? t('header.closeMenu') : t('header.openMenu')}
          aria-expanded={showMenu}
          aria-controls='main-navigation'
        >
          <MenuIcon />
        </button>
      </div>
      <Navbar showMenu={showMenu} />
    </header>
  );
};
