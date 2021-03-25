import { FiArrowUpRight } from 'react-icons/fi';
import styles from 'styles/UnderlinedButton.module.css';

function UnderlinedButton (props) {
	const { link, label, dark } = props;

    return ( 
        <a 
        className={`${ dark ? styles.dark : '' } ${ styles.underlinedButton }`} 
        aria-label={ label }
        target="_blank"
        rel="noopener noreferrer"
        href={ link } >
            { label }  
            <FiArrowUpRight />
        </a>
    );
  }
  
export default UnderlinedButton;