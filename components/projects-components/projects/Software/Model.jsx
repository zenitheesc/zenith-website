import React from 'react';
import CheckList from '../../projects-structure/CheckList';
import ProjectData from '../../ProjectData';
import ProjectTitle from '../../projects-structure/ProjectTitle';
import ProjectSubtitle from '../../projects-structure/ProjectSubtitle';
import ProjectTable from '../../projects-structure/ProjectTable';
import TechnologiesRow from '../../projects-structure/TechnologiesRow';

import styles from 'styles/Projects.module.css';
import ProjectsCarousel from 'components/projects-components/projects-structure/ProjectsCarousel';

function Model (props) {
    const { 
        title, 
        detail,
        link,
        tecnologies,
        techSpecification
    } = props.textContent;
    const path = props.path;

    return (  
        <div className={styles.projectContainer}>
            <ProjectData>
                <ProjectTitle title={ title } gitLink={ link } />
                <ProjectSubtitle subtitle={ detail } /> 
                <ProjectTable>
                    <TechnologiesRow title={tecnologies[0]} technologies={tecnologies.slice(1)} />
                    <CheckList title={techSpecification[0]} itens={techSpecification.slice(1)} dark />
                </ProjectTable>
            </ProjectData>
            <ProjectsCarousel paths={[path]}/>
        </div>      
    );
}

export default Model;
