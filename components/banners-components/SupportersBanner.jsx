import BannersTextSec from './elements/BannersTextSec';
import GridElement from './elements/GridElement';
import styles from 'styles/SupportersBanner.module.css';

function SupportersBanner(props) {
	
	return (
		<section className={`-section ${styles.supportersSection}`}>
			<div className={`-standardContainer ${styles.supportersBanner}`}>
				<BannersTextSec textContent={props.textContent}/>
				<GridElement supporters={props.textContent.supporters}/>
			</div>
		</section>
	)
}


export default SupportersBanner;