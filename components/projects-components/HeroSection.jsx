import React, { useRef } from 'react';
import ReactRotatingText from 'react-rotating-text';
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
          {props.array !== undefined ? (
            <ReactRotatingText items={props.array} />
          ) : (
            <></>
          )}
        </h2>
      </div>
      <div className={styles.imgContainer}>
        <img src={`/images/Projetos/${path}`} />
      </div>

    </div>
  );
}
