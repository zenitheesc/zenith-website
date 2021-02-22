import React, { useEffect, useState, useRef } from 'react';
import textStyles from '../../styles/BannersText.module.css'
import styles from '../../styles/GenusBanner.module.css'



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

	  
	const { title } = props.textContent[0];
	const { detail } = props.textContent[0];
	const { link } = props.textContent[0];
	
	return (
        <div className={styles.genusBanner}>
			<div className={textStyles.bannersText}>
				<h1>
					{title}
				</h1>
				<h2>
					{detail}
				</h2>
				<form action={link} target="_blank">
                	<button id={textStyles.gitHubButton} type="submit" >
						<img id={textStyles.gitHubIcon} src="/images/banners/GitHubWhiteIcon.png" />
						GITHUB  
                	</button>
            	</form>
			</div>
			
			<video id={styles.genusVideo} ref={videoElement} autoPlay loop muted playsInline preload="auto">
	  			<source src="/images/banners/genus-banner/Genus1.mp4" type="video/mp4" />
			</video>
		</div>
		
	)
	
	
}


export default genusBanner;