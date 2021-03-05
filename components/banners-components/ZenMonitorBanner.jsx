import React, { useEffect, useState, useRef } from 'react';
import BannersTextSec from './elements/BannersTextSec.jsx'
import styles from 'styles/ZenMonitorBanner.module.css'

function zenMonitorBanner(props) {
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
		<section className={`-section ${styles.zenMonitorSection}`}> 
			<div className={`-standardContainer ${styles.zenMonitorBanner}`}>
				{videoAutoPlayable ? 
					<video className={styles.zenMonitorImage} ref={videoElement} autoPlay muted playsInline preload="auto">
						<source src="/images/HomePage/banners/monitor-banner/out.mp4" type="video/mp4" />
					</video>
					: 
					<picture>
						<source srcset="/images/HomePage/banners/genus-banner/Genus.webp" type="image/webp" />
						<img src="/images/HomePage/banners/genus-banner/Genus.png" type="image/png" id={styles.genusImage}/>
					</picture>
				}
				<BannersTextSec textContent={props.textContent[1]}/>
			</div>
		</section>
		
    )
}

export default zenMonitorBanner;