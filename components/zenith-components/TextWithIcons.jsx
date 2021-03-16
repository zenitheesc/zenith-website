import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from "../../styles/TextWithIcons.module.css";

export default class TextWithIcons extends Component {
    static propTypes = {
        content: PropTypes.object,
        index: PropTypes.number,
        icons: PropTypes.array,
    }

    render() {
        return <div className={style.row}>
            <img width="100px" src={`../../images/Zenith/icons/${this.props.icons[this.props.index]}`} />
            <div>
                <h3>{this.props.content.title}</h3>
                <p>{this.props.content.text}</p>
            </div>
        </div>
    }
}
