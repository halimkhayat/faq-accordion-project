import React from "react";
import './faq.css'
import { useState } from "react";
import minus from "../src/assets/icon-minus.svg"
import plus from "../src/assets/icon-plus.svg"


export default function Question(props) {
    const [isShown, setIsShown] = React.useState(false)

    function clickShown() {
        setIsShown(isShown => !isShown)
    }

    return (
        <div className="question" >
            <div className="box">
                <div className="the-question">
                    {props.question && <p>{props.question}</p>}
                    <a onClick={clickShown}>
                        {isShown ? <img src={minus}/> : <img src={plus}/>}
                    </a>
                </div>
                {isShown && <div className="details">{props.answer} </div>}
            </div>
        </div>
    )
}