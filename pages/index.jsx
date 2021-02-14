import React from 'react';
import NavBar from '../components/navbar-components/NavBar';
import Footer from '../components/footer';
import HomeHeroSection from '../components/heroSection';
import HighlightsSection from '../components/home-components/highlights-section/HighlightsSection';
import GenusBanner from '../components/banners-components/GenusBanner'
import ZenMonitorBanner from '../components/banners-components/ZenMonitorBanner'
import ApoiadoresBanner from '../components/banners-components/ApoiadoresBanner'
import TextContent from '../public/locale/pt-br/homePage.json';

function Home() {
  return (
    <>
      <NavBar textContent={TextContent.navBar} />
      <HomeHeroSection />
      <GenusBanner/>
		  <ZenMonitorBanner/>
      <HighlightsSection textContent={TextContent.homePageStatistics} />
      <ApoiadoresBanner/>
      <Footer />
    </>
  );
}

export default Home;
