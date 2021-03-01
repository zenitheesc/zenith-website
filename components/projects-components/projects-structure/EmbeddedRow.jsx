import Embarcados from 'components/home-components/sectors-section/icons/Embarcados';
import React from 'react'
import style from 'styles/projects/SectorsRow.module.css'

export default function EmbeddedRow(props) {
	const { content } = props;
	return (
		<div className={style.SectorRow}>
			<div>
				<Embarcados />
			</div>
			<div className={style.SectorRowContent}>
				{content.map((value, index) => {
					return <span name={value} key={index}>{value}<br /></span>
				})}
			</div>
		</div>
	)
}
