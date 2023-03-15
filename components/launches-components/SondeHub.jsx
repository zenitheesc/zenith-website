import React from 'react';
import style from 'styles/SondeHub.module.css';
import LaunchMenu from './LaunchMenu';
export default function SondeHub(props) {

let url_sondehub = "https://sondehub.org/";

  return (
    <div className={style.container}>
        <div className={style.menu}>
          <LaunchMenu></LaunchMenu>
        </div>
      <iframe id="sondeHub" className={style.iframe} src={url_sondehub} title="SondeHub Tracker"></iframe>
    </div>
  );
}
