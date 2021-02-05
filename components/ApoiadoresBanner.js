import React, { useState, useEffect } from 'react';
import styles from '../styles/ApoiadoresBanner.module.css'

const desktopTag = '<img src="/images/apoiadores-banner/ApoiadoresDesktop.png"/>'
const mobileTag = '<img src="/images/apoiadores-banner/ApoiadoresMobile1.png"/>'+ 
'<img src="/images/apoiadores-banner/ApoiadoresMobile2.png"/>'+
'<img src="/images/apoiadores-banner/ApoiadoresMobile3.png"/>'+
'<img src="/images/apoiadores-banner/ApoiadoresMobile4.png"/>';

function apoiadoresBanner() {
	const imageTag = useWindowWidth() >= 960 ? desktopTag : mobileTag;
	return (
        <div className={styles.apoiadoresBanner}>
			<div className={styles.bannersText} >
				<h1>nossos
                    apoiadores
                </h1>
				<h2>sem eles, nada disso seria possível</h2>
			</div>
			<div className={styles.apoiadoresImage} dangerouslySetInnerHTML={{__html: imageTag}}></div>
		</div>
	)
}

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    },[]);

    return windowWidth;
};
export default apoiadoresBanner;