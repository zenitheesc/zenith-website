import React from "react";
import NavBar from "../components/navbar-components/NavBar";
import Footer from "../components/footer";
import HeroSection from "../components/general/HeroSection";
import TextContent from "../public/locale/pt-br/homePage.json";
import Card from "../components/general/Card";
import CardContainer from "../components/general/CardContainer";

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

    <CardContainer />
  <Footer />
    </>
  );
}

export default Zenith;
