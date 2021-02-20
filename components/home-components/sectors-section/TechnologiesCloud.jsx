import React from 'react';
import TagCloud from './tagCloud/index';
// https://www.npmjs.com/package/react3dtagcloud

export default function TechnologiesCloud(props) {
  const undefinedWarning = ['undefined', 'undefined', 'undefined']
  const { stringList, speed, radius, url } = props;

  return (
    <>
      <div style={{ width: '1000px', height: '1000px', }}>
        <TagCloud tagName={stringList || undefinedWarning} speed={speed || 2.5} radius={radius || 100} url={url || '#'} />
      </div>
    </>
  );
}
