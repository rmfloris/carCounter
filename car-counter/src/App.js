import React from 'react'

export default function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="carCard">
                    <div>
                        <img src="https://via.placeholder.com/150" alt="test"/>
                        <br />
                        <div className="carCard--buttons">
                            <button className="carCard--button">+1</button> / 
                            <button className="carCard--button minus"> -1</button>
                        </div>
                    </div>
                    <div className="carCard--counter">
                        15x
                    </div>
                </div>
            </div>
        </div>
        
        
        )
}