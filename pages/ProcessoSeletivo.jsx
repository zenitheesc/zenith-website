import React from 'react';
import NavBar from '../components/navbar-components/NavBar';
import Footer from '../components/footer';
import TextContent from '../public/locale/pt-br/homePage.json';

function ProcessoSeletivo() {
  return (
    <>
      <NavBar textContent={TextContent.navBar} />
      ProcessoSeletivo
      <Footer />
    </>
  );
}

export default ProcessoSeletivo;
