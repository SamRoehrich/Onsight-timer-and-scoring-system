import { useState, useEffect } from 'react'

import { useLocalState } from '../components/LocalState'
import Scoring from '../components/Scoring'
import Timer from '../components/Timer'

const TimerPage = () => {

    const { roundInformation } = useLocalState()
    const [activeClimbers, setActiveClimbers] = useState([])
    const [onDeck, setOnDeck] = useState([])
    const [nextOnDeck, setNextOnDeck] = useState(0)

    function startRound() {
        setOnDeck(roundInformation.athletes[0])
        setNextOnDeck(nextOnDeck + 1)
    }

    return (
        <div className='container'>
            <div className='timer-and-scoring'>
                <Timer />
                <div className='scoring'>
                    <Scoring onDeck={onDeck} activeClimbers={activeClimbers} />
                </div>
            </div>
            <style jsx>
                {`
                    .athlete-list {
                        width: 20%;
                        height: 100vh;
                        border: 1px solid black;
                    }
                    .timer-and-scoring {
                        display: flex;
                        flex-direction: column;
                    }
                    .timer {
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                    }
                    .container {
                        display: flex;
                    }
                    .scoring {
                        display: flex;
                        justify-content: space-around;
                    }
                `}
            </style>
        </div>
    )
}

export default TimerPage



            {/* <div className='athlete-list'>
                <div className='athlete-list-item'>
                    <p>Name</p>
                    <p>Age</p>
                </div>
                <div className='athlete-list-item'>
                    <p>Name</p>
                    <p>Age</p>
                </div>
                <div className='athlete-list-item'>
                    <p>Name</p>
                    <p>Age</p>
                </div>
                <div className='athlete-list-item'>
                    <p>Name</p>
                    <p>Age</p>
                </div>
                <div className='athlete-list-item'>
                    <p>Name</p>
                    <p>Age</p>
                </div>
                <div className='athlete-list-item'>
                    <p>Name</p>
                    <p>Age</p>
                </div>
            </div> */}