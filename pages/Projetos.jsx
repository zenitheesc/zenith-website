import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import NavBar from '../components/navbar-components/NavBar';
import Footer from '../components/footer';
import HeroSection from '../components/general/HeroSection';

function Projetos() {
  const { t } = useTranslation();
  const title = t('projetos:projetosHero.title');
  const subtitle = t('projetos:projetosHero.subtitle');
  return (
    <>
      <NavBar />
      <HeroSection backgroundColor="#000000" title={title} subtitle={subtitle} />
      <Footer />
    </>
  );
}

export default Projetos;
