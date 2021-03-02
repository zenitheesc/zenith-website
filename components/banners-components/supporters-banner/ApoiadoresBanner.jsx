import styles from 'styles/ApoiadoresBanner.module.css'
import BannersTextSec from '../BannersTextSec'
import GridElement from './GridElement'

function apoiadoresBanner(props) {
	
	return (
        <div className={styles.apoiadoresBanner}>

			<BannersTextSec textContent={props.textContent}/>

			<div className={styles.squares}>
				<GridElement website ={props.textContent.website}/>
			</div>
			
		</div>
	)
}


export default apoiadoresBanner;

/*<a href={website[0].link} target="_blank">
					<picture>
			  			<source srcset="/images/banners/apoiadores-banner/oz.webp" type="image/webp" />
			  			<img src="/images/banners/apoiadores-banner/oz.png" type="image/png" id={styles.imageOne}/>
					</picture>
				</a>

				<a href={website[1].link} target="_blank">
					<img id={styles.imageTwo} src="/images/banners/apoiadores-banner/usp.webp"/>
				</a>
				<a href={website[2].link} target="_blank">
					<img id={styles.imageThree} src="/images/banners/apoiadores-banner/eesc.webp" alt=""/>
				</a>
				<a href={website[3].link} target="_blank">
					<img id={styles.imageFour} src="/images/banners/apoiadores-banner/vercel.svg" alt=""/>
				</a>*/