import textStyles from '../styles/BannersText.module.css'
import styles from '../styles/GenusBanner.module.css'



function genusBanner() {
	
	return (
        <div className={styles.genusBanner}>
			
			
			<div className={textStyles.bannersText}>
				<h1>Genus</h1>
				<h2>Hardware modularizado voltado para aplicações aerospaciais</h2>
				<form action="https://github.com/zenitheesc/Genus" target="_blank">
                	<button id={textStyles.gitHubButton} type="submit" >
						<img id={textStyles.gitHubIcon} src="/images/GitHub-White-Icon.png" />
						GITHUB  
                	</button>
            	</form>
			</div>
			
			<img className={styles.genusImage} src="/images/genus-banner/Genus.png" width="20%" style={{display: "flex"}}/>
			
		</div>
		
	)
	
	
}


export default genusBanner;