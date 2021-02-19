import React from 'react'
import styles from '../../styles/projects/ProjectData.module.css'

export default function ProjectData(props) {
	const { dark } = props
	return (
		<div className={dark ? styles.projectDataDark : styles.projectData}>
			{props.children}
		</div>
	)
}
