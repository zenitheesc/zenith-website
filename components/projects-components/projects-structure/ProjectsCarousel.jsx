import React from 'react';
import style from 'styles/projects/ProjectCarousel.module.css';
import ReactPlayer from "react-player"
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function CarouselImage(props) {
  const { path } = props;

  return (
    <div className={style.carouselImageDiv}>
      <img className={style.carouselImage} src={`/images/Projetos/${path}`} alt = "Carousel image" />
    </div>
  )
}

const CarouselVideo = ({ url, isSelected }) => {

  return (
    <div className={style.carouselVideoDiv}>
      <ReactPlayer width="100%" height="100%" url={url} controls={true} />
    </div>
  )
}


export default function ProjectsCarousel(props) {
  const { paths } = props;
  const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

  return (
    <Carousel
      width='85%'
      className={style.projectsCarousel}
      showStatus={false}
      showThumbs={false}
      renderItem={customRenderItem}
      showIndicators={paths.length > 1}
    >

      {paths.map((path, index) => {
        {
          return (path.endsWith(".webp")) ?
            <CarouselImage path={path} key={index} /> :
            <CarouselVideo url={path} key={index} />
        }
      })}
    </Carousel>
  );
}
