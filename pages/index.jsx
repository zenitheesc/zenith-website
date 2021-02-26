import React from 'react';
import NavBar from '../components/navbar-components/NavBar';
import HomeHeroSection from '../components/home-components/HeroSection';
import HighlightsSection from '../components/home-components/highlights-section/HighlightsSection';
import Sectors from '../components/home-components/sectors-section/Sectors';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <NavBar />
      <HomeHeroSection />
      <Sectors />
      <HighlightsSection />
      <Footer />
    </>
  );
}

export default Home;
