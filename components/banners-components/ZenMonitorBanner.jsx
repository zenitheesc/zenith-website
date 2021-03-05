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
						<source src="/images/HomePage/banners/monitor-banner/video.webm" type="video/webm" />
						<source src="/images/HomePage/banners/monitor-banner/video.mp4" type="video/mp4" />
					</video>
					: 
					<img src="/images/HomePage/banners/monitor-banner/static.webp" type="image/webp" />
				}
				<BannersTextSec textContent={props.textContent[1]}/>
			</div>
		</section>
		
    )
}

export default zenMonitorBanner;