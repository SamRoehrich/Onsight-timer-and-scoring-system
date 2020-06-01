import { useState, useEffect } from 'react'

const Timer = () => {

    const [minutes, setMinutes] = useState(4)
    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)

    function toggle() {
        setIsActive(!isActive)
    }

    function reset() {
        setMinutes(4)
        setSeconds(0)
    }

    //timer control
    useEffect(() => {
        if(isActive) {
            if(seconds == 0) {
                if(minutes > 0) {
                    setSeconds(59)
                    setMinutes(minutes - 1)
                }
                if(minutes == 0) {
                    reset()
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