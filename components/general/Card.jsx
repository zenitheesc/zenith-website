import React from "react";
import PropTypes from "prop-types";

import style from "../../styles/TextCard.module.css";

const defaultText = (
    <div>
        <h1>Titulo</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio
            dignissimos quas esse, id aliquid dolore possimus. Ex, saepe
            corporis! Eveniet magni veniam, laudantium aut quidem saepe! Vel,
            dolor
            <b> perferendis</b>!
        </p>
    </div>
);
const defaultImg = <img src="http://placekitten.com/960/600" />;
function Card({ left = defaultText, right = defaultImg, lean = "right" }) {
    let l = style.bigger;
    let r = style.smaller;
    if (lean === "left") {
        l = style.smaller;
        r = style.bigger;
    } else if (lean === "none") {
        l = style.bigger;
        r = l;
    } else {
    }
    return (
        <div className={style.row}>
            <div className={`${style.card} ${style.card__left} ${l}`}>{left}</div>
            <div className={`${style.card} ${style.card__right} ${r}`}>{right}</div>
        </div>
    );
}
Card.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node,
    lean: PropTypes.string,
};

export default Card;
