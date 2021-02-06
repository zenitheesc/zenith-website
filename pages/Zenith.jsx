import React from 'react';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import HeroSection from '../components/general/HeroSection';

function Zenith() {
  return (
    <>
      <NavBar />
      <HeroSection imgPath="../images/Zenith/Header.webp" title="O que é o Zenith?" subtitle="Nós somos CIÊNCIA" />
      <Footer />
    </>
  );
}

export default Zenith;
