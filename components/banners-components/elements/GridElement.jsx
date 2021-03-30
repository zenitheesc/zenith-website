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
                            <img src={`/images/HomePage/banners/supporters-banner/${supporter.logo}.svg`} className={styles.supportersLogo} alt = "Suporter Logo"/>
                        </a>
                    );

                })
            }
        </div>
	)
}


export default GridElement;