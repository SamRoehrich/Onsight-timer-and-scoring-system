import { useState, useEffect } from 'react'

const ScoreCard = ({ athlete }) => {

    const logAttempt = (score) => {
        athlete.scores[athlete.bouldersClimbed].attempts.push({
            attempt: athlete.scores[athlete.bouldersClimbed].attempts.length + 1,
            score
        })
    }
    return (
        <div className='score-card'>
            <div className='score-card-banner'>
                <p>{athlete.name}</p>
            </div>
            <span>Score per attempt</span>
            <div className='score-card-buttons'>
                <button className='score-card-button' onClick={() => logAttempt(5)}>5</button>
                <button className='score-card-button' onClick={() => logAttempt(10)}>10</button>
                <button className='score-card-button' onClick={() => logAttempt(15)}>15</button>
                <button className='score-card-button' onClick={() => logAttempt(25)}>25</button>
            </div>
            <div className='boulder-results'>
                <p>Score</p>
                <p>Attempts to highpoint</p>
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