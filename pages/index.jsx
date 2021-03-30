import React from 'react';
import NavBar from 'components/navbar-components/NavBar';
import HomeHeroSection from 'components/home-components/HeroSection';
import HighlightsSection from 'components/home-components/highlights-section/HighlightsSection';
import ProjectBanner from 'components/banners-components/ProjectBanner';
import SupportersBanner from 'components/banners-components/SupportersBanner';
import Sectors from 'components/home-components/sectors-section/Sectors';
import Footer from 'components/Footer';
import useTranslation from 'next-translate/useTranslation';
import Head from "next/head";
import { NextSeo } from 'next-seo';

function Home() {

  const { t } = useTranslation();

  return (
    <>
      <Head>
        <meta name="google-site-verification" content={process.env.googleVerification} />
        <link rel="canonical" href="https://zenith.eesc.usp.br" />
        <link rel="alternate" href="https://zenith.eesc.usp.br/es" hrefLang="es" />
        <link rel="alternate" href="https://zenith.eesc.usp.br/en" hrefLang="en" />
        <link rel="alternate" href="https://zenith.eesc.usp.br" hrefLang="pt" />
      </Head>
      <NextSeo
        title="Zenith Aerospace || EESC"
        description="Apresentação do Zenith Aerospace e dos seus projetos recentes."
      />
      <NavBar />
      <HomeHeroSection />
      <Sectors />
      <ProjectBanner textContent={t('homePage:homePageBanners.genus', { count: -1 }, { returnObjects: true })} bgColor={"#605F62"} folderName={"genus-banner"} loop autoPlay />
      <ProjectBanner textContent={t('homePage:homePageBanners.zenithMonitor', { count: -1 }, { returnObjects: true })} bgColor={"#000000"} folderName={"monitor-banner"} />
      <HighlightsSection />
      <SupportersBanner textContent={t('homePage:homePageSupporters', { count: -1 }, { returnObjects: true })} />
      <Footer />
    </>
  );
}

export function getServerSideProps() { return { props: {} }; }

export default Home;
