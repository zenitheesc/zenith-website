import styles from 'styles/SupportersBanner.module.css'

function GridElement(props) {
    const supporters = props.supporters;
    
    return (
        <div className={styles.squares}>
            {
                supporters.map((supporter, index) => {

                    return(
                        <a href={supporter.link} target="_blank" key={index}>
                            <img src={`/images/HomePage/banners/supporters-banner/${supporter.logo}.svg`} className={styles.supportersLogo}/>
                        </a>
                    );

                })
            }
            <a className={styles.emptySquare}></a>
            <a className={styles.emptySquare}></a>
        </div>
	)
}


export default GridElement;