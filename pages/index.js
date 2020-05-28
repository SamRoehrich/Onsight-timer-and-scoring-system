import { useState, useEffect } from 'react'

import { useLocalState } from '../components/LocalState'
import AthleteInputs from '../components/AthleteInputs'
import Button from '../components/Button'
import {Rounds} from '../src/rounds'
import Link from 'next/link'

const HomePage = () => {
    const [data, setData] = useState(initialData)

    const blankAthlete = { name: '', ageCat: ''}
    const [athletes, setAthletes] = useState([{ ...blankAthlete }])
    const { setLocalStateRoundInformation } = useLocalState()

    function handleClick(round) {
        setData(round)
    }

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
        setLocalStateRoundInformation({ roundData: data, athletes })
    }
    
    // useEffect(() => {
    //     const athleteInputForm = buildAthleteList(initialData.numAthletes)
    // }, [initialData])

    return (
        <div className='container'>
            <div className='side-bar'>
                <div onClick={() => handleClick(Rounds.BoulderOnsight4)}>
                    <Button text='USAC Modified Redpoint'> </Button>
                </div>
                <Button text='3 Boulder Onsight'> </Button>
                <Button text='USAC Boulder Onsight' query='4BoulderOnsight'> </Button>
                <Button text='USAC Regionals' ></Button>
                <Button text='IFSC Boulder Qualification' ></Button>
                <Button text='USAC Sport Local Onsight' ></Button>
                <Button text='USAC Sport Regionals' ></Button>
                <Button text='USAC Sport Divisionals' ></Button>
                <Button text='Custom Timer' ></Button>
            </div>
            <div className='round-settings'>
                <h3>{data.title}</h3>
                <form className='round-details'>
                    <div className='item'>
                        <span>Number of boulders: </span>
                        <input placeholder={data.numBoulders} defaultValue={data.numBoulders}/>
                    </div>
                    <div className='item'>
                        <span>Active Time: </span>
                        <input placeholder={data.activeTime} defaultValue={data.activeTime}/>
                    </div>
                    <div className='item'>
                        <span>Rest Time: </span>
                        <input placeholder={data.restTime} defaultValue={data.restTime}/>
                    </div>
                    <button onClick={addAthlete}>Add Athlete</button>
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
                    <Link href='/timer'>
                        <a onClick={handleSubmit}>Timer</a>
                    </Link>
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
                width: 80%;
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