import React from 'react';
import Model from './Model';
import styles from 'styles/Projects.module.css';
import { Timeline, Event } from "components/projects-components/projects-structure/TimeLine";

export default function Hardware(props) {
  const { controladorPID } = props.textContent.projects;
  const { osciloscopio } = props.textContent.projects;
  const { genus } = props.textContent.projects;
  const { varella } = props.textContent.projects;
  const { groundStation } = props.textContent.projects;

  return (
    <section className={`-section ${styles.projectsSection}`} style={{ backgroundColor: '#E1E1E5' }}>

      <Timeline theme="light">

        <Event interval={2021}>
          <Model textContent={groundStation} />
          <Model textContent={varella} />
        </Event>
        <Event interval={2020}>
          <Model textContent={genus} />
        </Event>
        <Event interval={2019}>
          <Model textContent={controladorPID} />
          <Model textContent={osciloscopio} />
        </Event>


      </Timeline>

    </section>
  );
}
