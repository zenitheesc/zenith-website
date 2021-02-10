import React from 'react';
import NavBar from '../components/navbar-components/NavBar';
import Footer from '../components/footer';
import HeroSection from '../components/heroSection';
import TextContent from '../public/locale/pt-br/homePage.json';

function Home() {
  return (
    <>
      <NavBar textContent={TextContent.navBar} />
      <HeroSection />
      <Footer />
    </>
  );
}

export default Home;
