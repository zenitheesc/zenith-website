import React from 'react'

import styles from 'styles/projects/TimeLine.module.css'

export const Timeline = ({ children }) =>
  <div className={styles.container}>
    <ul className={styles.timeline}>
      {children}
    </ul>
  </div>

export const Event = ({ title, subtitle, interval, children }) =>
  <li className={styles.event}>
    <label className={styles.icon}/>
    <div className={styles.body}>
      <p className={styles.date}>{interval}</p>
      <div >
        {children}
      </div>
    </div>
  </li>