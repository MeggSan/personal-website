import Slider from 'react-slick';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { PROJECTS_LIST } from '@constants/projects';
import { ReactIcon } from '@assets/icons/reactIcon';
import { JavascriptIcon } from '@assets/icons/javascriptIcon';
import { TypescriptIcon } from '@assets/icons/typescriptIcon';
import { HtmlIcon } from '@assets/icons/htmlcon';
import { CssIcon } from '@assets/icons/cssIcon';
import { GraphQLIcon } from '@assets/icons/graphqlIcon';
import { GitIcon } from '@assets/icons/gitIcon';
import { ReduxIcon } from '@assets/icons/reduxIcon';
import { AngularIcon } from '@assets/icons/angularIcon';
import { IonicIcon } from '@assets/icons/ionicIcon';
import { SassIcon } from '@assets/icons/sassIcon';
import { AWSIcon } from '@assets/icons/awsIcon';
import { DesktopIcon } from '@assets/icons/desktopIcon';
import { MobileIcon } from '@assets/icons/mobileIcon';

import { ProjectType, type Technology } from '@interfaces/types.d';

import styles from './projectDetail.module.css';
import './reactSlick.css';

const { MOBILE } = ProjectType;
const HTTP = 'http';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // fade: true,
};

const TECHNOLOGIES_ICONS: Technology = {
  react: <ReactIcon />,
  reactnative: <ReactIcon />,
  javascript: <JavascriptIcon />,
  typescript: <TypescriptIcon />,
  html: <HtmlIcon />,
  css: <CssIcon />,
  graphql: <GraphQLIcon />,
  git: <GitIcon />,
  redux: <ReduxIcon />,
  angular: <AngularIcon />,
  ionic: <IonicIcon />,
  sass: <SassIcon />,
  awsservices: <AWSIcon />,
};

const InformationSection = ({
  categoryText,
  categoryContentText,
}: {
  categoryText: string;
  categoryContentText: string;
}) => {
  return (
    <div className={styles.projectDetailInformationItem}>
      <h3 className={styles.categoryText}>{categoryText}</h3>
      <p className={styles.categoryContentText}>{categoryContentText}</p>
    </div>
  );
};

export const ProjectDetail = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const projectId = location.pathname.split('/')[2];

  return (
    <section className={styles.projectDetailContainer}>
      <h2 className='pageTitleText'>{t(`projects.${projectId}.title`)}</h2>
      <div
        className={`${styles.sliderProjectDetail} ${
          PROJECTS_LIST[projectId].type === MOBILE ? styles.sliderProjectDetailMobile : styles.sliderProjectDetailWeb
        }`}
      >
        <Slider {...settings}>
          {PROJECTS_LIST[projectId].images.map((image, index) => {
            return (
              <img className={styles.projectDetailImage} key={index} src={image} alt={PROJECTS_LIST[projectId].title} />
            );
          })}
        </Slider>
      </div>
      <div className={styles.projectDetailInformationContainer}>
        <InformationSection
          categoryText={t('projectDetail.title')}
          categoryContentText={t(`projects.${projectId}.title`)}
        />
        <InformationSection
          categoryText={t('projectDetail.description')}
          categoryContentText={t(`projects.${projectId}.description`)}
        />
        <InformationSection
          categoryText={t('projectDetail.type')}
          categoryContentText={t(`projects.${projectId}.type`)}
        />
        <InformationSection
          categoryText={t('projectDetail.year')}
          categoryContentText={t(`projects.${projectId}.year`)}
        />
        <div className={styles.projectDetailInformationItem}>
          <h3 className={styles.categoryText}>{t('projectDetail.technologies')}</h3>
          <div className={styles.technologiesContainer}>
            {PROJECTS_LIST[projectId].technologies.map((technology, index) => {
              return (
                <div className={styles.technologiesContainer} key={index}>
                  <p className={styles.categoryContentText}>{technology}&nbsp;&nbsp;</p>
                  {TECHNOLOGIES_ICONS[technology.replace(' ', '').toLowerCase()]}&nbsp;&nbsp;
                </div>
              );
            })}
          </div>
        </div>
        {typeof t(`projects.${projectId}.links`) !== 'string' ? (
          <div className={styles.projectDetailInformationItem}>
            <h3 className={styles.categoryText}>{t('projectDetail.links')}</h3>
            <div className={styles.technologiesContainer}>
              {t(`projects.${projectId}.links.web`).slice(0, 4) === HTTP ? (
                <div className={styles.technologiesContainer}>
                  <a
                    className={styles.categoryContentText}
                    href={t(`projects.${projectId}.links.web`)}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {t('projectDetail.web')}
                  </a>
                  &nbsp;&nbsp;
                  <DesktopIcon />
                </div>
              ) : null}
              {t(`projects.${projectId}.links.appstore`).slice(0, 4) === HTTP ? (
                <div className={styles.technologiesContainer}>
                  <a
                    className={styles.categoryContentText}
                    href={t(`projects.${projectId}.links.appstore`)}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {t('projectDetail.appstore')}
                  </a>
                  &nbsp;&nbsp;
                  <MobileIcon />
                </div>
              ) : null}
              {t(`projects.${projectId}.links.playstore`).slice(0, 4) === HTTP ? (
                <div className={styles.technologiesContainer}>
                  &nbsp;&nbsp;
                  <a
                    className={styles.categoryContentText}
                    href={t(`projects.${projectId}.links.playstore`)}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {t('projectDetail.playstore')}
                  </a>
                  &nbsp;&nbsp;
                  <MobileIcon />
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};
