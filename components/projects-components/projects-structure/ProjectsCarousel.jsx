import React from 'react';
import style from 'styles/projects/ProjectCarousel.module.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function ProjectsCarousel(props) {
  return (
    <Carousel 
      width='90%'
      className={style.projectsCarousel}
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      autoPlay
      emulateTouch
    >
      {props.children}
    </Carousel>
  );
}
