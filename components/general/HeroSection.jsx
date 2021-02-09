import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import styles from '../../styles/HeroSection.module.css';

export default function HeroSection(props) {
  const backgroundImage = {
    backgroundImage: `${props.backgroundImage}`,
    backgroundColor: `${props.backgroundColor}`,
  };

  return (
    <div style={backgroundImage} className={styles.heroContainer}>
      <h1>{props.title}</h1>
      <h2>
        {props.subtitle}
        {props.array !== undefined ? <ReactRotatingText items={props.array} /> : <></>}
      </h2>
    </div>
  );
}
