import textStyles from '../../styles/BannersText.module.css'
import styles from '../../styles/ZenMonitorBanner.module.css'

function zenMonitorBanner(props) {

	const { title } = props.textContent[1];
	const { detail } = props.textContent[1];
	const { link } = props.textContent[1];

	return (
        <div className={styles.zenMonitorBanner}>
			<div className={textStyles.bannersText}>
				<h1>
					{title}
				</h1>
				<h2>
					{detail}
				</h2>
				<form action={link} target="_blank" >
                	<button id={textStyles.gitHubButton} type="submit" >
						<img id={textStyles.gitHubIcon} src="/images/banners/GitHubWhiteIcon.png" />
						GITHUB 
                	</button>
            	</form>
			</div>
			<img className={styles.zenMonitorImage} src="/images/banners/monitor-banner/ZenithMonitor.png" />
		</div>
		
    )
}

export default zenMonitorBanner;