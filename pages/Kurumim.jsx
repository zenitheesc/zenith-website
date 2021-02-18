import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import NavBar from '../components/navbar-components/NavBar';
import Footer from '../components/footer';
import HeroSection from '../components/general/HeroSection';

function Kurumim() {
  const { t } = useTranslation();
  const title = t('kurumim:kurumimHero.title');
  const subtitle = t('kurumim:kurumimHero.subtitle');
  return (
    <>
      <NavBar />
      <HeroSection backgroundImage="url(../images/Kurumim/header.webp)" title={title} subtitle={subtitle} />
      <Footer />
    </>
  );
}

export default Kurumim;
