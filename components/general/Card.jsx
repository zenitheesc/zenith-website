import React from "react";
import PropTypes from "prop-types";
import style from "../../styles/TextCard.module.css";

function Card({ left, right, lean = "right" }) {
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
