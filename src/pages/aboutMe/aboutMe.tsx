import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { DarkModeContext } from '@contexts/darkModeContext';
import { TypingEffectText } from '@components/typingEffectText/typingEffectText';
import { Tooltip } from '@components/tooltip/tooltip';

import styles from './aboutMe.module.css';

import TypescriptIcon from '@assets/images/coloredIcons/typescriptIcon.svg';
import ReactIcon from '@assets/images/coloredIcons/reactIcon.svg';
import JavascriptIcon from '@assets/images/coloredIcons/javascriptIcon.svg';
import HtmlIcon from '@assets/images/coloredIcons/htmlIcon.svg';
import CssIcon from '@assets/images/coloredIcons/cssIcon.svg';
import AngularIcon from '@assets/images/coloredIcons/angularIcon.svg';
import IonicIcon from '@assets/images/coloredIcons/ionicIcon.svg';
import GithubIcon from '@assets/images/coloredIcons/githubIcon.svg';
import GitIcon from '@assets/images/coloredIcons/gitIcon.svg';
import AwsIconDark from '@assets/images/coloredIcons/awsIconDark.svg';
import AwsIconLight from '@assets/images/coloredIcons/awsIconLight.svg';
import GraphqlIcon from '@assets/images/coloredIcons/graphqlIcon.svg';
import ReduxIcon from '@assets/images/coloredIcons/reduxIcon.svg';
import SassIcon from '@assets/images/coloredIcons/sassIcon.svg';
import FigmaIcon from '@assets/images/coloredIcons/figmaIcon.svg';
import NextJSIconDark from '@assets/images/coloredIcons/nextjsIconDark.svg';
import NextJSIconLight from '@assets/images/coloredIcons/nextjsIconLight.svg';
import BootstrapIcon from '@assets/images/coloredIcons/bootstrapIcon.svg';
import JestIcon from '@assets/images/coloredIcons/jestIcon.svg';
import CypressIcon from '@assets/images/coloredIcons/cypressIcon.svg';
import TailwindIcon from '@assets/images/coloredIcons/tailwindIcon.svg';

import DarkBGPhoto from '@assets/images/photos/photo-dark.jpeg';
import LightBGPhoto from '@assets/images/photos/photo-light.jpeg';

const technologiesTools = [
  { icon: JavascriptIcon, name: 'JavaScript' },
  { icon: HtmlIcon, name: 'HTML' },
  { icon: CssIcon, name: 'CSS' },
  { icon: ReactIcon, name: 'React' },
  { icon: AngularIcon, name: 'Angular' },
  { icon: TypescriptIcon, name: 'TypeScript' },
  { icon: IonicIcon, name: 'Ionic' },
  { icon: SassIcon, name: 'Sass' },
  { icon: ReactIcon, name: 'React Native' },
  { icon: AwsIconLight, darkIcon: AwsIconDark, name: 'Amazon Web Services' },
  { icon: GraphqlIcon, name: 'GraphQL' },
  { icon: ReduxIcon, name: 'Redux' },
  { icon: BootstrapIcon, name: 'Bootstrap' },
  { icon: GithubIcon, name: 'GitHub' },
  { icon: GitIcon, name: 'Git' },
  { icon: FigmaIcon, name: 'Figma' },
  { icon: NextJSIconLight, darkIcon: NextJSIconDark, name: 'NextJS' },
  { icon: JestIcon, name: 'Jest' },
  { icon: CypressIcon, name: 'Cypress' },
  { icon: TailwindIcon, name: 'Tailwind' },
];

export const AboutMe = () => {
  const { t } = useTranslation();
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section className={styles.aboutMeSection}>
      <h2 className={`${styles.name} pageTitleText`}>{t('home.name')}</h2>
      <span className={`${styles.titleText} ${styles.bigSizeText}`}>
        <TypingEffectText isHome={false} />
      </span>
      <div className={styles.aboutMeContainer}>
        <img className={styles.personalPhoto} src={darkMode ? LightBGPhoto : DarkBGPhoto} alt='' />
        <div>
          <p className={styles.aboutMeText}>{t('aboutMe.aboutMeText1')}</p>
          <p className={styles.aboutMeText}>{t('aboutMe.aboutMeText2')}</p>
          <p className={styles.aboutMeText}>{t('aboutMe.aboutMeText3')}</p>
          <p className={styles.aboutMeText}>{t('aboutMe.aboutMeText4')}</p>
        </div>
      </div>
      <h2 className={`${styles.title} ${styles.subtitleText}`}>{t('aboutMe.technologiesAndTools')}</h2>
      <div className={styles.technologiesContainer}>
        {technologiesTools.map(({ icon, name, darkIcon }) => {
          return <Tooltip key={name} icon={darkMode && darkIcon ? darkIcon : icon} technologyName={name} />;
        })}
      </div>
    </section>
  );
};
