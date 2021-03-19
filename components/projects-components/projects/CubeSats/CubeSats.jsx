import React from 'react';
import Model from './Model';
import ProjectHeader from '../../ProjectHeader';
import styles from 'styles/Projects.module.css';
import { Timeline, Event } from "components/projects-components/projects-structure/TimeLine";

export default function CubeSats(props) {
  const { zenSat, uspSat } = props.textContent.projects;

  return (
    <section className={`-section ${styles.projectsSection}`} style={{ backgroundColor: '#605F62' }}>
      <Timeline theme="gray">

        <Event interval={2020}>
          <Model textContent={uspSat} />
        </Event>
        <Event interval={2019}>
          <Model textContent={zenSat} />
        </Event>
        <Event interval={2018}/>

      </Timeline>
    </section>
  );
}
