import React from 'react';
import Model from './Model';
import ProjectHeader from '../../ProjectHeader';
import styles from 'styles/Projects.module.css';
import { Timeline, Event } from "components/projects-components/projects-structure/TimeLine";

export default function SondasAeroespaciais(props) {
  const { garatea1 } = props.textContent.projects;
  const { garatea2 } = props.textContent.projects;
  const { garatea3 } = props.textContent.projects;
  const { garatea5 } = props.textContent.projects;

  const garatea1Images = [
    'SondasAeroespaciais/Garatéa-I/photo1.webp',
    'SondasAeroespaciais/Garatéa-I/photo2.webp',
    'SondasAeroespaciais/Garatéa-I/photo3.webp',
    'SondasAeroespaciais/Garatéa-I/photo4.webp',
    'SondasAeroespaciais/Garatéa-I/photo5.webp',
    'SondasAeroespaciais/Garatéa-I/photo6.webp',
    'SondasAeroespaciais/Garatéa-I/photo7.webp',
    'SondasAeroespaciais/Garatéa-I/photo8.webp',
    'SondasAeroespaciais/Garatéa-I/photo9.webp',
    'SondasAeroespaciais/Garatéa-I/photo10.webp'
  ];

  const garatea2Images = [
    'SondasAeroespaciais/Garatéa-II/photo1.webp',
    'SondasAeroespaciais/Garatéa-II/photo2.webp',
    'SondasAeroespaciais/Garatéa-II/photo3.webp',
    'SondasAeroespaciais/Garatéa-II/photo4.webp',
    'SondasAeroespaciais/Garatéa-II/photo5.webp',
  ];

  const garatea3Images = [
    'SondasAeroespaciais/Garatéa-III/photo1.webp',
    'SondasAeroespaciais/Garatéa-III/photo2.webp',
    'SondasAeroespaciais/Garatéa-III/photo3.webp',
    'SondasAeroespaciais/Garatéa-III/photo4.webp',
    'SondasAeroespaciais/Garatéa-III/photo5.webp',
    'SondasAeroespaciais/Garatéa-III/photo6.webp',
    'SondasAeroespaciais/Garatéa-III/photo7.webp',
    'SondasAeroespaciais/Garatéa-III/photo8.webp',
    'SondasAeroespaciais/Garatéa-III/photo9.webp',
  ];

  const garatea5Images = [
    'SondasAeroespaciais/Garatéa-V/photo1.webp',
    'SondasAeroespaciais/Garatéa-V/photo2.webp',
    'SondasAeroespaciais/Garatéa-V/photo3.webp',
    'SondasAeroespaciais/Garatéa-V/photo4.webp',
    'SondasAeroespaciais/Garatéa-V/photo5.webp',
    'SondasAeroespaciais/Garatéa-V/photo6.webp',
    'SondasAeroespaciais/Garatéa-V/photo7.webp',
    'SondasAeroespaciais/Garatéa-V/photo8.webp',
    'SondasAeroespaciais/Garatéa-V/photo9.webp',
    'SondasAeroespaciais/Garatéa-V/photo10.webp'
  ];

  return (
    <section className={`-section ${styles.projectsSection}`} style={{ backgroundColor: '#E1E1E5' }}>
      <ProjectHeader textContent={props.textContent} />
      <Timeline theme="light">

        <Event interval="2018">
          <Model textContent={garatea5} paths={garatea5Images} />
          <Model textContent={garatea3} paths={garatea3Images} />
        </Event>
        <Event interval="2016">
          <Model textContent={garatea2} paths={garatea2Images} />
          <Model textContent={garatea1} paths={garatea1Images} />
        </Event>

      </Timeline>
    </section>
  );
}
