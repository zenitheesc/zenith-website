import React from 'react';
import Model from './Model';
import styles from 'styles/Projects.module.css';
import { Timeline, Event } from "components/projects-components/projects-structure/TimeLine";

export default function Software(props) {
  const { reportMaker } = props.textContent.projects;
  const { zenithMonitor } = props.textContent.projects;
  const { zenView } = props.textContent.projects;

  return (
    <section className={`-section ${styles.projectsSection}`} style={{ backgroundColor: '#000000' }}>
      <Timeline theme="dark">
        <Event interval={2021}>
          <Model textContent={zenView} path={'images/Projetos/Software/ReportMaker.webp'} />
        </Event>
        <Event interval={2020}>
          <Model textContent={reportMaker} path={'images/Projetos/Software/ReportMaker.webp'} />
          <Model textContent={zenithMonitor} path={'images/Projetos/Software/ZenithMonitor.webp'} />
        </Event>
        <Event interval={2019} />
      </Timeline>
    </section>
  );
}
