import React from 'react';
import NavBar from '../components/navbar-components/NavBar';
import HomeHeroSection from '../components/home-components/HeroSection';
import HighlightsSection from '../components/home-components/highlights-section/HighlightsSection';
import GenusBanner from '../components/banners-components/GenusBanner'
import ZenMonitorBanner from '../components/banners-components/ZenMonitorBanner'
import ApoiadoresBanner from '../components/banners-components/ApoiadoresBanner'
import Sectors from '../components/home-components/sectors-section/Sectors';
import Footer from '../components/Footer';
import TextContent from '../public/locale/pt-br/homePage.json';

function Home() {
  return (
    <>
      <NavBar textContent={TextContent.navBar} />

      <HomeHeroSection/>
      <Sectors textContent={TextContent.homePageDepartaments} />
      <GenusBanner textContent={TextContent.homePageBanners}/>
      <ZenMonitorBanner textContent={TextContent.homePageBanners}/>
      <HighlightsSection textContent={TextContent.homePageStatistics} />
      <ApoiadoresBanner textContent={TextContent.homePageSupporters}/>

      <Footer />
    </>
  );
}

export default Home;
