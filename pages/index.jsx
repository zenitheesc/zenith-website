import React from 'react';
import NavBar from '../components/navbar-components/NavBar';
import Footer from '../components/footer';
import HomeHeroSection from '../components/heroSection';

function Home() {
  return (
    <>
      <NavBar />
      <HomeHeroSection />
      <Footer />
    </>
  );
}

export default Home;
