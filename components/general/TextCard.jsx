import React from "react";
import PropTypes from "prop-types";

const defaultText = (
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio
        dignissimos quas esse, id aliquid dolore possimus. Ex, saepe corporis!
        Eveniet magni veniam, laudantium aut quidem saepe! Vel, dolor
        perferendis!
    </p>
);
const defaultImg = <img src="http://placekitten.com/200/300" />;
function TextCard({
    title = "Title",
    text = defaultText,
    img = defaultImg,
    reverse = false,
}) {
    return (
        //TODO: Achar um jeito melhor de customizar a class css
        <div className={reverse ? "text-card text-card-reverse" : "text-card"}>
            <div className="text-card-text">
                <h2>{title}</h2>
                {text}
            </div>
            <div className="text-card-img">{img}</div>
        </div>
    );
}
TextCard.propTypes = {
    title: PropTypes.string,
    text: PropTypes.node,
    img: PropTypes.node,
    reverse: PropTypes.bool,
};
export default TextCard;
