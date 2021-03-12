import React from 'react';
import style from 'styles/SectorsCards.module.css'

export default function SectorCard({ textContent }) {
  const { cores } = textContent;
  return (
    <div>
      <div>
        <h1>{textContent.title}</h1>
        <span>{textContent.detail}</span>
        <h2>{textContent.core}</h2>
        <div>
          {
            cores.map((value, key) => {
              return (
                <div key={key}>
                  <strong>{value.title}</strong>
                  <spam>{value.detail}</spam>
                </div>
              )
            })
          }
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}
