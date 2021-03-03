import React from 'react';
import styles from 'styles/projects/ProjectHeader.module.css';

export default function ProjectHeader(props) {
  const { title } = props.textContent;
  const { subtitle } = props.textContent;

  return (
    <section className={styles.projectHeader}>
      <div className={styles.textSection}>
        <h1>
          {title}
        </h1>
        {subtitle.map((value, index) => {
          return (<p key={index}> {value} </p>);
        })}
      </div>
    </section>
  );
}
