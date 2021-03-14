import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import NavBar from 'components/navbar-components/NavBar';
import Footer from 'components/Footer';
import HeroSection from 'components/general/HeroSection';
import ImageComponent from 'components/zenith-page-components/ImageComponent';

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
      <ImageComponent 
        images={["/images/Zenith/photo1.webp", "/images/Zenith/photo2.webp"]}
        alt={["Mulher com camisa com o logo da EESC-USP", "Homem programando em seu notebook"]}
      />
      <Footer />
    </>
  );
}

export function getServerSideProps() { return { props: {} }; }

export default Zenith;
