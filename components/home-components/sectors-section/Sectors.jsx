import React from 'react';
import Embarcados from './icons/Embarcados';
import Estruturas from './icons/Estruturas';
import Astrobiologia from './icons/Astrobiologia';
import Gestão from './icons/Gestão';
import SectorsButtons from './SectorsButtons';
import styles from 'styles/Sectors.module.css';
import useTranslation from 'next-translate/useTranslation';

function Sectors() {
  const { t } = useTranslation();
  const { title } = t('homePage:homePageDepartaments.title');
  const { subtitle } = t('homePage:homePageDepartaments.subtitle');
  const textContent= t('homePage:homePageDepartaments', { count: -1 }, { returnObjects: true });
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
        <SectorsButtons label={textContent.embarcados}>
          <Embarcados />
        </SectorsButtons>
        <SectorsButtons label={textContent.estruturas}>
          <Estruturas />
        </SectorsButtons>
        <SectorsButtons label={textContent.astrobiologia}>
          <Astrobiologia />
        </SectorsButtons>
        <SectorsButtons label={textContent.gestao}>
          <Gestão />
        </SectorsButtons>
      </div>
    </div>
  );
}

export default Sectors;
