import styles from '../styles/ApoiadoresBanner.module.css'
import textStyles from '../styles/BannersText.module.css'

function apoiadoresBanner() {
	return (
        <div className={styles.apoiadoresBanner}>
			<div className={textStyles.bannersText} >
				<h1>nossos apoiadores</h1>
				<h2>sem eles, nada disso seria possível</h2>
			</div>
		</div>
	)
}


export default apoiadoresBanner;