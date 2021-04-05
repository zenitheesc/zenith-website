import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Embarcados from './icons/Embarcados';
import Estruturas from './icons/Estruturas';
import Astrobiologia from './icons/Astrobiologia';
import Gestão from './icons/Gestão';
import Astronautica from './icons/Astronáutica';
import SectorsButtons from './SectorsButtons';
import SectorCard from './SectorCard';
import styles from 'styles/Sectors.module.css';

function SectorsCards({ textContent, currSector }) {
  const sectorsCards = {
    gestao       : <SectorCard textContent = {textContent.gestao} name={"gestao"}/>,
    embarcados   : <SectorCard textContent = {textContent.embarcados} name={"embarcados"}/>,
    estruturas   : <SectorCard textContent = {textContent.estruturas} name={"estruturas"}/>,
    astrobiologia: <SectorCard textContent = {textContent.astrobiologia} name={"astrobiologia"}/>,
    astronautica : <SectorCard textContent = {textContent.astronautica} name={"astronautica"} />,
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
        <h2 className="-homepage-section-title">
          {title}
        </h2>
        <h3 className="-homepage-section-subtitle">
          {subtitle}
        </h3>
      </div>
      <div className={styles.sectorsButtons}>
        <SectorsButtons
          selected={currSector === "embarcados"}
          label={textContent.embarcados}
          onClick={() => setCurrSector("embarcados")}
        >
          <Embarcados />
        </SectorsButtons>
        <SectorsButtons
          selected={currSector === "estruturas"}
          label={textContent.estruturas}
          onClick={() => setCurrSector("estruturas")}>
          <Estruturas />
        </SectorsButtons>
        <SectorsButtons
          selected={currSector === "astrobiologia"}
          label={textContent.astrobiologia}
          onClick={() => setCurrSector("astrobiologia")}>
          <Astrobiologia />
        </SectorsButtons>
        <SectorsButtons
          selected={currSector === "gestao"}
          label={textContent.gestao}
          onClick={() => setCurrSector("gestao")}>
          <Gestão />
        </SectorsButtons>
        <SectorsButtons 
          selected={currSector === "astronautica"}
          label={textContent.astronautica}
          onClick={() => setCurrSector("astronautica")}>
          <Astronautica />
        </SectorsButtons>
      </div>
      <SectorsCards textContent={textContent} currSector={currSector} />
    </div>
  );
}

export default Sectors;
