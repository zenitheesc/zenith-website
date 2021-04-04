import React from 'react'
import { FaGithub } from 'react-icons/fa'
import styles from 'styles/projects/ProjectTitle.module.css'

export default function ProjectTitle(props) {
	const { title, gitLink, noSpace } = props;

	return (
		<div className={`${styles.projectTitle} ${noSpace ? styles.noSpace : ''}`}>
			<h2>
				{title}
			</h2>
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
