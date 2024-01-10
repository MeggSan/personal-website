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
      <span>
        <a className={styles.footerIcon} href={LINKEDIN_LINK_URL} target='_blank' rel='noopener noreferrer'>
          <LinkedinIcon /> &nbsp;&nbsp;LinkedIn
        </a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a className={styles.footerIcon} href={GITHUB_LINK_URL} target='_blank' rel='noopener noreferrer'>
          <GithubIcon /> &nbsp;&nbsp;GitHub
        </a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a className={styles.footerIcon} href={`mailto:${PERSONAL_MAIL}`}>
          <MailIcon /> &nbsp;&nbsp;Mail
        </a>
      </span>
    </footer>
  );
};
