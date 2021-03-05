import GitHubButton from './GitHubButton'
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
            <h3 className="-homepage-section-subtitle">
                {detail} 
            </h3>
            {/* {link ? 
                <GitHubButton link={link}/>
                : null} */}
        </div> 
    );
  }
  
  export default BannersTextSec;