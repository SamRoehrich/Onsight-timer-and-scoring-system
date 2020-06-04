const ScoreCard = ({ athlete }) => {

    return (
        <div className='score-card'>
            <div className='score-card-banner'>
                <p>{athlete.name}</p>
            </div>
            <span>Score per attempt</span>
            <div className='score-card-buttons'>
                <button className='score-card-button'>5</button>
                <button className='score-card-button'>10</button>
                <button className='score-card-button'>15</button>
                <button className='score-card-button'>25</button>
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
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                    }
            `}</style>
        </div>
    )
}

export default ScoreCard