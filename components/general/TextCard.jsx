import React from "react";
import PropTypes from "prop-types";

import style from "../../styles/TextCard.module.css";

const defaultText = (
    <div>
        <h2>Titulo</h2>
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
function TextCard({
    text = defaultText,
    img = defaultImg,
    reverse = false,
    bothText = false,
}) {
    return (
        <div className={!reverse ? style.textCard : style.textCardReverse}>
            <div className={style.textCardText}>{text}</div>
            <div className={!bothText ? style.textCardImg : style.textCardText}>
                {img}
            </div>
        </div>
    );
}
TextCard.propTypes = {
    text: PropTypes.node,
    img: PropTypes.node,
    reverse: PropTypes.bool,
    bothText: PropTypes.bool,
};
export default TextCard;
