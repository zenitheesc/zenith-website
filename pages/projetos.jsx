import React from 'react';
import NavBar from 'components/navbar-components/NavBar';
import useTranslation from 'next-translate/useTranslation';
import HeroSection from 'components/projects-components/HeroSection';
import ProjectTab from 'components/projects-components/ProjectTab';
import Footer from 'components/Footer';
import { NextSeo } from 'next-seo';
import Head from "next/head";

function Projetos() {
  const { t } = useTranslation();
  const title = t('projetos:projetosHero.title');
  const subtitle = t('projetos:projetosHero.subtitle');
  return (
    <>
      <Head>
        <link rel="alternate" href="https://zenith.eesc.usp.br/es/projetos" hrefLang="es" />
        <link rel="alternate" href="https://zenith.eesc.usp.br/en/projetos" hrefLang="en" />
        <link rel="alternate" href="https://zenith.eesc.usp.br/projetos" hrefLang="pt" />
      </Head>
      <NextSeo
        title="Zenith | Projetos"
        description="Descrição detalhada de diversos projetos da equipe."
      />
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
