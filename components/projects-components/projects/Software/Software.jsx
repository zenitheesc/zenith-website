import React from 'react';
import Model from './Model';
import ProjectHeader from '../../ProjectHeader';
import styles from 'styles/Projects.module.css';
import { Timeline, Event } from "components/projects-components/projects-structure/TimeLine";

export default function Software(props) {
  const { reportMaker, zenithMonitor, zenView, website } = props.textContent.projects;

  return (
    <section className={`-section ${styles.projectsSection}`} style={{ backgroundColor: '#000000' }}>
      <ProjectHeader textContent ={ props.textContent } h1Color={ '#CCCCCC' } pColor={ '#CCCCCC' } />
      <Timeline theme="dark">
        <Event interval={2021}>
          <Model textContent={zenView} path={'Software/ReportMaker.webp'} />
        </Event>
        <Event interval={2020}>
          <Model textContent={reportMaker} path={'Software/ReportMaker.webp'} />
          <Model textContent={zenithMonitor} path={'Software/ZenithMonitor.webp'} />
        </Event>
        <Event interval={2019} />
      </Timeline>
    </section>
  );
}
