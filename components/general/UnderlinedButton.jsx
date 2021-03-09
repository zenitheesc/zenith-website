import { FiArrowUpRight } from 'react-icons/fi';
import styles from 'styles/UnderlinedButton.module.css';

function UnderlinedButton (props) {
	const { link, label } = props;

    return ( 
        <a 
        className={styles.underlinedButton} 
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
        href={ link } >
            { label }  
            <FiArrowUpRight />
        </a>
    );
  }
  
export default UnderlinedButton;