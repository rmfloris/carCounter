import React, {useState, useEffect} from 'react'
import Card from './components/Card'
import cars from './data/cars.js'

export default function App() {
    const [counter, setCounter] = useState(
        JSON.parse(localStorage.getItem("counters")) || []
    )

    useEffect(() => {
        localStorage.setItem("counters", JSON.stringify(counter))
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

    function resetCounters() {
        setCounter([])
    }

    const cards = cars.map((car, index) => {
        return (
            <Card 
                key={index}
                incrementCounter={() => incrementCounter(index)}
                decrementCounter={() => decrementCounter(index)}
                counter={counter[index]}
                car={car}
            />
        )
    })

    return (
        <div className="container-fluid">
            <div className="row mx-auto">
                {cards}
            </div>
            <div className="row">
                <button 
                    type="button" 
                    class="btn btn-primary"
                    onClick={resetCounters}
                >Opnieuw beginnen</button>
            </div>
        </div>
        
        
        )
}