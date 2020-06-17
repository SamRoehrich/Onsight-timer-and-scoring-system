import { useState, useEffect, useRef } from 'react'
import { useLocalState } from './LocalState'
import RoundControl from './Transition'

const Timer = () => {

    const [minutes, setMinutes] = useState(1)
    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const roundStarted = useRef()
    const inIso = useRef()
    const onDeck = useRef()
    const climbing = useRef()
    const finished = useRef()
    const [cycles, setCycles] = useState(0)
    const { athletes,
            // inIso, setInIso,
            // onDeck, setOnDeck,
            // climbing, setClimbing,
            // finished, setFinished,   
    } = useLocalState()

    //updates climbers after they are done climbing 1 boulder
    function updateClimbers(currentClimbing) {
        const updatedClimbers = []
        let finishedIndex = 0;
        for(let i = 0; i < currentClimbing.length; i++) {
            if(currentClimbing[i].getLastBoulder() == true) {
                setFinished(finished => [...finished, currentClimbing[i]])
                finsihedIndex = i
            }  
            //update the boulders climbed value
            currentClimbing[i].cycle()
            updatedClimbers.push(currentClimbing[i])
        }
        //remove finsihed climber from array
        updatedClimbers.splice(finishedIndex, 1)
        return updatedClimbers
    }
    
    function cycleClimbers (nextClimber) {
        //store current arrays
        const currentOnDeck = onDeck;
        const currentClimbing = climbing;
        //move on deck to climbing
        currentOnDeck.map((climber) => {
            console.log(climber.name)
            if(climber.getStartedClimbing == false) {
                climber.setStartedClimbing()
            }
        })
        setClimbing(currentOnDeck => [...currentOnDeck])
        //move current climbers to ondeck
        if(nextClimber) {
            setOnDeck([nextClimber])
        }
        // const updatedClimbers = updateClimbers(currentClimbing)
        // setOnDeck(onDeck => [...updatedClimbers, onDeck])
    }

    function getNextClimber() {
        let currentIso = inIso
        const nextClimber = currentIso.shift()
        setInIso(currentIso)
        return nextClimber
    }
    
    
    function startRound() {
        roundStarted.current = new Boolean(true);
        setInIso([...athletes])
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
        setMinutes(1)
        setSeconds(0)
        setCycles(cycles => cycles + 1)
    }
    
    //timer control
    useEffect(() => {
        if(isActive) {
            if(seconds == 0) {
                if(minutes == 0) {
                    timerReset()
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
    
    // useEffect(() => {
    //     let nextClimber = getNextClimber()
    //     cycleClimbers(nextClimber)
    // }, [cycles])

    return (
        <div className='timer'>
        <h1>{minutes} : {seconds < 10 ? `0${seconds}` : seconds}</h1>
        <button onClick={toggle}>{isActive ? 'Stop timer' : 'Start timer'}</button>
        <RoundControl />
    </div>
    )
}

export default Timer