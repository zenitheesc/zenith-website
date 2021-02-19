import React from 'react';
import Embarcados from './icons/Embarcados';
import Estruturas from './icons/Estruturas';
import Astrobiologia from './icons/Astrobiologia';
import Gestão from './icons/Gestão';
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
      <div className={styles.sectorsButtons}>
        <SectorsButtons label={props.textContent.embarcados}>
          <Embarcados />
        </SectorsButtons>
        <SectorsButtons label={props.textContent.estruturas}>
          <Estruturas />
        </SectorsButtons>
        <SectorsButtons label={props.textContent.astrobiologia}>
          <Astrobiologia />
        </SectorsButtons>
        <SectorsButtons label={props.textContent.gestao}>
          <Gestão />
        </SectorsButtons>
      </div>
    </div>
  );
}

export default Sectors;
