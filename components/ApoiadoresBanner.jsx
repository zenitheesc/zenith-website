import styles from '../styles/ApoiadoresBanner.module.css'
import textStyles from '../styles/BannersText.module.css'

function apoiadoresBanner() {
	return (
        <div className={styles.apoiadoresBanner}>
			<div className={textStyles.bannersText} >
				<h1>nossos apoiadores</h1>
				<h2>sem eles, nada disso seria possível</h2>
			</div>
			<div className={styles.squares}>
				<div>
					<img src="../public/images/apoiadores-banner/" alt=""/>
				</div>
				<div>
					<img src="../public/images/apoiadores-banner/" alt=""/>
				</div>
				<div>
					<img src="../public/images/apoiadores-banner/" alt=""/>
				</div>
				<div>
					<img src="../public/images/apoiadores-banner/" alt=""/>
				</div>
				<div className={styles.emptySquare}></div>
				<div className={styles.emptySquare}></div>
			</div>
		</div>
	)
}


export default apoiadoresBanner;