import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaMedium
} from 'react-icons/fa';
import styles from 'styles/Footer.module.css';
import LanguageSelector from './LanguageSelector';

function Footer() {
  const { t } = useTranslation();
  const copyright = t('common:footer.copyright');
  const easterEgg = t('common:footer.easterEgg');
  return (
    <div className={styles.footer}>
      <div>
        <div className={styles.footerLeftSide}>
          <a href="#">
            <img
              src="/images/Footer/logo.svg"
              alt="Zenith Logo"
              width="148px"
              height="79px"
            />
          </a>
          <div className={styles.footerData}>
            <span id={styles.zenithCopyright}>{copyright}</span>
            <span id={styles.easterEgg}>{easterEgg}</span>
          </div>
        </div>
        <LanguageSelector />
      </div>
      <div className={styles.footerRightSide}>
        <div className={styles.socialIconContainer}>
          <a
            className={styles.socialIcon}
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/zenitheesc">
            <FaFacebook />
          </a>
          <a
            className={styles.socialIcon}
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/zenith_eesc/">
            <FaInstagram />
          </a>
          <a
            className={styles.socialIcon}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/zenitheesc">
            <FaGithub />
          </a>
          <a
            className={styles.socialIcon}
            aria-label="Youtube"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UChrHC1G3VuzgKDTOzVaCgzg">
            <FaYoutube />
          </a>
          <a
            className={styles.socialIcon}
            aria-label="Medium"
            target="_blank"
            rel="noopener noreferrer"
            href="https://zenith-eesc.medium.com">
            <FaMedium />
          </a>
        </div>
        <a href="http://vercel.com/?utm_source=zenith-aerospace&utm_campaign=oss">
          <img alt="Vercel Logo" src={'images/Footer/Vercel.svg'} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
