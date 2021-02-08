import React from 'react';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import HeroSection from '../components/general/HeroSection';

function Zenith() {
  return (
    <>
      <NavBar />
      <HeroSection
        background="url(../images/Zenith/Header.webp)"
        title="O que é o Zenith?"
        subtitle="Nós somos "
        array={['CIÊNCIA', 'TECNOLOGIA', 'INOVAÇÃO', 'CONEXÕES', 'ZENITH']}
      />
      <Footer />
    </>
  );
}

export default Zenith;
