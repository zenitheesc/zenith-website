import styles from '../../styles/ZenMonitorBanner.module.css'
import BannersTextSec from './BannersTextSec.jsx'

function zenMonitorBanner(props) {

	return (
        <div className={styles.zenMonitorBanner}>
			<BannersTextSec textContent={props.textContent[1]}/>
			<picture>
			  <source srcset="/images/banners/monitor-banner/ZenithMonitor.webp" type="image/webp" />
			  <source srcset="/images/banners/monitor-banner/ZenithMonitor.png" type="image/png" />
			  <img src="/images/banners/monitor-banner/ZenithMonitor.png" type="image/png" className={styles.zenMonitorImage}/>
			</picture>
			
		</div>
		
    )
}

export default zenMonitorBanner;