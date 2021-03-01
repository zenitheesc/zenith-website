import React from 'react';
import NavBar from '../components/navbar-components/NavBar';
import HeroSection from '../components/general/HeroSection';
import Footer from '../components/Footer';
import TextContent from '../public/locale/pt-br/homePage.json';
import FormWrapper from 'components/general/FormWrapper';

function ProcessoSeletivo() {
  return (
    <>
      <NavBar textContent={TextContent.navBar} />
      <HeroSection
        backgroundImage="url(../images/ProcessoSeletivo/header.webp)"
        title="Processo Seletivo"
        subtitle="Você deseja ser parte do Zenith Aerospace?"
      />
      <FormWrapper link={"https://docs.google.com/forms/d/e/1FAIpQLSdFoITXWmuJYgJPlvQFGBNkeOm84htc2GHxZpzSLIi1UEoB1g/viewform?embedded=true"}/>
      <Footer />
    </>
  );
}

export default ProcessoSeletivo;
