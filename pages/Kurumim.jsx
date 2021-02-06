import React from 'react';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import HeroSection from '../components/general/HeroSection';

function Kurumim() {
  return (
    <>
      <NavBar />
      <HeroSection imgPath="../images/Kurumim/Header.webp" title="Kurumim" subtitle="A nova geração do Garatéa-E" />
      <Footer />
    </>
  );
}

export default Kurumim;
