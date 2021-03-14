import React from 'react';
import Model from './Model';
import ProjectHeader from '../../ProjectHeader';
import styles from 'styles/Projects.module.css';

export default function Hardware(props) {
  const { controladorPID } = props.textContent.projects;
  const { osciloscopio } = props.textContent.projects;
  const { genus } = props.textContent.projects;
  const { varella } = props.textContent.projects;
  const { groundStation } = props.textContent.projects;

  return (
    <section className={`-section ${styles.projectsSection}`} style={{backgroundColor: '#E1E1E5'}}>
      <ProjectHeader textContent ={ props.textContent } />
      <Model textContent={ controladorPID } />
      <Model textContent={ osciloscopio }/>
      <Model textContent={ genus }/> 
      <Model textContent={ varella }/> 
      <Model textContent={ groundStation }/> 
    </section>
  );
}
