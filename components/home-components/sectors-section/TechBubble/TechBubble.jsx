import React from "react";
import style from 'styles/TechBubble.module.css'


export default function TechBubble(props) {

  const {backGroundColor, alt} = props

  return (
    <div
      style={{
        backgroundColor: backGroundColor,
      }}
      className={style.techBubble}
    >
      {true ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            transition: "opacity 0.1s ease",
            opacity: props.bubblesize > 50 ? 1 : 0,
            pointerEvents: "none",
          }}
        >
          {<img
            src={`/images/technologies/${props.symbol}.svg`}
            alt={alt}
            style={{
              maxHeight: "65%",
              maxWidth: "65%",
              height: "auto"
            }}
          />}
        </div>
      ) : null}
    </div>
  );
}
