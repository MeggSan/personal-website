import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { PopupLanguages } from '@components/popupLanguages/popupLanguages';
import { DarkModeToggle } from '@components/darkModeToggle/darkModeToggle';

import { ROUTES } from '@constants/routes';

import styles from './navbar.module.css';

const {
  ABOUT_ME,
  PROJECTS,
  // LAB
} = ROUTES;

export const Navbar = ({ showMenu }: { showMenu: boolean }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const path = location.pathname.split('/')[1];

  return (
    <nav id='main-navigation' className={showMenu ? '' : styles.navbar} aria-label={t('navbar.mainNavigation')}>
      <ul>
        <li>
          <Link
            to={ABOUT_ME}
            className={path === ABOUT_ME ? styles.currentRoute : ''}
            aria-current={path === ABOUT_ME ? 'page' : undefined}
          >
            {t('sections.aboutMe')}
          </Link>
        </li>
        <li>
          <Link
            to={PROJECTS}
            className={path === PROJECTS ? styles.currentRoute : ''}
            aria-current={path === PROJECTS ? 'page' : undefined}
          >
            {t('sections.projects')}
          </Link>
        </li>
        {/* <li>
          <Link to={LAB} className={path === LAB ? styles.currentRoute : ''}>
            {t('sections.lab')}
          </Link>
        </li> */}
        <li>
          <DarkModeToggle />
        </li>
        <li>
          <PopupLanguages />
        </li>
      </ul>
    </nav>
  );
};
