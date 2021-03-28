import React from 'react';
import style from 'styles/SectorsCards.module.css'
import BubbleUI from "./TechBubble/BubblueElement";
import techData from "./TechBubble/technologies.json";
import TechBubble from "./TechBubble/TechBubble";

export default function SectorCard({ textContent, name}) {

  const { cores } = textContent;

  const getStockBubbles = () => {
    return techData.map((tech, i) => {
      return <TechBubble {...tech} key={i} backGroundColor={(tech.sector === name) ? "red" : "green"} />;
    });
  };
  const stockBubbles = getStockBubbles();

  const options = {
    size: 240,
    minsize: 30,
    gutter: 20,
    provideProps: true,
    numCols: 6,
    fringeWidth: 260,
    yRadius: 100,
    xRadius: 100,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 4,
  };

  return (
    <div className={style.container}>
      <div className={style.info}>

        <h1>{textContent.title}</h1>
        <span>{textContent.detail}</span>
        <h2>{textContent.core}:</h2>
        <div>
          {
            cores.map((value, key) => {
              return (
                <div key={key} className={style.infoContainer}>
                  <strong>{value.title}</strong>
                  <span>{value.detail}</span>
                </div>
              )
            })
          }
        </div>

      </div>
      <div className={style.cloud}>
        <BubbleUI className={style.bubbleUI} options={options}>
          {stockBubbles}
        </BubbleUI>
      </div>
    </div>
  );
}
