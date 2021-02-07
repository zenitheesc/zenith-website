import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/HeroSection.module.css';

function HeroSection() {
  const videoElement = useRef(null);
  const [videoAutoPlayable, setVideoAutoPlayable] = useState(true);

  const attemptPlay = () => {
    videoElement && videoElement.current && videoElement.current.play()
      .then(() => { setVideoAutoPlayable(true); })
      .catch((err) => { setVideoAutoPlayable(false); });
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
      <h1>O LAR DAS ESTRELAS EM SÃO CARLOS</h1>
      <hr />
      <p>
        Desde 2014, o Zenith Aerospace proporciona a centenas de alunos a oportunidade
        de conquistar o espaço
      </p>
    </div>
  );
}

export default HeroSection;
