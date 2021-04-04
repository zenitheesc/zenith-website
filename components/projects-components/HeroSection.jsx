import React from 'react';
import styles from 'styles/projects/ProjectHeroSection.module.css';

export default function HeroSection(props) {
  const backgroundImage = {
    backgroundImage: `${props.backgroundImage}`,
    backgroundColor: `${props.backgroundColor}`,
  };

  const { path } = props

  return (
    <div style={backgroundImage} className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1>{props.title}</h1>
        <h2>
          {props.subtitle}
        </h2>
      </div>
      <div className={styles.imgContainer}>
        <img alt={"Projeto explodido do cubesat zensat mostrando cada uma de suas placase os paineis laterais"} src={`/images/Projetos/${path}`} />
      </div>

    </div>
  );
}
