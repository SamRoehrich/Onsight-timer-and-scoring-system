import { useState, useEffect, useRef } from 'react'
import { useLocalState } from './LocalState'

const Timer = () => {
    const [minutes, setMinutes] = useState(4)
    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const roundStarted = useRef()
    const { dispatch, athletes, reducerState } = useLocalState()

    function startRound() {
        roundStarted.current = new Boolean(true);
        dispatch({ type: 'start-round', payload: athletes})
    }
    
    function toggle() {
        if(!isActive) {
            if(roundStarted.current == undefined) {
                startRound()
            }
        }
        setIsActive(!isActive)
    }
    
    function timerReset() {
        if(athletes.length == reducerState.finished.length) return null
        setMinutes(4)
        setSeconds(0)
        dispatch({ type: 'transition-climbers' })
    }
    
    //timer control
    useEffect(() => {
        if(isActive) {
            if(seconds == 0) {
                if(minutes == 0) {
                    timerReset()
                }
                if(minutes > 0) {
                    setSeconds(59)
                    setMinutes(minutes - 1)
                }
            }
            if(seconds > 0) {
                setTimeout(() => setSeconds(seconds - 1), 1000)
            }
        }
    }, [isActive, seconds, minutes])

    return (
    <>
    <div className='timer'>
        <h1>{minutes} : {seconds < 10 ? `0${seconds}` : seconds}</h1>
        <button onClick={toggle}>{isActive ? 'Stop timer' : 'Start timer'}</button>
    </div>
    <style jsx>{`
        .timer{
            display: flex;
            justify-content: center;
            margin: 0 auto;
            flex-direction: column;
            align-items: center;
        }
    `}</style>
    </>
    )
}

export default Timer