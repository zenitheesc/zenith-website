import React from 'react';
import style from 'styles/SectorsCards.module.css'
import BubbleUI from "./TechBubble/BubblueElement";
import companyData from "./TechBubble/companies.json";
import CompanyBubble from "./TechBubble/TechBubble";

export default function SectorCard({ textContent }) {
  const { cores } = textContent;
  const { technologies } = textContent;

  const getStockBubbles = () => {
    return companyData.slice(0, 20).map((company, i) => {
      return <CompanyBubble {...company} key={i} />;
    });
  };
  const stockBubbles = getStockBubbles();

  const options = {
    size: 180,
    minSize: 20,
    gutter: 8,
    provideProps: true,
    numCols: 6,
    fringeWidth: 160,
    yRadius: 130,
    xRadius: 220,
    cornerRadius: 50,
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
      <BubbleUI className="bubbleUI" options={options}>
        {stockBubbles}
      </BubbleUI>
      </div>
    </div>
  );
}
