import React from 'react';
import NavBar from '../components/navbar-components/NavBar';
import Footer from '../components/footer';
import HomeHeroSection from '../components/heroSection';
import HighlightsSection from '../components/home-components/highlights-section/HighlightsSection';

function Home() {
  return (
    <>
      <NavBar />
      <HomeHeroSection />
      <HighlightsSection />
      <Footer />
    </>
  );
}

export default Home;
