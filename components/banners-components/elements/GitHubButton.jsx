import { FaGithub } from 'react-icons/fa';
import styles from 'styles/BannersText.module.css';

function GitHubButton(props) {
	const link = props.link;

    return ( 
        <form action={link} target="_blank">
            <a className={styles.gitHubButton} type="submit" >
                <a
                    className={styles.gitHubIcon}
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/zenitheesc">
                    <FaGithub />
                </a>
                GitHub  
            </a>
        </form>
    );
  }
  
export default GitHubButton;