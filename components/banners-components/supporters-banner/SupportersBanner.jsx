import styles from 'styles/SupportersBanner.module.css'
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