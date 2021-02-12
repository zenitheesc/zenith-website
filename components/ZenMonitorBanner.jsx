import textStyles from '../styles/BannersText.module.css'
import styles from '../styles/ZenMonitorBanner.module.css'

function zenMonitorBanner() {

	return (
        <div className={styles.zenMonitorBanner}>
			<div className={textStyles.bannersText}>
				<h1>Zenith Monitor</h1>
				<h2>Tecnologia para rastreamento de sondas aerospaciais</h2>
				<form action="https://github.com/zenitheesc/Zenith-Monitor" target="_blank" >
                	<button id={textStyles.gitHubButton} type="submit" >
						<img id={textStyles.gitHubIcon} src="/images/GitHub-White-Icon.png" />
						GITHUB 
                	</button>
            	</form>
			</div>
			<img className={styles.zenMonitorImage} src="/images/monitor-banner/ZenithMonitor.png" />
		</div>
		
    )
}

export default zenMonitorBanner;