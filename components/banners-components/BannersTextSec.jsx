import textStyles from '../../styles/BannersText.module.css'

function BannersTextSec(props) {
    
    const { title } = props.textContent;
	const { detail } = props.textContent;
	const { link } = props.textContent;

    return ( 
        <div className={`-standardContainer ${textStyles.bannersText}`}>
			<h1 className="-homepage-section-title">
				{title}
			</h1>
			<h3 className="-homepage-section-subtitle">
				{detail} 
			</h3>
            {link ? 
			<form action={link} target="_blank">
                <button id={textStyles.gitHubButton} type="submit" >
                    <img id={textStyles.gitHubIcon} src="/images/banners/GitHubWhiteIcon.png" />
                    GITHUB  
                </button>
            </form>
            : null}
		</div>
        
    );
  }
  
  export default BannersTextSec;