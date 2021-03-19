import React from 'react';
import styles from 'styles/FormWrapper.module.css'

export default function FormWrapper(props) {
	const { link } = props;
	return (
		<div className={[styles.formWrapper,"-section"].join(" ")}>
			<iframe  className={"-standardContainer"} src={link}>
				Loading...
			</iframe>
		</div>
	)
}
