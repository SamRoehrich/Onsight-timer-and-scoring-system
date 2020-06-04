import { useState, useEffect } from 'react'
import { useLocalState } from './LocalState'

const Timer = () => {

    const [minutes, setMinutes] = useState(1)
    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const { athletes,
            inIso, setInIso,
            onDeck, setOnDeck,
            climbing, setClimbing,
            setFinished    
    } = useLocalState()

    function startRound() {
        setInIso([...athletes])
        setOnDeck([athletes[0]])
    }

    function toggle() {
        if(!isActive) {
            startRound()
        }
        setIsActive(!isActive)
    }

    function reset() {
        setClimbing([...onDeck])
        setMinutes(1)
        setSeconds(0)
    }

    //timer control
    useEffect(() => {
        if(isActive) {
            if(seconds == 0) {
                if(minutes == 0) {
                    reset()
                }
                if(minutes > 0) {
                    setSeconds(10)
                    setMinutes(minutes - 1)
                }
            }
            if(seconds > 0) {
                setTimeout(() => setSeconds(seconds - 1), 1000)
            }
        }
    }, [isActive, seconds, minutes])

    return (
    <div className='timer'>
        <h1>{minutes} : {seconds < 10 ? `0${seconds}` : seconds}</h1>
        <button onClick={toggle}>{isActive ? 'Stop' : 'Start'}</button>
    </div>
    )
}

export default Timer