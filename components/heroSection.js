import React from 'react';
import { isMobileSafari, isIOS, isMobileOnly } from 'react-device-detect';
import styles from '../styles/HeroSection.module.css';

function HeroSection() {
  if (isMobileSafari) {
    return (
      <div className={styles.heroContainer}>
        <video autoPlay loop muted playsInline preload="auto">
          <source src="images/HomePage/videoiOS.mp4" type="video/mp4" />
        </video>
        <h1>A CASA DAS ESTRELAS EM SÃO CARLOS</h1>
        <hr />
        <p>
          Desde 2014, o Zenith Aerospace proporciona a centenas de alunos a oportunidade
          de conquistar o espaço
        </p>
      </div>
    );
  } if (!isMobileOnly || isIOS) {
    return (
      <div className={styles.heroContainer}>
        <video autoPlay loop muted playsInline preload="auto">
          <source src="images/HomePage/original.mp4" type="video/mp4" />
          <source src="images/HomePage/video.webm" type="video/webm" />
          <source src="images/HomePage/video.ogg" type="video/ogg" />
        </video>
        <h1>A CASA DAS ESTRELAS EM SÃO CARLOS</h1>
        <hr />
        <p>
          Desde 2014, o Zenith Aerospace proporciona a centenas de alunos a oportunidade
          de conquistar o espaço
        </p>
      </div>
    );
  } else {
    return (
      <div className={styles.heroContainer}>
        <video autoPlay loop muted playsInline preload="auto">
          <source src="images/HomePage/comp5.m4v"/>
        </video>
        <h1>A CASA DAS ESTRELAS EM SÃO CARLOS</h1>
        <hr />
        <p>
          Desde 2014, o Zenith Aerospace proporciona a centenas de alunos a oportunidade
          de conquistar o espaço
        </p>
      </div>
    );
  }
}

export default HeroSection;
