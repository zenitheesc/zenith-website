import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

export default function CounterText(props) {
  const { value } = props;
  const { suffix } = props;
  const { plus } = props;
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={props.className}>
        <span ref={triggerRef} aria-hidden="true" />
        {isVisible && (
          <CountUp
            prefix={plus ? '+' : ''}
            end={value}
          />
        )}
        <h2>{suffix}</h2>
        <br />
      </div>
    </>
  );
}
