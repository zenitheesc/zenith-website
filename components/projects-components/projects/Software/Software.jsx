import React from 'react';
import Model from './Model';
import ProjectHeader from '../../ProjectHeader';
import styles from 'styles/Projects.module.css';

export default function Software(props) {
  const { reportMaker, zenithMonitor, zenView, website } = props.textContent.projects;

  return (
    <section className={`-section ${styles.projectsSection}`} style={{backgroundColor: '#000000'}}>
      <ProjectHeader textContent ={ props.textContent } h1Color={ '#CCCCCC' } pColor={ '#CCCCCC' } />
      <Model textContent={ reportMaker } path={'images/Projetos/Software/ReportMaker.webp'} />
      <Model textContent={ zenithMonitor } path={'images/Projetos/Software/ZenithMonitor.webp'} />
      <Model textContent={ zenView } path={'images/Projetos/Software/ReportMaker.webp'} /> 
      <Model textContent={ website } path={'images/Projetos/Software/Website.webp'} /> 
    </section>
  );
}
