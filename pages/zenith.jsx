import React from 'react';
import NavBar from 'components/navbar-components/NavBar';
import Footer from 'components/Footer';
import HeroSection from 'components/general/HeroSection';
import ImageComponent from 'components/zenith-page-components/ImageComponent';
import TextContent from 'public/locale/pt-br/oZenith.json';

function Zenith() {
  return (
    <>
      <NavBar textContent={TextContent.navBar} />
      <HeroSection
        backgroundImage="url(images/Zenith/Header.webp)"
        title={TextContent.oZenithHero.title}
        subtitle={TextContent.oZenithHero.subtitle}
        array={TextContent.oZenithHero.array}
      />
      <ImageComponent 
        images={["/images/Zenith/photo1.webp", "/images/Zenith/photo2.webp"]}
        alt={["Mulher com camisa com o logo da EESC-USP", "Homem programando em seu notebook"]}
      />
      <Footer />
    </>
  );
}

export default Zenith;
