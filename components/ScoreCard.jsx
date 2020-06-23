import { useState, useEffect } from 'react'

const ScoreCard = ({ athlete }) => {
    const [attempts, setAttempts] = useState(0)
    const [topped, setTopped] = useState(false)
    const logAttempt = (score) => {
        athlete.scores[athlete.bouldersClimbed].attempts.push({
            attempt: athlete.scores[athlete.bouldersClimbed].attempts.length + 1,
            score
        })
        setAttempts(() => attempts + 1)
        if(score == 25) {
            let buttons = document.getElementsByClassName(`score-card-button ${athlete.name}`)
            for(let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true
            }
            setTopped(true)
        }
    }
    useEffect(() => {
        setAttempts(0)
        if(topped) {
            let buttons = document.getElementsByClassName(`score-card-button ${athlete.name}`)
            for(let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = false
            }
            setTopped(false)
        }
    }, [athlete])
    return (
        <div className='score-card'>
            <div className='score-card-banner'>
                <p>{athlete.name}</p>
            </div>
            <p>Boulder: {athlete.bouldersClimbed + 1}</p>
            <span>Score per attempt</span>
            <div className='score-card-buttons'>
                <button className={`score-card-button ${athlete.name}`} onClick={() => logAttempt(5)}>5</button>
                <button className={`score-card-button ${athlete.name}`} onClick={() => logAttempt(10)}>10</button>
                <button className={`score-card-button ${athlete.name}`} onClick={() => logAttempt(15)}>15</button>
                <button className={`score-card-button ${athlete.name}`} onClick={() => logAttempt(25)}>25</button>
            </div>
            <div className='boulder-results'>
                <p>Attempts: {attempts}</p>
            </div>
            <style jsx>{`
                .score-card {
                        padding: 10px 10px;
                        border: 1px solid black;
                        width: 20vw;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                    }
                
            `}</style>
        </div>
    )
}

export default ScoreCard