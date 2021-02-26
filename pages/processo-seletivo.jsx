import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import NavBar from '../components/navbar-components/NavBar';
import HeroSection from '../components/general/HeroSection';
import Footer from '../components/Footer';

function ProcessoSeletivo() {
  const { t } = useTranslation();
  const title = t('processoSeletivo:processoSeletivoHero.title');
  const subtitle = t('processoSeletivo:processoSeletivoHero.subtitle');
  return (
    <>
      <NavBar />
      <HeroSection
        backgroundImage="url(../images/ProcessoSeletivo/header.webp)"
        title={title}
        subtitle={subtitle}
      />
      <Footer />
    </>
  );
}

export default ProcessoSeletivo;
