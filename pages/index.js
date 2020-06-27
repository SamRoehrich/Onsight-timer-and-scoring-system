import { useState } from 'react'

import { useLocalState } from '../components/LocalState'
import AthleteInputs from '../components/AthleteInputs'
import Router from 'next/router'
import Athlete from '../src/Athlete'

const HomePage = () => {
    
    const blankAthlete = { name: '', ageCat: '', gender: '' }
    const [athletes, setAthletes] = useState([{ ...blankAthlete }])
    const { setAthletes: localStateSetAthletes } = useLocalState()

    const addAthlete = (e) => {
        e.preventDefault()
        setAthletes([...athletes, { ...blankAthlete }])
    }

    const handleAthleteInputChange = e => {
        const updatedAthletes = [...athletes]
        updatedAthletes[e.target.dataset.idx][e.target.className] = e.target.value
        setAthletes(updatedAthletes)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(athletes.length < 2) {
            alert('You must have at least one athlete')
            return null
        } else {
            var constructedAthletes = []
            for (let i = 0; i < athletes.length; i++) {
                constructedAthletes.push(new Athlete(athletes[i].name, athletes[i].ageCat, athletes[i].gender.toUpperCase()))
            }
            localStateSetAthletes(constructedAthletes)
            Router.push('/timer')
        }
    }

    return (
        <div className='container'>
            <div className='round-settings'>
            <h1>USA Climbing Onsight Bouldering Timer</h1>
                <form className='round-details'>
                    <div className='button-container'>
                        <button onClick={addAthlete}>Add Athlete</button>
                        <button onClick={handleSubmit}>Start round</button>
                    </div>
                    {
                         athletes.map((val, idx) => (
                            <AthleteInputs
                                key={`athlete-${idx}`}
                                idx={idx}
                                athletes={athletes}
                                handleAthleteInputChange={handleAthleteInputChange}
                            />
                         ))
                    }
                </form> 
            </div>
        <style global jsx>{`
            body {
                background-color: black;
                margin: 0 auto;
            }
        `}</style>
        <style jsx>{`
            .container {
                display: flex;
                flex-wrap: wrap;
            }
            .button-container {
                display: flex;
                justify-content: center;
            }
            .round-details {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .side-bar {
                width: 20%;
                height: 100vh;
                background-color: white;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .round-settings {
                display: flex;
                flex-direction: column;
                background-color: white;
                width: 100vw;
                height: 100vh;
                align-items: center;
            }
            .athlete-form {
                display: flex;
                flex-direction: column;
            }
        `}</style>
        </div>
    )
}

const initialData = {
    title: 'USAC Boulder Onsight',
    numBoulders: 4,
    activeTime: 4,
    restTime: 4,
    numAthletes: 10
}



export default HomePage