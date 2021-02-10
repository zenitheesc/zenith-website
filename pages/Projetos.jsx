import React from 'react';
import NavBar from '../components/navbar-components/NavBar';
import Footer from '../components/footer';
import TextContent from '../public/locale/pt-br/homePage.json';

function Projetos() {
  return (
    <>
      <NavBar textContent={TextContent.navBar} />
      Projetos
      <Footer />
    </>
  );
}

export default Projetos;
