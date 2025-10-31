import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { LANGUAGES } from '@constants/languages';
import { InternalizationIcon } from '@assets/icons/internalizationIcon';

import styles from './popupLanguages.module.css';

export const PopupLanguages = () => {
  const { i18n, t } = useTranslation();
  const [isActivePopup, setIsActivePopup] = useState(false);
  const isActivePopupRef = useRef(false);
  const popupLanguagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutsidePopup, true);

    return () => {
      document.removeEventListener('click', handleClickOutsidePopup);
    };
  }, []);

  const handleClickOutsidePopup = ({ target }: MouseEvent) => {
    if (!popupLanguagesRef.current?.contains(target as Node)) {
      if (isActivePopupRef.current) {
        setIsActivePopup(false);
        isActivePopupRef.current = false;
      }
    }
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language.toLowerCase());
    onClickPopupLanguages();
  };

  const onClickPopupLanguages = () => {
    setIsActivePopup(!isActivePopup);
    isActivePopupRef.current = !isActivePopupRef.current;
  };

  return (
    <div className={styles.popupMenuContainer} ref={popupLanguagesRef}>
      <button
        className={`${styles.buttonPopup} ${isActivePopup ? null : styles.buttonPopupIsInactive}`}
        onClick={onClickPopupLanguages}
        aria-label={`${t('popupLanguages.currentLanguage')}: ${t(`languages.${i18n.resolvedLanguage}`)}. ${t(
          'popupLanguages.chooseLanguage',
        )}`}
        aria-expanded={isActivePopup}
        aria-controls='language-list'
      >
        {i18n.resolvedLanguage?.toUpperCase()}&nbsp;
        <InternalizationIcon />
      </button>
      <div id='language-list' className={isActivePopup ? styles.popupMenuOpened : styles.popupMenu}>
        {Object.entries(LANGUAGES).map((lng) => {
          const [key, value] = lng;
          const isCurrent = key === i18n.resolvedLanguage;
          return (
            <button
              className={styles.buttonLngAbbr}
              key={key}
              onClick={() => changeLanguage(key)}
              aria-label={`${t('popupLanguages.changeLanguage')} ${t(`languages.${key.toLowerCase()}`)}`}
              aria-current={isCurrent ? 'true' : undefined}
            >
              {value.abbreviation}
            </button>
          );
        })}
      </div>
    </div>
  );
};
