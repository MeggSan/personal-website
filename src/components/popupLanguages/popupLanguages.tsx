import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { LANGUAGES } from '@constants/languages';
import { InternalizationIcon } from '@assets/icons/internalizationIcon';

import styles from './popupLanguages.module.css';

export const PopupLanguages = () => {
  const { i18n } = useTranslation();
  const [isActivePopup, setIsActivePopup] = useState(false);
  const isActivePopupRef = useRef(false);
  const popupLanguagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutsidePopup, true);

    return () => {
      document.removeEventListener('click', handleClickOutsidePopup);
    };
  }, []);

  const handleClickOutsidePopup = ({ target }: MouseEvent): void => {
    if (!popupLanguagesRef.current?.contains(target as Node)) {
      if (isActivePopupRef.current) {
        setIsActivePopup(false);
        isActivePopupRef.current = false;
      }
    }
  };

  const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language.toLowerCase());
    onClickPopupLanguages();
  };

  const onClickPopupLanguages = (): void => {
    setIsActivePopup(!isActivePopup);
    isActivePopupRef.current = !isActivePopupRef.current;
  };

  return (
    <div className={styles.popupMenuContainer} ref={popupLanguagesRef}>
      <button
        className={`${styles.buttonPopup} ${isActivePopup ? null : styles.buttonPopupIsInactive}`}
        onClick={onClickPopupLanguages}
      >
        {i18n.resolvedLanguage?.toUpperCase()}&nbsp;
        <InternalizationIcon />
      </button>
      <div className={isActivePopup ? styles.popupMenuOpened : styles.popupMenu}>
        {Object.entries(LANGUAGES).map((lng) => {
          const [key, value] = lng;
          return (
            <button className={styles.buttonLngAbbr} key={key} onClick={() => changeLanguage(key)}>
              {value.abbreviation}
            </button>
          );
        })}
      </div>
    </div>
  );
};
