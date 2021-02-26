import React from 'react';
import NavBar from 'components/navbar-components/NavBar';
import useTranslation from 'next-translate/useTranslation';
import HeroSection from 'components/general/HeroSection';
import ProjectTab from 'components/projects-components/ProjectTab';
import Footer from 'components/Footer';


function Projetos() {
  const { t } = useTranslation();
  const title = t('projetos:projetosHero.title');
  const subtitle = t('projetos:projetosHero.subtitle');
  return (
    <>
      <NavBar />
      <HeroSection
        backgroundColor="#000000"
        title={title}
        subtitle={subtitle}
      />
      <ProjectTab />
      <Footer />
    </>
  );
}

export default Projetos;
