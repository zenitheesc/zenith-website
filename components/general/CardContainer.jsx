import React, { Component } from "react";
import Card from "./Card";

import style from "../../styles/CardContainer.module.css";

export default class CardContainer extends Component {
    render() {
        return (
            <div className={style.card__container}>{this.props.children}</div>
        );
    }
}
