import React, { useEffect, useState, useRef } from 'react';
import BannersTextSec from './elements/BannersTextSec.jsx';
import styles from 'styles/ProjectBanner.module.css';
import ReactVisibilitySensor from 'react-visibility-sensor';

function ProjectBanner(props) {
	const { textContent, bgColor, folderName, loop, autoPlay } = props;

	const sectionStyle = {
		backgroundColor: bgColor,
	}

	const videoElement = useRef(null);
	const [videoAutoPlayable, setVideoAutoPlayable] = useState(true);
	const [isVisible, setIsVisible] = useState(false);

	const attemptPlay = () => {
		videoElement?.current?.play()
			.then(() => { setVideoAutoPlayable(true); })
			.catch((err) => { setVideoAutoPlayable(false); });
	};

	const playVideo = (isInViewPort) => {
		if (isInViewPort && !autoPlay) {
			setIsVisible(true);
			videoElement.current.play()
		}
	};


	useEffect(() => {
		if(autoPlay) attemptPlay();
	}, []);

	return (
		<section style={sectionStyle} className={`-section`}>
			<div className={`-standardContainer ${styles.projectBannerContainer}`}>
				<ReactVisibilitySensor
					active={!isVisible}
					onChange={playVideo}>
					{videoAutoPlayable ?
						<video className={styles.projectBannerMidia} ref={videoElement} loop={loop} muted playsInline preload="auto">
							<source src={`/images/HomePage/banners/${folderName}/videoIOS.mp4`} type="video/mp4" />
							<source src={`/images/HomePage/banners/${folderName}/video.webm`} type="video/webm" />
							<source src={`/images/HomePage/banners/${folderName}/video.mp4`} type="video/mp4" />
						</video>
						:
						<picture>
							<source srcset={`/images/HomePage/banners/${folderName}/static.webp`} type="image/webp" />
							{/* <img src={`/images/HomePage/banners/${folderName}/static.png`} type="image/png" className={styles.projectBannerMidia}/> */}
							<img src={`/images/HomePage/banners/${folderName}/static.webp`} type="image/webp" className={styles.projectBannerMidia} />
						</picture>
					}
				</ReactVisibilitySensor>
				<BannersTextSec textContent={textContent} />
			</div>
		</section>

	)
}

export default ProjectBanner
