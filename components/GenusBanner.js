import React, { useEffect, useState, useRef } from 'react';
import textStyles from '../styles/BannersText.module.css'
import styles from '../styles/GenusBanner.module.css'



function genusBanner() {
	/*
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

	  <video ref={videoElement} autoPlay loop muted playsInline preload="auto">
	  			<source src="/images/genus-banner/Genus.mp4" type="video/mp4" />
			</video>*/
	
	return (
        <div className={styles.genusBanner}>
			
			
			<div className={textStyles.bannersText}>
				<h1>Genus</h1>
				<h2>Hardware modularizado voltado para aplicações aerospaciais</h2>
				<form action="https://github.com/zenitheesc/Genus" target="_blank">
                	<button id={textStyles.gitHubButton} type="submit" >
						<img id={textStyles.gitHubIcon} src="/images/GitHub-White-Icon.png" />
						GITHUB  
                	</button>
            	</form>
			</div>
			
			<img className={styles.genusImage} src="/images/genus-banner/GenusSlow.gif"/>
				
			
			
		</div>
		
	)
	
	
}


export default genusBanner;