import React, { useRef } from 'react'
import useTranslation from 'next-translate/useTranslation';
import styles from 'styles/projects/TimeLine.module.css'

export function Timeline({ children, theme }) {
	return (
		<div className={[styles.container, styles[theme]].join(" ")}>
			<ul className={styles.timeline}>
				{children}
			</ul>
		</div>
	)
}

export function Event({ interval, children }) {

	const { t } = useTranslation();

	const currentText = t("projetos:atualmente");
	const currentYear = new Date().getFullYear();
	const date        = (interval === currentYear) ? currentText : interval;

	const dateRef       = useRef(null);
	const executeScroll = () => dateRef.current.scrollIntoView();

	return (
		<li className={styles.event}>
			<label className={styles.icon} />

			<div className={styles.body}>
				<p ref={dateRef} onClick={executeScroll} className={styles.date}>{date}</p>
				<div >
					{children}
				</div>
			</div>

		</li>
	)
}