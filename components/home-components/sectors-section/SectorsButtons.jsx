import React from 'react';
import styles from 'styles/Sectors.module.css';

export default function SectorsButtons(props) {
  const Icon = props.children;
  const { title } = props.label;
  const { onClick } = props;

  return (
    <div className={styles.sectorsButton} onClick={onClick}>
      <button type="button">
        {Icon}
      </button>
      <h3>
        {title}
      </h3>
    </div>
  );
}
