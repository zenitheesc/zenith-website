import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { countUp } from '../../../styles/HighlightsSection.module.css';

export default function CounterText(props) {
  const { value } = props;
  const { suffix } = props;
  const { plus } = props;
  const [isVisible, setIsVisible] = useState(false);

  const startCounting = (isInViewPort) => {
    if (isInViewPort) {
      setIsVisible(true);
    }
  };

  return (
    <>
      <div className={countUp}>
        <CountUp prefix={plus ? '+' : ''} end={value} start={isVisible ? null : 0}>
          {({ countUpRef }) => (
            <VisibilitySensor
              active={!isVisible}
              onChange={startCounting}
              delayedCall
            >
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <h2>
          {suffix}
        </h2>
        <br />
      </div>

    </>
  );
}
