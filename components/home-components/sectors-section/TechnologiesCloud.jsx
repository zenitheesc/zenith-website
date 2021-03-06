import React from 'react';
import TagCloud from './word-cloud/index';
import styles from 'styles/TagCanvas.module.css'
// https://www.npmjs.com/package/react3dtagcloud

export default function TechnologiesCloud(props) {
  const undefinedWarning = ['undefined', 'undefined', 'undefined']
  const { stringList, speed, radius } = props;

  return (
    <>
      <div className={styles.cloudContainer}>
        <TagCloud tagName={stringList || undefinedWarning} speed={speed || 2.5} radius={radius || 100} />
      </div>
    </>
  );
}
