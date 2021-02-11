import React from 'react';
import NavBar from '../components/navbar-components/NavBar';
import Footer from '../components/footer';
import HomeHeroSection from '../components/heroSection';
import HighlightsSection from '../components/home-components/highlights-section/HighlightsSection';
import TextContent from '../public/locale/pt-br/homePage.json';

function Home() {
  return (
    <>
      <NavBar />
      <HomeHeroSection />
      <HighlightsSection TextContent={TextContent.homePageStatistics} />
      <NavBar textContent={TextContent.navBar} />
      <Footer />
    </>
  );
}

export default Home;
