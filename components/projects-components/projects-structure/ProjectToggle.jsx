import React, { useState } from 'react';
import styles from '../../../styles/projects/ProjectToggle.module.css'

export default function ProjectToggle(props) {
	const [firstOptionSelected, setfirstOptionSelected] = useState(true)
	const { firstTitle, secondTitle } = props
	return (
		<div>
			<div className={styles.projectToggleHeader} >
				<h2 onClick={() => { setfirstOptionSelected(true) }}
					style={{ "text-decoration": firstOptionSelected ? "underline" : "none" }}
				>
					{firstTitle}
				</h2>
				<h2 onClick={() => { setfirstOptionSelected(false) }}
					style={{ "text-decoration": firstOptionSelected ? "none" : "underline" }}

				>
					{secondTitle}
				</h2>
			</div>
			<div>
				{firstOptionSelected ? props.children[0] : props.children[1]}
			</div>

		</div>
	)
}
