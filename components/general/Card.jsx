import React from "react";
import PropTypes from "prop-types";
import style from "styles/TextCard.module.css";

function Card({ left, right, lean = "right", text }) {
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
            <div className={`${style.card} ${style.card__left} ${l} ${text === 'left' ? style.text : ''}`}>{left}</div>
            <div className={`${style.card} ${style.card__right} ${r} ${text === 'right' ? style.text : ''}`}>{right}</div>
        </div>
    );
}
Card.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node,
    lean: PropTypes.string,
};

export default Card;
