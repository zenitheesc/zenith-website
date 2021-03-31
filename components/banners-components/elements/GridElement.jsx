import styles from 'styles/SupportersBanner.module.css'

function GridElement(props) {
    const supporters = props.supporters;
    
    return (
        <div className={styles.squares}>
            {
                supporters.map((supporter, index) => {

                    return(
                        <a 
                        href={supporter.link} 
                        aria-label={supporters.logo}
                        target="_blank"
                        rel="noopener noreferrer" 
                        key={index}>
                            <img src={`/images/HomePage/banners/supporters-banner/${supporter.logo}.svg`} className={styles.supportersLogo} alt = {supporter.logo}/>
                        </a>
                    );

                })
            }
            <a>
                <img src={`/images/HomePage/banners/supporters-banner/BlankLogoPT.svg`} className={styles.supportersLogo} alt = {'Anuncie seu logo aqui!'}/>    
            </a>
        </div>
	)
}


export default GridElement;