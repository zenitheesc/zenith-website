import React from 'react';
import Model from './Model';
import ProjectHeader from '../../ProjectHeader';
import styles from 'styles/Projects.module.css';
import { Timeline, Event } from "components/projects-components/projects-structure/TimeLine";

export default function Hardware(props) {
  const { 
    controladorPID,
    osciloscopio,
    genus,
    varella,
    groundStation 
  } = props.textContent.projects;

  const groundStationPaths = [
    'Hardware/GroundStation.webp',
  ];

  const varellaPaths = [
    'Hardware/VarellaAcquisitionModule.webp',
  ];

  const genusPaths = [
    'Hardware/Genus.webp',
  ];

  const controladorPIDPaths = [
    'Hardware/Genus.webp',
  ];

  const osciloscopioPaths = [
    'Hardware/Osciloscopio.webp',
  ];

  return (
    <section className={`-section ${styles.projectsSection}`} style={{ backgroundColor: '#E1E1E5' }}>
      <ProjectHeader textContent ={ props.textContent } />
      <Timeline theme="light">
        <Event interval={2021}>
          <Model paths={groundStationPaths} textContent={groundStation} />
          <Model paths={varellaPaths} textContent={varella} />
        </Event>
        <Event interval={2020}>
          <Model paths={genusPaths} textContent={genus} />
        </Event>
        <Event interval={2019}>
          <Model paths={controladorPIDPaths} textContent={controladorPID} />
          <Model paths={osciloscopioPaths} textContent={osciloscopio} />
        </Event>
        <Event interval={2018} />

      </Timeline>

    </section>
  );
}
