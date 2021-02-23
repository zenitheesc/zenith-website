import React from 'react';
import CheckList from '../../projects-structure/CheckList';
import ProjectData from '../../ProjectData';
import ProjectsContainer from '../../ProjectsContainer';
import ProjectTitle from '../../projects-structure/ProjectTitle';
import TechnologiesRow from '../../projects-structure/TechnologiesRow';
import ProjectTable from '../../projects-structure/ProjectTable';
import ProjectDataRow from '../../projects-structure/ProjectDataRow';
import ProjectToggle from '../../projects-structure/ProjectToggle';
import ProjectsCarousel from '../../projects-structure/ProjectsCarousel';

import styles from 'styles/Projects.module.css';

function Model (props) {
    const { 
        title, 
        menus,
        launchDate,
        altitude,
        award,
        experiments,
        embedded,
        structure
    } = props.textContent;

    return (  
        <div className={`-standardContainer ${styles.projectContainer}`}>
            <ProjectData dark>
                <ProjectTitle title={ title } gitLink="" />
                <ProjectToggle firstTitle = {menus[0]} secondTitle = {menus[1]}>
                <ProjectTable>
                    <ProjectDataRow label={launchDate[0]} value={launchDate[1]} />
                    <ProjectDataRow label={altitude[0]} value={altitude[1]} />
                    {
                    (award !== undefined) 
                        ? <ProjectDataRow label={award[0]} value={award[1]} />
                        : <> </>
                    }
                    <CheckList title={experiments[0]} itens={experiments.slice(1)} dark />
                </ProjectTable>
                <ProjectTable>
                    
                </ProjectTable>
                </ProjectToggle>
            </ProjectData>
            <ProjectsCarousel>
                <div>
                    <img src='/images/Kurumim/header.webp'/>
                </div>
            </ProjectsCarousel>
        </div>      
    );
}

export default Model;
