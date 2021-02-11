import React from 'react';
import style from '../../../styles/HighlightsSection.module.css';
import CounterText from './CounterText';

export default function HighlightsSection(props) {
  const { title } = props.textContent;
  const { subtitle } = props.textContent;
  const { statistics } = props.textContent;

  return (
    <div className={style.highlightsContainer}>
      <div className={style.countUpContainer}>
        <CounterText value={statistics[0].number} suffix={statistics[0].description} />
        <CounterText value={statistics[1].number} suffix={statistics[1].description} plus/>
        <CounterText value={statistics[2].number} suffix={statistics[2].description} />
        <CounterText value={statistics[3].number} suffix={statistics[3].description} />
        <CounterText value={statistics[4].number} suffix={statistics[4].description} />
      </div>
      <div className={style.textSection}>
        <h1>
          {title}
        </h1>
        <h3>
          {subtitle}
        </h3>
      </div>
    </div>
  );
}
