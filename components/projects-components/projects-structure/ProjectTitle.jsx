import React from 'react'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link';
import styles from '../../../styles/projects/ProjectTitle.module.css'

export default function ProjectTitle(props) {
	const { title } = props;
	const { gitLink } = props;

	return (
		<div className={styles.projectTitle}>
			<h1>
				{title}
			</h1>
			{
				gitLink != null? 
				<Link href={gitLink}>
					<FaGithub />
				</Link>
				: 
				<></>
			}
			
		</div>
	)
}
