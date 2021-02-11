import React from 'react';
import NavBar from '../components/navbar-components/NavBar';
import Footer from '../components/footer';
import HeroSection from '../components/general/HeroSection';
import TextContent from '../public/locale/pt-br/homePage.json';

function Projetos() {
  return (
    <>
      <NavBar />
      <HeroSection backgroundColor="#000000" title="Nossos projetos" subtitle="Integração de diversos campos da Engenharia no setor aeroespacial" />
      <NavBar textContent={TextContent.navBar} />
      Projetos
      <Footer />
    </>
  );
}

export default Projetos;
