import React, { Component } from 'react'
import Card from './Card'

import style from "../../styles/CardContainer.module.css";

export default class CardContainer extends Component {
    render() {
        return (
            <div className={style.card__container}>


<Card />

 <Card left={<img src="http://placekitten.com/1280/720" />}/>

<Card
    right={
        <>
            <h2>Outro Titulo</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. A reiciendis ipsam illo earum rerum provident
                beatae. Ad, tempora! Soluta doloremque repellat
                numquam eveniet quo debitis nam quod molestiae quos
                vitae.
            </p>
        </>
    }
/>
    </div>
        )
    }
}
