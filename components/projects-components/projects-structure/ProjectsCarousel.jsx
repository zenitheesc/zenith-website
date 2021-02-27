import React from 'react';
import style from 'styles/projects/ProjectCarousel.module.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function CarouselImage(props) {
  const { path } = props;
  
  return (
		<div className={style.carouselImageDiv}>
			<img className={style.carouselImage} src={`/images/Projetos/${path}`} />
		</div>
	)
}

export default function ProjectsCarousel(props) {
  const { paths } = props;

  return (
    <Carousel 
      width='85%'
      className={style.projectsCarousel}
      showStatus={false}
      showThumbs={false}
      autoPlay
      infiniteLoop
      emulateTouch
    >
      {paths.map((path, index) => {
					return <CarouselImage path={path} key={index}/>
				})}
    </Carousel>
  );
}
