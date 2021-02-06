import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import React from 'react';
import styles from '../../styles/HeroSection.module.css';

export default function HeroSection(props) {
  const backgroundImage = {
    background: `url(${props.imgPath}) center center/cover no-repeat`,
  };

  return (
    <div style={backgroundImage} className={styles.heroContainer}>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}
