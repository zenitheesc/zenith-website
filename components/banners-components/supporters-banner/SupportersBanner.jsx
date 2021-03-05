import styles from 'styles/SupportersBanner.module.css'
import BannersTextSec from '../BannersTextSec'
import GridElement from './GridElement'

function SupportersBanner(props) {
	
	return (
		<section className={`-section ${styles.supportersSection}`}>
			<div className={`-standardContainer ${styles.supportersBanner}`}>
				<BannersTextSec textContent={props.textContent}/>
				<div className={styles.squares}>
					<GridElement supporters={props.textContent.supporters}/>
				</div>
			</div>
		</section>
	)
}


export default SupportersBanner;