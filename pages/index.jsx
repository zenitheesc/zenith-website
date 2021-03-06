import React from 'react';
import NavBar from 'components/navbar-components/NavBar';
import HomeHeroSection from 'components/home-components/HeroSection';
import HighlightsSection from 'components/home-components/highlights-section/HighlightsSection';
import Sectors from 'components/home-components/sectors-section/Sectors';
import Footer from 'components/Footer';
import TextContent from 'public/locale/pt-br/homePage.json';

function Home() {
  return (
    <>
      <NavBar textContent={TextContent.navBar} />
      <HomeHeroSection />
      <Sectors textContent={TextContent.homePageDepartaments} />
      <HighlightsSection textContent={TextContent.homePageStatistics} />
      <Footer />
    </>
  );
}

export default Home;
