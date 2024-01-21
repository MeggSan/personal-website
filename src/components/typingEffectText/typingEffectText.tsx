import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './typingEffectText.module.css';

export const TypingEffectText = ({ isHome = false }: { isHome: boolean }) => {
  const { t } = useTranslation();

  const rolesWords = [
    t('roles.frontendDeveloper'),
    t('roles.webDeveloper'),
    t('roles.mobileDeveloper'),
    t('roles.computerEngineer'),
  ];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    const i = loopNum % rolesWords.length;
    const fullText = rolesWords[i];
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <span className={`${styles.typingEffectText} ${isHome ? styles.typingEffectTextHome : ''}`}>
      <b>{text}</b>
    </span>
  );
};
