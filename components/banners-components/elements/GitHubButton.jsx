import { FiArrowUpRight } from 'react-icons/fi';
import styles from 'styles/BannersText.module.css';

function GitHubButton(props) {
	const { link } = props;

    return ( 
        <a 
        className={styles.gitHubButton} 
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
        href={link} >
            GitHub  
            <FiArrowUpRight />
        </a>
    );
  }
  
export default GitHubButton;