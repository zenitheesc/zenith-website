import React, { useRef, useState, useEffect } from 'react';
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
    const videoElement = useRef(null);
    const [videoAutoPlayable, setVideoAutoPlayable] = useState(true);

    const attemptPlay = () => {
        videoElement &&
        videoElement.current &&
        videoElement.current
            .play()
            .then(() => {
            setVideoAutoPlayable(true);
            })
            .catch(() => {
            setVideoAutoPlayable(false);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);


    return (  
        <div className={styles.projectContainer}>
            <ProjectData dark>
                <ProjectTitle title={ title } gitLink={ link } noSpace />
                <ProjectSubtitle subtitle={ detail } /> 
                <ProjectTable>
                    <TechnologiesRow title={tecnologies[0]} technologies={tecnologies.slice(1)} />
                    <CheckList title={techSpecification[0]} itens={techSpecification.slice(1)} dark />
                </ProjectTable>
            </ProjectData>
            {/* <div className={styles.projectImageContainer}>
                <video ref={videoElement} autoPlay loop muted playsInline preload="auto">
                    <source src="images/Projetos/Hardware/genus360-C4C4C4.m4v" type="video/mp4" />
                    {/* <source src="images/HomePage/video.mp4" type="video/mp4" /> */}
                    {/* <source src="images/HomePage/video.webm" type="video/webm" /> */} 
                {/* </video>
            </div> */}
        </div>      
    );
}

export default Model;
