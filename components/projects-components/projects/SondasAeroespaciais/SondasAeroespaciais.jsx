import React from 'react';
import Model from './Model';
import styles from 'styles/Projects.module.css';

export default function SondasAeroespaciais(props) {
  const { garatea1 } = props.textContent.projects;
  const { garatea2 } = props.textContent.projects;
  const { garatea3 } = props.textContent.projects;
  const { garatea5 } = props.textContent.projects;

  return (
    <section className={`-section ${styles.projectsSection}`} style={{backgroundColor: '#E1E1E5'}}>
      <Model textContent={ garatea1 } />
      <Model textContent={ garatea2 } />
      <Model textContent={ garatea3 } />
      <Model textContent={ garatea5 } />
    </section>
  );
}
