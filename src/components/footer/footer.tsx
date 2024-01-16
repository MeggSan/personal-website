import { LinkedinIcon } from '@assets/icons/linkedinIcon';
import { GithubIcon } from '@assets/icons/githubIcon';
import { MailIcon } from '@assets/icons/mailIcon';

import styles from './footer.module.css';

const PERSONAL_MAIL = 'meggie.sanchez@gmail.com';
const GITHUB_LINK_URL = 'https://github.com/MeggSan';
const LINKEDIN_LINK_URL = 'https://www.linkedin.com/in/meggie-sanchez';

export const Footer = () => {
  return (
    <footer>
      <a className={styles.footerIconContainer} href={LINKEDIN_LINK_URL} target='_blank' rel='noopener noreferrer'>
        <LinkedinIcon /> &nbsp;&nbsp;LinkedIn
      </a>
      <span className={styles.pipeSeparator}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <a className={styles.footerIconContainer} href={GITHUB_LINK_URL} target='_blank' rel='noopener noreferrer'>
        <GithubIcon /> &nbsp;&nbsp;GitHub
      </a>
      <span className={styles.pipeSeparator}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <a className={styles.footerIconContainer} href={`mailto:${PERSONAL_MAIL}`}>
        <MailIcon /> &nbsp;&nbsp;Mail
      </a>
    </footer>
  );
};
