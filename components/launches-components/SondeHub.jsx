import React from 'react';
import style from 'styles/SondeHub.module.css';
export default function SondeHub(props) {

let url_sondehub = "https://sondehub.org/";

  return (
    <div className={style.container}>
        <div className={style.menu}>
          <button className={style.button} onClick={() => url_sondehub = "https://sondehub.org/#!mt=Mapnik&f=22030071"}>ZenBee</button>
          <button className={style.button} onClick={() => url_sondehub = "https://sondehub.org/#!mt=Mapnik&f=U2150631"}>Garátea-V</button>
          <button className={style.button} onClick={() => url_sondehub = "https://sondehub.org/#!mt=Mapnik&f=22030071"}>Garátea-IV</button>
          <button className={style.button} onClick={() => url_sondehub = "https://sondehub.org/#!mt=Mapnik&f=22030071"}>Garátea-III</button>
          <button className={style.button} onClick={() => url_sondehub = "https://sondehub.org/#!mt=Mapnik&f=22030071"}>Garátea-II</button>
          <button className={style.button} onClick={() => url_sondehub = "https://sondehub.org/#!mt=Mapnik&f=22030071"}>Garátea-I</button>
        </div>
      <iframe id="sondeHub" className={style.iframe} src={url_sondehub} title="SondeHub Tracker"></iframe>
    </div>
  );
}
