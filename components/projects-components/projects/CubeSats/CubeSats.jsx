import React from 'react';
import Model from './Model';
import styles from 'styles/Projects.module.css';

export default function CubeSats(props) {
  const { zenSat } = props.textContent.projects;
  const { uspSat } = props.textContent.projects;

  return (
    <section className={`-section ${styles.projectsSection}`} style={{backgroundColor: '#605F62'}}>
      <Model textContent={ zenSat } />
      <Model textContent={ uspSat }/>
    </section>
  );
}
