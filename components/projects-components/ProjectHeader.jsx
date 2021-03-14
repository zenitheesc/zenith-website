import React from 'react';
import boldParser from 'components/utils/boldParser';
import styles from 'styles/projects/ProjectHeader.module.css';

export default function ProjectHeader(props) {
  const { title, subtitle } = props.textContent;
  const { h1Color, pColor } = props;

  const h1Style = {
    color: h1Color,
  };

  const pStyle = {
    color: pColor,
  };

	const parsedSubtitle = subtitle.map((string)=>{ return boldParser(string)})

  return (
    <section className={styles.projectHeader}>
      <div className={styles.textSection}>
        <h1 style={ h1Style }>
          {title}
        </h1>
        {parsedSubtitle.map((value, index) => {
          return (<p style={ pStyle } key={index}> {value} </p>);
        })}
      </div>
    </section>
  );
}
