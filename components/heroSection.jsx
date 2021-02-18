import React, { useEffect, useState, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/HomepageHeroSection.module.css';

function HomepageHeroSection() {
  const videoElement = useRef(null);
  const [videoAutoPlayable, setVideoAutoPlayable] = useState(true);
  const { t } = useTranslation();
  const title = t('homePage:homePageHero.title');
  const subtitle = t('homePage:homePageHero.subtitle');
  const attemptPlay = () => {
    videoElement && videoElement.current && videoElement.current.play()
      .then(() => { setVideoAutoPlayable(true); })
      .catch(() => { setVideoAutoPlayable(false); });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className={videoAutoPlayable ? styles.heroContainer : `${styles.heroContainer} ${styles.heroContainerStaticImage}`}>
      <video ref={videoElement} autoPlay loop muted playsInline preload="auto">
        <source src="images/HomePage/videoIOS.mp4" type="video/mp4" />
        <source src="images/HomePage/video.mp4" type="video/mp4" />
        <source src="images/HomePage/video.webm" type="video/webm" />
      </video>
      <h1>{title}</h1>
      <hr />
      <p>
        {subtitle}
      </p>
    </div>
  );
}

export default HomepageHeroSection;
