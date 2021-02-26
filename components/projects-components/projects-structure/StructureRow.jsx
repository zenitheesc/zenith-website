import Estruturas from 'components/home-components/sectors-section/icons/Estruturas';
import React from 'react'
import style from 'styles/projects/SectorsRow.module.css'

export default function StructureRow(props) {
	const { content } = props;
	content.map(value =>{
		const replace = ','
		for (var i = 0; i < value.length; i++) {
			value[i];
		  }
	})
	return (
		<div className={style.SectorRow}>
			<div>
				<Estruturas />
			</div>
			<div className={style.SectorRowContent}>
				{content.map((value, index) => {
					return <span name={value} key={index}>{value}</span>
				})}
			</div>
		</div>
	)
}
