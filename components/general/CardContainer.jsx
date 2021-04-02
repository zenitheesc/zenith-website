import React from "react";
import style from "styles/CardContainer.module.css";

export default function CardContainer(props) {
    return (
        <div>
            <section className={`-section ${style.card__background}`} >
                <div className={`${style.card__container} -standardContainer`}>{props.children}</div>
            </section>
        </div>
    );
}
