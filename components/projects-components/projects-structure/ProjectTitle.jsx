import React from 'react'
import { FaGithub } from 'react-icons/fa'
import styles from 'styles/projects/ProjectTitle.module.css'

export default function ProjectTitle(props) {
	const { title } = props;
	const { gitLink } = props;

	return (
		<div className={styles.projectTitle}>
			<h1>
				{title}
			</h1>
			{
				gitLink != null
				? <a href={gitLink} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
					<FaGithub />
				</a>
				: <></>
			}
		</div>
	)
}
