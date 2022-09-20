import React from 'react'

export default function Card(props) {
    const tallyMarks = require("tally-marks");

    return (
        <div className="carCard col-6">
            <div className="container">
                <div className="row row-cols-auto">
                    <div className="col">
                        <img src="https://via.placeholder.com/150" alt="test" />
                    </div>
                    <div className="col">
                        <div className="carCard--counter">
                            {tallyMarks(props.counter)}
                        </div>
                    </div>
                </div>
                <div className="row row-cols-auto">
                    <div className="carCard--buttons">
                        {props.carName}
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
            </div>
        </div>
    )
}