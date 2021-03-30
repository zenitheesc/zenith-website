import React from 'react'
import styles from 'styles/projects/ProjectSubtitle.module.css'

export default function ProjectSubtitle(props) {
	const { subtitle } = props;

	return (
		<div>
			<h2 className={styles.projectSubtitle}>
				{subtitle}
			</h2>
		</div>
	)
}