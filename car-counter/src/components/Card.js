import React from 'react'

export default function Card(props) {
    const tallyMarks = require("tally-marks");

    return (
        <div className="carCard">
            <div>
                <img src="https://via.placeholder.com/150" alt="test"/>
                <br />
                <div className="carCard--buttons">
                    <button 
                        className="carCard--button"
                        onClick={props.incrementCounter}
                    >+1</button>
                    <button 
                        className="carCard--button minus"
                        onClick={props.decrementCounter}
                    > -1</button>
                </div>
            </div>
            <div className="carCard--counter">
                {tallyMarks(props.counter)}
            </div>
        </div>
    )
}