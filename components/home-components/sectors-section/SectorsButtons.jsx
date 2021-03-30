import React from 'react';
import styles from 'styles/Sectors.module.css';

export default function SectorsButtons(props) {
  const { children } = props;
  const { title } = props.label;
  const { onClick } = props;
  const { selected } = props;

  return (
    <div className={[styles.sectorsButton,selected? styles.sectorsButtonSelected:""].join(" ")} onClick={onClick}>
      <button type="button">
        {children}
      </button>
      <h3>
        {title}
      </h3>
    </div>
  );
}
