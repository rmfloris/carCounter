import React, {useState, useEffect} from 'react'
import Card from './components/Card'

export default function App() {
    const [counter, setCounter] = useState([])
    const cars = ["brandweer", "ziekenauto", "raceauto"]

    useEffect(() => {
        localStorage.setItem("counter", JSON.stringify(counter))
    }, [counter])

    function incrementCounter(index) {
        const copyCounter = [...counter]
        copyCounter[index] = copyCounter[index]+1 || 1
        setCounter(copyCounter)
    }

    function decrementCounter(index) {
        const copyCounter = [...counter]
        copyCounter[index] = copyCounter[index]-1 < 0 ? 0 : copyCounter[index]-1 || 0
        setCounter(copyCounter)
    }

    const cards = cars.map((car, index) => {
        return (
            <Card 
                key={index}
                incrementCounter={() => incrementCounter(index)}
                decrementCounter={() => decrementCounter(index)}
                counter={counter[index]}
                carName={car}
            />
        )
    })

    return (
        <div className="container">
            <div className="row">
                {cards}
            </div>
        </div>
        
        
        )
}