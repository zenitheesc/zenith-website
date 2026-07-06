import React from 'react';
import Head from 'next/head';
import 'styles/global.css';
import RouteProgressBar from '@/src/components/RouteProgressBar/RouteProgressBar';

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon/favicon.ico" />
      </Head>
      <RouteProgressBar />
      <Component {...pageProps} />
    </>
  )

}
