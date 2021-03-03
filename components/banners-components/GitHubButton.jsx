import textStyles from '../../styles/BannersText.module.css'

function GitHubButton(props) {
	const link = props.link;

    return ( 
        <form action={link} target="_blank">
            <button id={textStyles.gitHubButton} type="submit" >
                <img id={textStyles.gitHubIcon} src="/images/banners/GitHubWhiteIcon.png" />
                GITHUB  
            </button>
        </form>
    );
  }
  
export default GitHubButton;