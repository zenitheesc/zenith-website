import React from 'react';
import NavBar from '../components/navbar-components/NavBar';
import Footer from '../components/Footer';
import HeroSection from '../components/general/HeroSection';
import TextContent from '../public/locale/pt-br/homePage.json';
import ImageComponent from '../components/zenith-page-components/ImageComponent';

function Zenith() {
  return (
    <>
      <NavBar textContent={TextContent.navBar} />
      <HeroSection
        backgroundImage="url(../images/Zenith/Header.webp)"
        title="O que é o Zenith?"
        subtitle="Nós somos "
        array={['CIÊNCIA', 'TECNOLOGIA', 'INOVAÇÃO', 'CONEXÕES', 'ZENITH']}
      />
      <ImageComponent/>
      <Footer />
    </>
  );
}

export default Zenith;
