import React from 'react';
import ProjectData from '../../ProjectData';
import ProjectTitle from '../../projects-structure/ProjectTitle';
import ProjectTable from '../../projects-structure/ProjectTable';
import ProjectDataRow from '../../projects-structure/ProjectDataRow';
import ProjectSubtitle from '../../projects-structure/ProjectSubtitle';

import styles from 'styles/Projects.module.css';
import StatisticsRow from 'components/projects-components/projects-structure/statisticsRow';
import ProjectsCarousel from 'components/projects-components/projects-structure/ProjectsCarousel';

function Model (props) {
    const { 
        title, 
        subtitle,
		launchDate,
        altitude,
		statistics
    } = props.textContent;
    const { paths } = props;
    
    return (  
        <div className={styles.projectContainer}>
            <ProjectData >
                <ProjectTitle title={ title }/>
				<ProjectSubtitle subtitle={ subtitle } />
                <ProjectTable>
                    <ProjectDataRow label={launchDate[0]} value={launchDate[1]} />
                    <ProjectDataRow label={altitude[0]} value={altitude.slice(1)} />
					<StatisticsRow statistics={statistics}/>
                </ProjectTable>
            </ProjectData>
            <ProjectsCarousel paths={paths} />
        </div>      
    );
}

export default Model;