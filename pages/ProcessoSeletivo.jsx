import React from 'react';
import NavBar from '../components/navbar-components/NavBar';
import Footer from '../components/footer';
import HeroSection from '../components/general/HeroSection';
import TextContent from '../public/locale/pt-br/homePage.json';

function ProcessoSeletivo() {
  return (
    <>
      <NavBar />
      <HeroSection backgroundImage="url(../images/ProcessoSeletivo/header.webp)" title="Processo Seletivo" subtitle="Você deseja ser parte do Zenith Aerospace?" />
      <NavBar textContent={TextContent.navBar} />
      ProcessoSeletivo
      <Footer />
    </>
  );
}

export default ProcessoSeletivo;
