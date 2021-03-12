import React from 'react'

import styles from 'styles/projects/TimeLine.module.css'

export function Timeline({ children, theme }) {
	return (
		<div className={[styles.container,styles[theme]].join(" ")}>
			<ul className={styles.timeline}>
				{children}
			</ul>
		</div>
	)
}

export function Event({interval, children}) {
	return (
		<li className={styles.event}>
			<label className={styles.icon} />

			<div className={styles.body}>
				<p className={styles.date}>{interval}</p>
				<div >
					{children}
				</div>
			</div>

		</li>
	)
}