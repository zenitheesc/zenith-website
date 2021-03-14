import React from 'react';
import boldParser from 'components/utils/boldParser';
import Embarcados from 'components/home-components/sectors-section/icons/Embarcados';
import style from 'styles/projects/SectorsRow.module.css';

export default function EmbeddedRow(props) {
	const { content } = props;

	const parsedContent = content.map((string)=>{ return boldParser(string)})

	return (
		<div className={style.SectorRow}>
			<div>
				<Embarcados />
			</div>
			<div className={style.SectorRowContent}>
				
				{parsedContent.map((value, index) => {
					return <span key={index}>{value}<br /></span>
				})}
			</div>
		</div>
	)
}
