import React from 'react';
import NavBar from 'components/navbar-components/NavBar';
import HeroSection from 'components/general/HeroSection';
import Footer from 'components/Footer';
import TextContent from 'public/locale/pt-br/kurumim.json';

function Kurumim() {
  return (
    <>
      <NavBar textContent={TextContent.navBar} />
      <HeroSection
        backgroundImage="url(images/Kurumim/header.webp)"
        title={TextContent.kurumimHero.title}
        subtitle={TextContent.kurumimHero.subtitle}
      />
      <Footer />
    </>
  );
}

export default Kurumim;
