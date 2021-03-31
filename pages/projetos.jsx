import React from 'react';
import NavBar from 'components/navbar-components/NavBar';
import useTranslation from 'next-translate/useTranslation';
import HeroSection from 'components/projects-components/HeroSection';
import ProjectTab from 'components/projects-components/ProjectTab';
import Footer from 'components/Footer';
import HeadTags from 'components/general/HeadTags';

function Projetos() {
  const { t } = useTranslation();
  const title = t('projetos:projetosHero.title');
  const subtitle = t('projetos:projetosHero.subtitle');
  const metaTags = t('projetos:metaTags', { count: -1 }, { returnObjects: true });
  return (
    <>
      <HeadTags pageName={metaTags.pageName} title={metaTags.title} description={metaTags.description} />
      <NavBar />
      <HeroSection
        backgroundColor="#000000"
        title={title}
        subtitle={subtitle}
        path={"Hero/cube-01-black.mp4"}
      />
      <ProjectTab />
      <Footer />
    </>
  );
}

export function getServerSideProps() { return { props: {} }; }

export default Projetos;
