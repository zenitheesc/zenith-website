import React, { useState } from 'react';
import Embarcados from './icons/Embarcados';
import Estruturas from './icons/Estruturas';
import Astrobiologia from './icons/Astrobiologia';
import Gestão from './icons/Gestão';
import SectorsButtons from './SectorsButtons';
import styles from 'styles/Sectors.module.css';
import useTranslation from 'next-translate/useTranslation';
import SectorCard from './SectorCard';

function SectorsCards({ textContent, currSector }) {
  const sectorsCards = {
    gestao       : <SectorCard textContent = {textContent.gestao} />,
    embarcados   : <SectorCard textContent = {textContent.embarcados} />,
    estruturas   : <SectorCard textContent = {textContent.estruturas} />,
    astrobiologia: <SectorCard textContent = {textContent.astrobiologia} />,
  }

  return sectorsCards[currSector];
}

function Sectors() {
  const [currSector, setCurrSector] = useState("embarcados")
  const { t } = useTranslation();
  const title = t('homePage:homePageDepartaments.title');
  const subtitle = t('homePage:homePageDepartaments.subtitle');
  const textContent = t('homePage:homePageDepartaments', { count: -1 }, { returnObjects: true });

  return (
    <div className={styles.sectorsContainer}>
      <div className={styles.textSection}>
        <h1 className="-homepage-section-title">
          {title}
        </h1>
        <h3 className="-homepage-section-subtitle">
          {subtitle}
        </h3>
      </div>
      <div className={styles.sectorsButtons}>
        <SectorsButtons label={textContent.embarcados} onClick={() => setCurrSector("embarcados")}>
          <Embarcados />
        </SectorsButtons>
        <SectorsButtons label={textContent.estruturas} onClick={() => setCurrSector("estruturas")}>
          <Estruturas />
        </SectorsButtons>
        <SectorsButtons label={textContent.astrobiologia} onClick={() => setCurrSector("astrobiologia")}>
          <Astrobiologia />
        </SectorsButtons>
        <SectorsButtons label={textContent.gestao} onClick={() => setCurrSector("gestao")}>
          <Gestão />
        </SectorsButtons>
      </div>
      <SectorsCards textContent={textContent} currSector={currSector} />
    </div>
  );
}

export default Sectors;
