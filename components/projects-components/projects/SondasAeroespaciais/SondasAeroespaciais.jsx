import React from 'react';
import Model from './Model';
import styles from 'styles/Projects.module.css';

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

  return (
    <section className={`-section ${styles.projectsSection}`} style={{backgroundColor: '#E1E1E5'}}>
      <Model textContent={ garatea1 } paths={garatea1Images}/>
      <Model textContent={ garatea2 } paths={garatea1Images}/> 
      <Model textContent={ garatea3 } paths={garatea1Images}/>
      <Model textContent={ garatea5 } paths={garatea1Images}/>
    </section>
  );
}
