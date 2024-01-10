import { useTranslation } from 'react-i18next';

import { TypingEffectText } from '@components/typingEffectText/typingEffectText';
import { PusheenIcon } from '@assets/icons/pusheenIcon';

import styles from './home.module.css';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.homeContainer}>
      <h3 className={`${styles.titleText} ${styles.mediumSizeText}`}>{t('home.hello1')}</h3>
      <div className={styles.nameContainer}>
        <h1 className={`${styles.titleText} ${styles.bigSizeText}`}>{t('home.name')}</h1>
        <PusheenIcon />
      </div>
      <span className={`${styles.titleText} ${styles.bigSizeText}`}>
        {t('home.hello2')}&nbsp;
        <TypingEffectText />
      </span>
    </section>
  );
};
