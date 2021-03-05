import React, { useEffect, useState, useRef } from 'react';
import styles from 'styles/GenusBanner.module.css'
import BannersTextSec from '../BannersTextSec.jsx'



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
		<section className={`-section ${styles.genusSection}`}> 
			<div className={`-standardContainer ${styles.genusBanner}`}>
				<BannersTextSec textContent={props.textContent[0]} />
				{videoAutoPlayable ? 
					<video id={styles.genusVideo} ref={videoElement} autoPlay loop muted playsInline preload="auto">
						<source src="/images/HomePage/banners/genus-banner/Genus.mp4" type="video/mp4" />
						<source src="/images/HomePage/banners/genus-banner/Genus.webm" type="video/webm" />
						<source src="/images/HomePage/banners/genus-banner/Genus1280x720.mv4" type="video/mp4" />
					</video>
					: 
					<picture>
						<source srcset="/images/HomePage/banners/genus-banner/Genus.webp" type="image/webp" />
						<img src="/images/HomePage/banners/genus-banner/Genus.png" type="image/png" id={styles.genusImage}/>
					</picture>
				}
				
			</div>
		</section>
		
	)
	
	
}


export default genusBanner;