import React from 'react';
import EnumList from '../../projects-structure/EnumList';
import ProjectData from '../../ProjectData';
import ProjectTitle from '../../projects-structure/ProjectTitle';
import ProjectTable from '../../projects-structure/ProjectTable';
import ProjectDataRow from '../../projects-structure/ProjectDataRow';
import ProjectToggle from '../../projects-structure/ProjectToggle';
import ProjectsCarousel from '../../projects-structure/ProjectsCarousel';
import EmbeddedRow from 'components/projects-components/projects-structure/EmbeddedRow';
import StructureRow from 'components/projects-components/projects-structure/StructureRow';
import styles from 'styles/Projects.module.css';

function Model (props) {
    const { 
        title, 
        link,
        menus,
        launchDate,
        altitude,
        award,
        experiments,
        embedded,
        structure
    } = props.textContent;
    const { paths } = props;

    return (  
        <div className={styles.projectContainer}>
            <ProjectData dark>
                <ProjectTitle title={ title } gitLink={ link } />
                <ProjectToggle firstTitle = {menus[0]} secondTitle = {menus[1]}>
                <ProjectTable>
                    <ProjectDataRow label={launchDate[0]} value={launchDate[1]} />
                    <ProjectDataRow label={altitude[0]} value={altitude[1]} />
                    {
                    (award !== undefined) 
                        ? <ProjectDataRow label={award[0]} value={award[1]} />
                        : <> </>
                    }
                    {
                    (experiments !== undefined) 
                        ? <EnumList title={experiments[0]} itens={experiments.slice(1)} dark />
                        : <> </>
                    }
                </ProjectTable>
                <ProjectTable>
                        <EmbeddedRow content={embedded}/>
                        <StructureRow content={structure}/>
                </ProjectTable>
                </ProjectToggle>
            </ProjectData>
            <ProjectsCarousel paths={paths} autoPlay/>
        </div>      
    );
}

export default Model;
