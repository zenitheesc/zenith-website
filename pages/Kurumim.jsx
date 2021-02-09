import React from 'react';
import NavBar from '../components/navbar-components/NavBar';
import Footer from '../components/footer';
import HeroSection from '../components/general/HeroSection';

function Kurumim() {
  return (
    <>
      <NavBar />
      <HeroSection backgroundImage="url(../images/Kurumim/header.webp)" title="Kurumim" subtitle="A nova geração do Garatéa-E" />
      <Footer />
    </>
  );
}

export default Kurumim;
