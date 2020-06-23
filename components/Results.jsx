import { useState } from 'react'
import { useLocalState } from './LocalState'

const Results = () => {

    const { reducerState, dispatch } = useLocalState()
    const [showScore, setShowScore] = useState(false)

    function calcResults () {
        dispatch({ type: 'calculate-round-scores'})
        setShowScore(true)
    }

    return (
        <div>
            <button onClick={() => calcResults()}>Calculate Results</button>
            <h1>Males</h1>
            {
                showScore &&
                reducerState.males.map(climber => {
                    return (
                        <div className='final-score'>
                        <p>{climber.name}</p>
                        <span>{climber.ageCat}</span>
                        <p>{climber.finalScore}</p>
                        </div>
                    )
                })
            }
            <h1>Females</h1>
            {
                showScore &&
                reducerState.females.map(climber => 
                {
                    return (
                        <div className='final-score'>
                        <p>{climber.name}</p>
                        <span>{climber.ageCat}</span>
                        <p>{climber.finalScore}</p>
                        </div>
                    )
                })
            }
            <style jsx>{`
                .final-score {
                    display: flex;
                    height: 50px;
                    width: 70px;
                }
            `}</style>
        </div>
    )
}

export default Results