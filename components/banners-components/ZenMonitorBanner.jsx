import styles from '../../styles/ZenMonitorBanner.module.css'
import BannersTextSec from './BannersTextSec.jsx'

function zenMonitorBanner(props) {

	return (
        <div className={styles.zenMonitorBanner}>
			<BannersTextSec textContent={props.textContent[1]}/>
			<img className={styles.zenMonitorImage} src="/images/banners/monitor-banner/ZenithMonitor.webp" />
		</div>
		
    )
}

export default zenMonitorBanner;