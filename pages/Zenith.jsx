import React from 'react';
import NavBar from '../components/navbar-components/NavBar';
import Footer from '../components/footer';
import HeroSection from '../components/general/HeroSection';
import TextContent from '../public/locale/pt-br/homePage.json';

function Zenith() {
  return (
    <>
      <NavBar />
      <HeroSection
        backgroundImage="url(../images/Zenith/Header.webp)"
        title="O que é o Zenith?"
        subtitle="Nós somos "
        array={['CIÊNCIA', 'TECNOLOGIA', 'INOVAÇÃO', 'CONEXÕES', 'ZENITH']}
      />
      <NavBar textContent={TextContent.navBar} />
      Zenith
      <Footer />
    </>
  );
}

export default Zenith;
