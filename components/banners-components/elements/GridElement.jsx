import styles from 'styles/SupportersBanner.module.css'

function GridElement(props) {
    const { supportersMerchant, supporters } = props
    return (
        <div className={styles.squares}>
            {
                supporters.map((supporter, index) => {

                    return (
                        <a
                            href={supporter.link}
                            aria-label={supporters.logo}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}>
                            <img src={`/images/HomePage/banners/supporters-banner/${supporter.logo}.svg`} className={styles.supportersLogo} alt={supporter.logo} />
                        </a>
                    );

                })
            }

            {
                supporters.length % 2 !== 0 ?
                    <a>
                        <img
                            src={`/images/HomePage/banners/supporters-banner/${supportersMerchant}.svg`}
                            className={styles.supportersLogo}
                            alt={'Anuncie seu logo aqui!'}
                        />
                    </a> :
                    <></>
            }

        </div>
    )
}


export default GridElement;