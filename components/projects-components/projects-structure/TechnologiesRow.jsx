import React from 'react'
import styles from '../../../styles/projects/TechnologiesRow.module.css'

function Technology(props) {
	const { name } = props;
	const { alt } = props;
	
	return (
		<div className={styles.technologieContainer}>
			<img
				src={`/images/technologies/${name}.svg`}
				alt={alt}
				width="80%"
				height="auto"
			/>
		</div>
	)
}

export default function TechnologiesRow(props) {
	const { title } = props
	const { technologies } = props

	return (
		<div className={styles.technologiesRow}>
			<h3>
				{title}
			</h3>
			<div className={styles.technologiesContainer}>
				{technologies.map((value) => {
					return <Technology name={value} />
				})}
			</div>
		</div>
	)
}
