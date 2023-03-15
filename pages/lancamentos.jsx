import React from 'react';
import NavBar from 'components/navbar-components/NavBar';
import useTranslation from 'next-translate/useTranslation';
import SondeHub from 'components/launches-components/SondeHub'
import Footer from 'components/Footer';
import HeadTags from 'components/general/HeadTags';

function Lancamentos() {
  const { t } = useTranslation();
  const metaTags = t('lancamentos:metaTags', { count: -1 }, { returnObjects: true });
  return (
    <>
      <HeadTags pageName={metaTags.pageName} title={metaTags.title} description={metaTags.description} pageTitle={metaTags.pageTitle} lang={metaTags.lang}/>
      <NavBar />
      <SondeHub></SondeHub>
      <Footer />
    </>
  );
}

export function getServerSideProps() { return { props: {} }; }

export default Lancamentos;
