import React from 'react';
import ProjectData from '../../ProjectData';
import ProjectTitle from '../../projects-structure/ProjectTitle';
import ProjectTable from '../../projects-structure/ProjectTable';
import ProjectDataRow from '../../projects-structure/ProjectDataRow';
import ProjectToggle from '../../projects-structure/ProjectToggle';
import ProjectSubtitle from '../../projects-structure/ProjectSubtitle';
import TechnologiesRow from '../../projects-structure/TechnologiesRow';

import styles from 'styles/Projects.module.css';
import EmbeddedRow from 'components/projects-components/projects-structure/EmbeddedRow';
import StructureRow from 'components/projects-components/projects-structure/StructureRow';

function Model(props) {
    const {
        title,
        subtitle,
        year,
        link,
        menus,
        award,
        tecnologies,
        embedded,
        structure
    } = props.textContent;
    const { paths } = props;

    return (
        <div className={styles.projectContainer}>
            <ProjectData>
                <ProjectTitle title={title} gitLink={link} />
                <ProjectToggle firstTitle={menus[0]} secondTitle={menus[1]}>
                    <ProjectTable>
                        <ProjectSubtitle subtitle={subtitle} />
                        <ProjectDataRow label={award[0]} value={award[1]} />
                        <TechnologiesRow title={tecnologies[0]} technologies={tecnologies.slice(1)} />
                    </ProjectTable>
                    <ProjectTable>
                        <EmbeddedRow content={embedded}/>
                        <StructureRow content={structure}/>
                    </ProjectTable>
                </ProjectToggle>
            </ProjectData>
        </div>
    );
}

export default Model;