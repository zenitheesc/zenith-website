import React from 'react';
import style from '../../../styles/HighlightsSection.module.css';
import CounterText from './CounterText';

export default function HighlightsSection() {
  return (
    <div className={style.highlightsContainer}>
      <div className={style.countUpContainer}>
        <CounterText value={25} suffix="PROJETOS" />
        <CounterText value={400} suffix="MEMBROS DESDE A FUNDAÇÃO" plus />
        <CounterText value={2} suffix="CAMPUS PARTY" />
        <CounterText value={3} suffix="CUBEDESIGNs" />
        <CounterText value={7} suffix="REPORTAGENS NA MÍDIA" />
      </div>
      <div className={style.textSection}>
        <h1>
          Eficiência descrita em números
        </h1>
        <h3>
          Desde 2014
        </h3>
      </div>
    </div>
  );
}
