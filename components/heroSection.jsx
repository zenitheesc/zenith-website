import React from 'react';
import styles from '../styles/HeroSection.module.css';

function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <video src="images/HomePage/video2.mp4" autoPlay loop muted />
      <h1>A CASA DAS ESTRELAS EM SÃO CARLOS</h1>
      <hr />
      <p>
        Desde 2014, o Zenith Aerospace proporciona a centenas de alunos a oportunidade de
        conquistar o espaço
      </p>
    </div>
  );
}

export default HeroSection;
