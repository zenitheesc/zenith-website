import React, { useEffect, useState, useRef } from 'react';
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

function CarouselYoutubeVideo({ url, isSelected }) {

  return (
    <div className={style.carouselYoutubeVideoDiv}>
      <ReactPlayer width="100%" height="100%" url={url} controls={true} />
    </div>
  )
}

function CarouselVideo({ path }) {

  const videoElement = useRef(null);

  return (
    <video className={style.carouselVideoDiv} ref={videoElement}  autoPlay loop muted playsInline preload="auto">
      <source src={`/images/Projetos/${path}`}/>
    </video>
  )
}


export default function ProjectsCarousel(props) {
  const { paths, autoPlay } = props;
  const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

  return (
    <Carousel
      width='85%'
      className={style.projectsCarousel}
      showStatus={false}
      showThumbs={false}
      renderItem={customRenderItem}
      showIndicators={paths.length > 1}
      autoPlay={autoPlay}
      infiniteLoop={autoPlay}
      emulateTouch={autoPlay}
    >

      {paths.map((path, index) => {
        {
          return (path.endsWith(".webp")) ?
            <CarouselImage path={path} key={index} /> :
            (path.startsWith("https://")) ?
              <CarouselYoutubeVideo url={path} key={index} /> :
              <CarouselVideo path={path} key={index} />

        }
      })}
    </Carousel>
  );
}
