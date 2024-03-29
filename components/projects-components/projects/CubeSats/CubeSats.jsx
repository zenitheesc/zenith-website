import React from 'react';
import Model from './Model';
import ProjectHeader from '../../ProjectHeader';
import styles from 'styles/Projects.module.css';
import { Timeline, Event } from "components/projects-components/projects-structure/TimeLine";

export default function CubeSats(props) {
  const { zenSat, uspSat } = props.textContent.projects;

  const uspSatPaths = [
    'Cubesats/USPSat.webp',

  ];

  const zenSatPaths = [
    'Cubesats/ZenSat.webp',
  ];

  return (
    <section className={`-section ${styles.projectsSection}`} style={{ backgroundColor: '#605F62' }}>
      <ProjectHeader textContent ={ props.textContent } h2Color={ '#E0E0E0' } pColor={ '#CCCCCC' } />
      <Timeline theme="gray">

        <Event interval={2020}>
          <Model paths={uspSatPaths} textContent={uspSat} />
        </Event>
        <Event interval={2019}>
          <Model paths={zenSatPaths} textContent={zenSat} />
        </Event>
        <Event interval={2018}/>

      </Timeline>
    </section>
  );
}
