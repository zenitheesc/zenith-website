import React from 'react';
import Model from './Model';
import ProjectHeader from '../../ProjectHeader';
import styles from 'styles/Projects.module.css';

export default function CubeSats(props) {
  const { zenSat, uspSat } = props.textContent.projects;

  return (
    <section className={`-section ${styles.projectsSection}`} style={{backgroundColor: '#605F62'}}>
      <ProjectHeader textContent ={ props.textContent } h1Color={ '#E0E0E0' } pColor={ '#CCCCCC' } />
      <Model textContent={ zenSat } />
      <Model textContent={ uspSat }/>
    </section>
  );
}
