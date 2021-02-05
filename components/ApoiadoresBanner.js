import styles from '../styles/ApoiadoresBanner.module.css'



function apoiadoresBanner() {
	
	return (
        <div className={styles.apoiadoresBanner}>
			
			
			<div className={styles.bannersText} >
				<h1>nossos
                    apoiadores
                </h1>
				<h2>sem eles, nada disso seria possível</h2>
				
			</div>
			
			<img className={styles.apoiadoresImage} src="/images/Apoiadores.png" width="20%" style={{display: "flex"}}/>
			
		</div>
		
	)
	
	
}

export default apoiadoresBanner;