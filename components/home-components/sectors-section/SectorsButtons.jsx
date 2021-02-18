import React from 'react';
import Embarcados from './icons/Embarcados';
import Estruturas from './icons/Estruturas';
import Astrobiologia from './icons/Astrobiologia';
import Gestão from './icons/Gestão';
import styles from '../../../styles/Sectors.module.css';

export default function SectorsButtons(props) {
  const { embarcados } = props.textContent;
  const { estruturas } = props.textContent;
  const { astrobiologia } = props.textContent;
  const { gestao } = props.textContent;

  return (
    <div className={styles.sectorsButtons}>
      <div className={styles.sectorsButton}>
        <button type="button">
          <Embarcados />
        </button>
        <h3>
          {embarcados.title}
        </h3>
      </div>
      <div className={styles.sectorsButton}>
        <button type="button">
          <Estruturas />
        </button>
        <h3>
          {estruturas.title}
        </h3>
      </div>
      <div className={styles.sectorsButton}>
        <button type="button">
          <Astrobiologia />
        </button>
        <h3>
          {astrobiologia.title}
        </h3>
      </div>
      <div className={styles.sectorsButton}>
        <button type="button">
          <Gestão />
        </button>
        <h3>
          {gestao.title}
        </h3>
      </div>
    </div>
  );
}
