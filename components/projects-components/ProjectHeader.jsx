import React from 'react';
import useTranslation from 'next-translate/useTranslation';

export default function ProjectHeader(props) {
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
