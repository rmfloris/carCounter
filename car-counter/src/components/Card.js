import React from 'react'

export default function Card(props) {
    const tallyMarks = require("tally-marks");

    return (
        <div className="carCard col-3 d-flex justify-content-center">
            <div className="carCard--container">
                <div className="row row-cols-auto">
                    <div className="col">
                        <img src={props.car.image} alt="test" className="carCard--image" />
                    </div>
                    <div className="col">
                        <div className="carCard--counter">
                            {tallyMarks(props.counter)}
                        </div>
                    </div>
                </div>
                <div className="row mx-auto">
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
            </div>
        </div>
    )
}