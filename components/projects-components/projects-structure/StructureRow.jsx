import React from 'react';
import boldParser from 'components/utils/boldParser';
import Estruturas from 'components/home-components/sectors-section/icons/Estruturas';
import style from 'styles/projects/SectorsRow.module.css';

export default function StructureRow(props) {
	const { content } = props;
	const parsedContent = content.map((string)=>{ return boldParser(string)})

	return (
		<div className={style.SectorRow}>
			<div>
				<Estruturas />
			</div>
			<div className={style.SectorRowContent}>
				{parsedContent.map((value, index) => {
					return <span key={index}>{value}</span>
				})}
			</div>
		</div>
	)
}
