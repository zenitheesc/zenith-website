import React from 'react';
import NavBar from '../components/navbar-components/NavBar';
import Footer from '../components/footer';
import HeroSection from '../components/general/HeroSection';

function Projetos() {
  return (
    <>
      <NavBar />
      <HeroSection background="#000000" title="Nossos projetos" subtitle="Integração de diversos campos da Engenharia no setor aeroespacial" />
      <Footer />
    </>
  );
}

export default Projetos;
