import React from 'react';
import NavBar from '../components/navbar-components/NavBar';
import Footer from '../components/footer';
import TextContent from '../public/locale/pt-br/homePage.json';

function Zenith() {
  return (
    <>
      <NavBar textContent={TextContent.navBar} />
      Zenith
      <Footer />
    </>
  );
}

export default Zenith;
