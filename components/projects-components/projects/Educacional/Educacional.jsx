import React from 'react';
import Model from './Model';
import ProjectHeader from '../../ProjectHeader';
import styles from 'styles/Projects.module.css';

export default function Educacional(props) {
  const { garateaE2017 } = props.textContent.projects;
  const { garateaE2018 } = props.textContent.projects;
  const { garateaE2019 } = props.textContent.projects;

  const garateaE2017paths = [
    'Educacional/garateaE2017/photo1.webp',
    'Educacional/garateaE2017/photo2.webp',
    'Educacional/garateaE2017/photo3.webp',
    'Educacional/garateaE2017/photo4.webp',
    'Educacional/garateaE2017/photo5.webp',
    'https://www.youtube.com/watch?v=0w5wkIo5laE',
    'https://www.youtube.com/watch?v=Q_3MO0aVXbI',
    'https://www.youtube.com/embed/AkuKjHLjF-g',
    
  ];

  const garateaE2018paths = [
    'Educacional/garateaE2018/photo1.webp',
    'Educacional/garateaE2018/photo2.webp',
    'Educacional/garateaE2018/photo3.webp',
    'Educacional/garateaE2018/photo4.webp',
    'Educacional/garateaE2018/photo5.webp',
    'Educacional/garateaE2018/photo6.webp',
    'Educacional/garateaE2018/photo7.webp',
    'Educacional/garateaE2018/photo8.webp',
    'https://www.youtube.com/watch?v=Lap1VWlx7WI',
  ];

  const garateaE2019paths = [
    'Educacional/garateaE2019/photo1.webp',
    'https://www.youtube.com/watch?v=nAI0hsjUrw4',
  ];
  
  return (
    <section className={`-section ${styles.projectsSection}`} style={{backgroundColor: '#605F62'}}>
      <ProjectHeader textContent ={ props.textContent } h1Color={ '#E0E0E0' } pColor={ '#CCCCCC' } />
      <Model paths={garateaE2017paths} textContent={ garateaE2017 } />
      <Model paths={garateaE2018paths} textContent={ garateaE2018 }/>
      <Model paths={garateaE2019paths} textContent={ garateaE2019 }/>
    </section>
  );
}
