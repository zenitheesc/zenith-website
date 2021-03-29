import React, {useEffect} from 'react';
import 'styles/global.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            // easing: 'ease-in',
        });
      }, []);
    
    return <Component {...pageProps} />;
}
