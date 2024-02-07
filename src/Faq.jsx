import React from "react";
import "./faq.css"
import Data from "./Data.jsx"
import Question from "./Question";
import star from "../src/assets/icon-star.svg"



function Faq(props){

    const FaqQuestion = Data.map(data => {
        return (
        <Question
            key={data.id}
            question={data.question}
            answer={data.answer}
        />
        )
    })
    return(
    <div className="faq-box">
        <div className="container">
            <div className="faq-header">
                <img src={star}/>
                <h1>FAQs</h1>
            </div>
            {FaqQuestion}
        </div>
    </div>
    )
}

export default Faq