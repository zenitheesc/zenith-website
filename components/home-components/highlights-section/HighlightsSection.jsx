import React from 'react';
import CounterText from '../../general/CounterText';
import style from 'styles/HighlightsSection.module.css';
import { countUp } from 'styles/HighlightsSection.module.css';

export default function HighlightsSection(props) {
  const { title } = props.textContent;
  const { subtitle } = props.textContent;
  const { statistics } = props.textContent;

  return (
    <section className={`-section ${style.section}`}>
      <div className={`-standardContainer ${style.highlightsContainer}`}>
        <div className={style.countUpContainer}>
          <CounterText className={countUp} value={statistics[0].number} suffix={statistics[0].description} />
          <CounterText className={countUp} value={statistics[1].number} suffix={statistics[1].description} plus />
          <CounterText className={countUp} value={statistics[2].number} suffix={statistics[2].description} />
          <CounterText className={countUp} value={statistics[3].number} suffix={statistics[3].description} />
          <CounterText className={countUp} value={statistics[4].number} suffix={statistics[4].description} />
          <CounterText className={countUp} value={statistics[5].number} suffix={statistics[5].description} />
        </div>
        <div className={style.textSection}>
          <h1 className="-homepage-section-title">
            {title}
          </h1>
          <h3 className="-homepage-section-subtitle">
            {subtitle}
          </h3>
        </div>
      </div>
    </section>
  );
}
