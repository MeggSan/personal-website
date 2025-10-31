import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { ROUTES } from '@constants/routes';
import { PROJECTS_LIST } from '@constants/projects';
import { ProjectType } from '@interfaces/types.d';

import styles from './projects.module.css';

const { PROJECTS } = ROUTES;
const { WEB } = ProjectType;

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.projectsContainer} aria-label={t('sections.projects')}>
      <h2 className='pageTitleText'>{t('sections.projects')}</h2>
      <div className={styles.projectsListContainer}>
        {Object.values(PROJECTS_LIST).map(({ id, title, type, images }) => {
          return (
            <Link
              className={styles.projectContainer}
              to={`/${PROJECTS}/${id}`}
              key={id}
              aria-label={`${title} ${t('projects.project')}`}
            >
              <p className={styles.projectTitle}>{title}</p>
              <img
                className={type === WEB ? styles.projectWebImage : styles.projectMobileImage}
                src={images[0]}
                alt={`${t(`projects.${id}.alt`)}`}
                aria-hidden={true}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};
