import textStyles from '../../styles/BannersText.module.css'

function BannersTextSec(props) {

    const { title } = props.textContent;
	const { detail } = props.textContent;
	const { link } = props.textContent;
    
    return (
        <div className={textStyles.bannersText}>
			<h1>
				{title}
			</h1>
			<h2>
				{detail}
			</h2>
			<form action={link} target="_blank">
                <button id={textStyles.gitHubButton} type="submit" >
                    <img id={textStyles.gitHubIcon} src="/images/banners/GitHubWhiteIcon.png" />
                    GITHUB  
                </button>
            </form>
		</div>
        
    );
  }
  
  export default BannersTextSec;