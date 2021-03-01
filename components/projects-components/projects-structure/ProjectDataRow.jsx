import React from 'react'
import { projectDataRow } from "../../../styles/projects/ProjectDataRow.module.css";

export default function ProjectDataRow(props) {
	const { label, value } = props;
	return (
		<div className={projectDataRow}>
			<h3>
				{label}
			</h3>
			{
				Array.isArray(value)
					? <div>
						{value.map((text, index) => {
							return (
								<div key={index}>
									<span>{text}</span>
									<br />
								</div>
							)
						})}
					</div>
					: <span>{value}</span>
			}
		</div >
	)
}
