import React, { useRef } from 'react';
import ReactRotatingText from 'react-rotating-text';
import styles from 'styles/projects/ProjectHeroSection.module.css';

export default function HeroSection(props) {
  const backgroundImage = {
    backgroundImage: `${props.backgroundImage}`,
    backgroundColor: `${props.backgroundColor}`,
  };

  const { path } = props
  const videoElement = useRef(null);

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
      <div className={styles.videoContainer}>
        <video ref={videoElement} autoPlay loop muted playsInline preload="auto">
          <source src={`/images/Projetos/${path}`} />
        </video>
      </div>

    </div>
  );
}
