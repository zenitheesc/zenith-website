import React from 'react';
import HeadTags from 'components/general/HeadTags';
import HighlightsSection from 'components/home-components/highlights-section/HighlightsSection';
import ProjectBanner from 'components/banners-components/ProjectBanner';
import SupportersBanner from 'components/banners-components/SupportersBanner';
import Sectors from 'components/home-components/sectors-section/Sectors';
import Footer from 'components/Footer';
import useTranslation from 'next-translate/useTranslation';
import NavBar from '../src/components/Navbar/NavBar.tsx';
import HomepageHeroSection from '../components/home-components/HeroSection';

function Home() {
  const { t } = useTranslation();
  const metaTags = t('homePage:metaTags', { count: -1 }, { returnObjects: true });
  return (
    <>
      <HeadTags
        pageName={metaTags.pageName}
        title={metaTags.title}
        description={metaTags.description}
        pageTitle={metaTags.pageTitle}
        lang={metaTags.lang}
        mainPage
      />
      <NavBar />
      <HomepageHeroSection />
      <Sectors />
      <ProjectBanner
        textContent={t('homePage:homePageBanners.genus', { count: -1 }, { returnObjects: true })}
        bgColor={'#605F62'}
        folderName={'genus-banner'}
        loop
        autoPlay
      />
      <ProjectBanner
        textContent={t('homePage:homePageBanners.zenithMonitor', { count: -1 }, { returnObjects: true })}
        bgColor={'#000000'}
        folderName={'monitor-banner'}
      />
      <HighlightsSection />
      <SupportersBanner textContent={t('homePage:homePageSupporters', { count: -1 }, { returnObjects: true })} />
      <Footer />
    </>
  );
}

export function getServerSideProps() {
  return { props: {} };
}

export default Home;
