import React from 'react'
import styles from '../../../styles/projects/EnumList.module.css'

function Item(props) {
	const { text } = props;
	const { num } = props;
	return (
		<div className={styles.enumListItem}>
			<span> {num + 1} </span>
			<span> {text} </span>
		</div>
	)
}

export default function EnumList(props) {
	const { itens } = props;
	const { title } = props;

	return (
		<div className={styles.enumList}>
			<h3>{title}</h3>
			{itens.map((value, index) => {
				return <Item text={value} key={index} num={index}/>
			})}
		</div>
	)
}
