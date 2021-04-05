import UnderlinedButton from 'components/general/UnderlinedButton'
import styles from 'styles/BannersText.module.css'

function BannersTextSec(props) {
    
    const { title, detail, link } = props.textContent;

    return ( 
        <div className={styles.bannersText}>
            <h2 className="-homepage-section-title">
                {title}
            </h2>
            <h3 className="-homepage-section-title">
                {detail} 
            </h3>
            <UnderlinedButton label={"GitHub"} link={ link }/>
        </div> 
    );

}
  
export default BannersTextSec;