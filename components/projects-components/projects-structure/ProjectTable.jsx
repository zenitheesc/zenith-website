import React from 'react'
import styles from '../../../styles/projects/ProjectTable.module.css'

export default function ProjectTable(props) {
	console.log(props);
	return (
		<div className={styles.projectTable}>
			{props.children}
		</div>
	)
}
