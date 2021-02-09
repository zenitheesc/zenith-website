import React from 'react';
import CountUp from 'react-countup';
import { countUp } from '../../../styles/HighlightsSection.module.css';

export default function CounterText(props) {
  return (
    <>
      <div className={countUp}>
        <CountUp prefix={props.plus ? '+' : ''} end={props.value} />
        <h2>
          {props.suffix}
        </h2>
        <br />
      </div>

    </>
  );
}
