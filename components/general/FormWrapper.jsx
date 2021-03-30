import React from 'react';
import styles from 'styles/FormWrapper.module.css'

export default function FormWrapper(props) {
	const { link } = props;
	return (
		<div className={styles.formWrapper}>
			<iframe src={link}>
				Loading...
			</iframe>
		</div>
	)
}
