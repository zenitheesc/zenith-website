import React, { useEffect, useState, useRef } from 'react';
import styles from '../../styles/GenusBanner.module.css'
import BannersTextSec from './BannersTextSec.jsx'



function genusBanner(props) {
	
	const videoElement = useRef(null);
  	const [videoAutoPlayable, setVideoAutoPlayable] = useState(true);

  	const attemptPlay = () => {
  	  videoElement && videoElement.current && videoElement.current.play()
  	    .then(() => { setVideoAutoPlayable(true); })
  	    .catch((err) => { setVideoAutoPlayable(false); });
  	};
	
  	useEffect(() => {
  	  attemptPlay();
  	}, []);
	
	return (
        <div className={styles.genusBanner}>
			<BannersTextSec textContent={props.textContent[0]}/>
			<video id={styles.genusVideo} ref={videoElement} autoPlay loop muted playsInline preload="auto">
	  			<source src="/images/banners/genus-banner/Genus1.mp4" type="video/mp4" />
			</video>
		</div>
		
	)
	
	
}


export default genusBanner;