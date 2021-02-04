import React from 'react'
import styles from '../styles/HeroSection.module.css'

function HeroSection() {
    return (
        <div className={styles.heroContainer}>
            <video autoPlay loop muted playsInline preload="auto"> 
                <source src='images/HomePage/video.webm' type='video/webm'/>            
                <source src='images/HomePage/video.ogg' type='video/ogg'/>            
                <source src='images/HomePage/video.mp4' type='video/mp4'/>            
            </video>
            <h1>A CASA DAS ESTRELAS EM SÃO CARLOS</h1>
            <hr />
            <p>Desde 2014, o Zenith Aerospace proporciona a centenas de alunos a oportunidade de conquistar o espaço</p>
        </div>
    )
}

export default HeroSection

