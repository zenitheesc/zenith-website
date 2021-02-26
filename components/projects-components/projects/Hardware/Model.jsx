import React from 'react';
import CheckList from '../../projects-structure/CheckList';
import ProjectData from '../../ProjectData';
import ProjectTitle from '../../projects-structure/ProjectTitle';
import ProjectSubtitle from '../../projects-structure/ProjectSubtitle';
import ProjectTable from '../../projects-structure/ProjectTable';
import TechnologiesRow from '../../projects-structure/TechnologiesRow';

import styles from 'styles/Projects.module.css';

function Model (props) {
    const { 
        title, 
        detail,
        link,
        tecnologies,
        techSpecification
    } = props.textContent;

    return (  
        <div className={styles.projectContainer}>
            <ProjectData dark>
                <ProjectTitle title={ title } gitLink={ link } />
                <ProjectSubtitle subtitle={ detail } /> 
                <ProjectTable>
                    <TechnologiesRow title={tecnologies[0]} technologies={tecnologies.slice(1)} />
                    <CheckList title={techSpecification[0]} itens={techSpecification.slice(1)} dark />
                </ProjectTable>
            </ProjectData>
        </div>      
    );
}

export default Model;
