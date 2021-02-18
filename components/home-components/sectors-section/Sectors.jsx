import React from 'react';
import SectorsButtons from './SectorsButtons';
import styles from '../../../styles/Sectors.module.css';

function Sectors(props) {
  const { title } = props.textContent;
  const { subtitle } = props.textContent;

  return (
    <div className={styles.sectorsContainer}>
      <div className={styles.textSection}>
        <h1>
          {title}
        </h1>
        <h3>
          {subtitle}
        </h3>
      </div>
      <SectorsButtons textContent={props.textContent} />
    </div>
  );
}

export default Sectors;
