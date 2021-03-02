import styles from 'styles/ApoiadoresBanner.module.css'


function GridElement(props) {
	const links = props.website;
    
    return (
        <>
            <a href={links[0].link} target="_blank">
                <picture>
                    <source srcset="/images/banners/supporters-banner/oz.webp" type="image/webp" />
                    <img src="/images/banners/supporters-banner/oz.png" type="image/png" id={styles.imageOne}/>
                </picture>
            </a>
            <a href={links[1].link} target="_blank">
                <picture>
                    <source srcset="/images/banners/supporters-banner/usp.webp" type="image/webp" />
                    <img src="/images/banners/supporters-banner/usp.png" type="image/png" id={styles.imageTwo}/>
                </picture>
            </a>
            <a href={links[2].link} target="_blank">
                <picture>
                    <source srcset="/images/banners/supporters-banner/eesc.webp" type="image/webp" />
                    <img src="/images/banners/supporters-banner/eesc.png" type="image/png" id={styles.imageThree}/>
                </picture>
            </a>
            <a href={links[3].link} target="_blank">
                <img id={styles.imageFour} src="/images/banners/supporters-banner/vercel.svg"/>
            </a>
            <a className={styles.emptySquare}></a>
			<a className={styles.emptySquare}></a> 
        </>
	)
}


export default GridElement;