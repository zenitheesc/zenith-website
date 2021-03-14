import UnderlinedButton from '../../general/UnderlinedButton'
import styles from 'styles/BannersText.module.css'

function BannersTextSec(props) {
    
    const { title } = props.textContent;
	const { detail } = props.textContent;
	const { link } = props.textContent;

    return ( 
        <div className={styles.bannersText}>
            <h1 className="-homepage-section-title">
                {title}
            </h1>
            <h2 className="-homepage-section-title">
                {detail} 
            </h2>
            <UnderlinedButton label={"GitHub"} link={link}/>
        </div> 
    );
  }
  
  export default BannersTextSec;