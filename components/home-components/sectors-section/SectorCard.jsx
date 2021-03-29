import React from 'react';
import style from 'styles/SectorsCards.module.css'
import BubbleUI from "./TechBubble/BubblueElement";
import techData from "./TechBubble/technologies.json";
import TechBubble from "./TechBubble/TechBubble";

export default function SectorCard({ textContent, name}) {

  const { cores } = textContent;

  const getStockBubbles = () => {
    return techData.map((tech, i) => {
      return <TechBubble {...tech} key={i} alt={tech.name} backGroundColor={(tech.sector === name) ? "#545454" : "#CCCCCC"} />;
    });
  };
  const stockBubbles = getStockBubbles();

  const options = {
    size: 140,
    minsize: 20,
    gutter: 8,
    provideProps: true,
    numCols: 6,
    fringeWidth: 180,
    yRadius: 90,
    xRadius: 180,
    cornerRadius: 70,
    showGuides: false,
    compact: true,
    gravitation: 5,
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
