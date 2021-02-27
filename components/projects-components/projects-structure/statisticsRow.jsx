import CounterText from 'components/general/CounterText'
import React from 'react'
import styles from '../../../styles/projects/StatisticsRow.module.css'


export default function StatisticsRow(props) {
	const { title } = props
	const { statistics } = props
	return (
		<div className={styles.statisticsRow}>
			<h3>
				{title}
			</h3>
			<div className={styles.statisticsContainer}>
				{statistics.map((value, index) => {
					return <CounterText className={styles.countUp} value={value.numero} suffix={value.label} key={index} plus={value.plus}/>
				})}
			</div>
		</div>
	)
}
