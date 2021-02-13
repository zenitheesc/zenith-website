import styles from '../../styles/ApoiadoresBanner.module.css'
import textStyles from '../../styles/BannersText.module.css'

function apoiadoresBanner() {
	return (
        <div className={styles.apoiadoresBanner}>
			<div className={textStyles.bannersText} >
				<h1>nossos apoiadores</h1>
				<h2>sem eles, nada disso seria possível</h2>
			</div>
			<div className={styles.squares}>
				
				<a href="https://www.ozprodutora.com.br/" target="_blank">
					<img id={styles.imageOne} src="/images/banners/apoiadores-banner/oz.png"/>
				</a>
				<a href="https://www5.usp.br/" target="_blank">
					<img id={styles.imageTwo} src="/images/banners/apoiadores-banner/usp.png"/>
				</a>
				<a href="https://eesc.usp.br/" target="_blank">
					<img id={styles.imageThree} src="/images/banners/apoiadores-banner/eesc.png" alt=""/>
				</a>
				<a href="https://vercel.com" target="_blank">
					<img id={styles.imageFour} src="/images/banners/apoiadores-banner/vercel.svg" alt=""/>
				</a>
				<a className={styles.emptySquare}></a>
				<a className={styles.emptySquare}></a>
			</div>
			
		</div>
	)
}


export default apoiadoresBanner;