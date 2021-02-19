import React from 'react'
import styles from '../../styles/projects/ProjectData.module.css'

export default function ProjectData(props) {
	const { dark } = props
	return (
		<div className={[styles.projectData,dark ? styles.dark : ""].join(" ")}>
			{props.children}
		</div>
	)
}
