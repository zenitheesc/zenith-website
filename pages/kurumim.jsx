import React from 'react';
import NavBar from '../components/navbar-components/NavBar';
import HeroSection from '../components/general/HeroSection';
import Footer from '../components/Footer';
import TextContent from '../public/locale/pt-br/homePage.json';

function Kurumim() {
  return (
    <>
      <NavBar textContent={TextContent.navBar} />
      <HeroSection
        backgroundImage="url(../images/Kurumim/header.webp)"
        title="Kurumim"
        subtitle="A nova geração do Garatéa-E"
      />
      <Footer />
    </>
  );
}

export default Kurumim;
