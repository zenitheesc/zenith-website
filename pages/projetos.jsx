import React from 'react';
import NavBar from 'components/navbar-components/NavBar';
import HeroSection from 'components/general/HeroSection';
import ProjectTab from 'components/projects-components/ProjectTab';
import Footer from 'components/Footer';
import TextContent from 'public/locale/pt-br/projetos.json';


function Projetos() {
  return (
    <>
      <NavBar textContent={TextContent.navBar} />
      <HeroSection
        backgroundColor="#000000"
        title={TextContent.projetosHero.title}
        subtitle={TextContent.projetosHero.subtitle}
      />
      <ProjectTab />
      <Footer />
    </>
  );
}

export default Projetos;
