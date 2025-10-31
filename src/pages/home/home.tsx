import { useTranslation } from 'react-i18next';

import { TypingEffectText } from '@components/typingEffectText/typingEffectText';
import PusheenImg from '@assets/images/pusheen-img.webp';

import styles from './home.module.css';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.homeContainer} aria-label={t('sections.home')}>
      <h3 className={`${styles.titleText} ${styles.mediumSizeText}`}>{t('home.hello1')}</h3>
      <div className={styles.nameContainer}>
        <h1 className={`${styles.titleText} ${styles.bigSizeText}`}>{t('home.name')}</h1>
        <img src={PusheenImg} alt='Pusheen Image' width={121} height={82} />
      </div>
      <span className={`${styles.titleText} ${styles.bigSizeText}`}>
        {t('home.hello2')}&nbsp;
        <TypingEffectText isHome={true} />
      </span>
    </section>
  );
};
