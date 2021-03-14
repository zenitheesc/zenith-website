import React from 'react';
import NavBar from 'components/navbar-components/NavBar';
import HomeHeroSection from 'components/home-components/HeroSection';
import HighlightsSection from 'components/home-components/highlights-section/HighlightsSection';
import ProjectBanner from 'components/banners-components/ProjectBanner';
import SupportersBanner from 'components/banners-components/SupportersBanner';
import Sectors from 'components/home-components/sectors-section/Sectors';
import Footer from 'components/Footer';
import TextContent from 'locale/pt-br/homePage.json';

function Home() {
  return (
    <>
      <NavBar textContent={TextContent.navBar} />
      <HomeHeroSection/>
      <Sectors textContent={TextContent.homePageDepartaments} />
      <ProjectBanner textContent={TextContent.homePageBanners.genus} bgColor={"#605F62"} folderName={"genus-banner"} loop/>
      <ProjectBanner textContent={TextContent.homePageBanners.zenithMonitor} bgColor={"#000000"} folderName={"monitor-banner"} />
      <HighlightsSection textContent={TextContent.homePageStatistics} />
      <SupportersBanner textContent={TextContent.homePageSupporters}/>
      <Footer />
    </>
  );
}

export function getServerSideProps() { return { props: {} }; }

export default Home;
