import React, {useEffect} from 'react';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'styles/global.css';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
      AOS.init();
    }, []);
  
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )

}
