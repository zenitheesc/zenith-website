import React, {useEffect} from 'react';
import 'styles/global.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init();
      }, []);
    
    return <Component {...pageProps} />;
}
