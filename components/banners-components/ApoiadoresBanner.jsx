import styles from '../../styles/ApoiadoresBanner.module.css'
import textStyles from '../../styles/BannersText.module.css'

function apoiadoresBanner(props) {
	const { title } = props.textContent;
	const { subtitle } = props.textContent;
	const { website } = props.textContent;

	return (
        <div className={styles.apoiadoresBanner}>
			<div className={textStyles.bannersText} >
				<h1>
					{title}
				</h1>
				<h2>
					{subtitle}
				</h2>
			</div>
			<div className={styles.squares}>
				
				<a href={website[0].link} target="_blank">
					<img id={styles.imageOne} src="/images/banners/apoiadores-banner/oz.webp"/>
				</a>
				<a href={website[1].link} target="_blank">
					<img id={styles.imageTwo} src="/images/banners/apoiadores-banner/usp.webp"/>
				</a>
				<a href={website[2].link} target="_blank">
					<img id={styles.imageThree} src="/images/banners/apoiadores-banner/eesc.webp" alt=""/>
				</a>
				<a href={website[3].link} target="_blank">
					<img id={styles.imageFour} src="/images/banners/apoiadores-banner/vercel.svg" alt=""/>
				</a>
				<a className={styles.emptySquare}></a>
				<a className={styles.emptySquare}></a>
			</div>
			
		</div>
	)
}


export default apoiadoresBanner;