import React from 'react';

import NavBar from '../components/navbar-components/NavBar';
import Footer from '../components/footer';
import HomeHeroSection from '../components/heroSection';
import HighlightsSection from '../components/home-components/highlights-section/HighlightsSection';

import LanguageSetter from '../components/utils/LanguageSetter';

import TextContentBr from '../public/locale/pt-br/homePage.json';
import TextContentEn from '../public/locale/en-us/homePage.json';
import TextContentEs from '../public/locale/es/homePage.json';

function Home() {
  const TextContent = LanguageSetter(TextContentBr, TextContentEn, TextContentEs);

  return (
    <>
      <NavBar textContent={TextContent.navBar} />
      <HomeHeroSection />
      <HighlightsSection textContent={TextContent.homePageStatistics} />
      <Footer />
    </>
  );
}

export default Home;
