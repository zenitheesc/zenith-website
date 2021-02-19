import React from 'react';

export default function ProjectHeader() {
  const { title } = props.textContent;
  const { subtitle } = props.textContent;

  return (
    <section className={styles.projectHeader}>
      <div className={styles.textSection}>
        <h1>
          {title}
        </h1>
        <h2>
          {subtitle}
        </h2>
      </div>
    </section>
  );
}
