import React from 'react';
import Head from 'next/head';
import 'styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon/favicon.ico" />
        <link rel="canonical" href="https://zenith.eesc.usp.br" />
        <link rel="alternate" href="https://zenith.eesc.usp.br/es" hrefLang="es" />
        <link rel="alternate" href="https://zenith.eesc.usp.br/en" hrefLang="en" />
        <link rel="alternate" href="https://zenith.eesc.usp.br" hrefLang="pt" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
