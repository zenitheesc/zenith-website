import React from 'react';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import HeroSection from '../components/general/HeroSection';

function ProcessoSeletivo() {
  return (
    <>
      <NavBar />
      <HeroSection background="url(../images/ProcessoSeletivo/header.webp)" title="Processo Seletivo" subtitle="Você deseja ser parte do Zenith Aerospace?" />
      <Footer />
    </>
  );
}

export default ProcessoSeletivo;
