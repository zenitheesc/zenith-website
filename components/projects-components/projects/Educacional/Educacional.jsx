import React from 'react';
import Model from './Model';
import styles from 'styles/Projects.module.css';

export default function Educacional(props) {
  const { garateaE2017 } = props.textContent.projects;
  const { garateaE2018 } = props.textContent.projects;
  const { garateaE2019 } = props.textContent.projects;

  return (
    <section className={`-section ${styles.projectsSection}`} style={{backgroundColor: '#605F62'}}>
      <Model textContent={ garateaE2017 } />
      <Model textContent={ garateaE2018 }/>
      <Model textContent={ garateaE2019 }/>
    </section>
  );
}
