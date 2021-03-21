import React from 'react';
import style from 'styles/SectorsCards.module.css'
import TechnologiesCloud from './TechnologiesCloud';

export default function SectorCard({ textContent }) {
  const { cores } = textContent;
  const { technologies } = textContent;
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
         "technologies"
      </div>
    </div>
  );
}
