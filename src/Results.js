import React from "react";

function Result(props) {
    let resultItems = props.classification.map((item, idx)=> {
    return <li key={idx}>{item}</li>
    })
    return (
        <div>
            <h1>Result</h1>
            <ul>
                {resultItems}
            </ul>
        </div>
    )
} 

export default Result;