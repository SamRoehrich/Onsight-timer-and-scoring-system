import { useState, useEffect } from 'react'

import { useLocalState } from '../components/LocalState'

const TimerPage = () => {
    const [minutes, setMinutes] = useState(4)
    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [tick, setTick] = useState(0)
    const { roundInformation } = useLocalState()
    
    function toggle() {
        setIsActive(!isActive)
    }
    
    function reset() {
        setMinutes()
        setSeconds(0)
        setIsActive(false)
    }
    
    useEffect(() => {
        console.log(roundInformation)

        if(isActive) {
            if(seconds == 0) {
                if(minutes > 0) {
                    setSeconds(59)
                    setMinutes(minutes - 1)
                }
                if(minutes == 0) {
                    setSeconds(59)
                    setMinutes(3)
                }
            }
            if(seconds > 0) {
                setTimeout(() => setSeconds(seconds - 1), 1000)
                setTick(tick + 1)
            }
        }

    }, [isActive, seconds, minutes])

    return (
        <div className='container'>
            <div className='athlete-list'>
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
            </div>
            <div className='timer'>
                <h1>{minutes} : {seconds < 10 ? `0${seconds}` : seconds}</h1>
                <button onClick={toggle}>{isActive ? 'Stop' : 'Start'}</button>
            </div>
            <style jsx>
                {`
                    .athlete-list {
                        width: 20%;
                        height: 100vh;
                        border: 1px solid black;
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
                `}
            </style>
        </div>
    )
}

export default TimerPage