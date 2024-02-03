import React from "react";
import './faq.css'
import { useState } from "react";


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
                        {isShown ? <img src="../src/assets/icon-minus.svg"/> : <img src="../src/assets/icon-plus.svg"/>}
                    </a>
                </div>
                {isShown && <div className="details">{props.answer} </div>}
            </div>
        </div>
    )
}