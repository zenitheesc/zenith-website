import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import NavBar from '../components/navbar-components/NavBar';
import Footer from '../components/Footer';
import HeroSection from '../components/general/HeroSection';

function Zenith() {
  const { t } = useTranslation();
  const title = t('oZenith:oZenithHero.title');
  const subtitle = t('oZenith:oZenithHero.subtitle');
  const array = t('oZenith:oZenithHero.array', { count: -1 }, { returnObjects: true });
  return (
    <>
      <NavBar />
      <HeroSection
        backgroundImage="url(../images/Zenith/Header.webp)"
        title={title}
        subtitle={subtitle}
        array={array}
      />
      <Footer />
    </>
  );
}

export function getServerSideProps() { return { props: {} }; }

export default Zenith;
