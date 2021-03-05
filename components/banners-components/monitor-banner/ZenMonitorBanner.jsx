import styles from 'styles/ZenMonitorBanner.module.css'
import BannersTextSec from '../BannersTextSec.jsx'

function zenMonitorBanner(props) {

	return (
		<section className={`-section ${styles.zenMonitorSection}`}> 
			<div className={`-standardContainer ${styles.zenMonitorBanner}`}>
				<BannersTextSec textContent={props.textContent[1]}/>
				<picture>
					<source srcset="/images/HomePage/banners/monitor-banner/ZenithMonitor.webp" type="image/webp" />
					<source srcset="/images/HomePage/banners/monitor-banner/ZenithMonitor.png" type="image/png" />
					<img src="/images/HomePage/banners/monitor-banner/ZenithMonitor.png" type="image/png" className={styles.zenMonitorImage}/>
				</picture>
				
			</div>
		</section>
		
    )
}

export default zenMonitorBanner;