import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import styles from '../../../styles/projects/CheckList.module.css'

function Item(props) {
	const { text } = props;
	return (
		<div className={styles.checkListItem}>
			<FaCheckCircle />
			<span> {text} </span>
		</div>
	)
}

export default function CheckList(props) {
	const { itens } = props;
	const { title } = props;

	return (
		<div className={styles.checkList}>
			<h3>{title}</h3>
			{itens.map((value) => {
				return <Item text={value} />
			})}
		</div>
	)
}
