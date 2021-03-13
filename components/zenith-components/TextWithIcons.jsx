import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from "../../styles/TextWithIcons.module.css";

export default class TextWithIcons extends Component {
    static propTypes = {
        content: PropTypes.object,
        index: PropTypes.number
    }

    render() {
        return <div className={style.row}>
            <img  src={`https://placedog.net/100/100/${this.props.index}`} />
            <div>
                <h3>{this.props.content.title}</h3>
                <p>{this.props.content.text}</p>
            </div>
        </div>
    }
}
