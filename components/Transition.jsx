import { useReducer, useCallback } from 'react'
import styled from 'styled-components'
import { useLocalState } from './LocalState'
import ScoreCard from './ScoreCard'

const Container = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
`

const initialState = {
    athletes: [],
    inIso: [],
    onDeck: [],
    climbing: [],
    finished: [],
}

function reducer(state, action) {
    switch(action.type) {
        case "start-round":
            return { ...state, athletes: action.payload, inIso: action.payload};
        case 'remove-climber-from-iso':
            let currentIso = []
            state.inIso.forEach(climber => currentIso.push(climber))
            let nextClimber = currentIso.shift()
            console.log(nextClimber)
            return {
                ...state,
                inIso: currentIso,
                onDeck: [...state.onDeck, nextClimber]
            };
        case 'transition-climbers':
            let currentClimbing = []
            let modifiedClimbing = []
            let currentOnDeck = []
            let currentFinished = state.finished
            currentIso = []
            //fill temp arrays
            state.climbing.forEach(climber => currentClimbing.push(climber))
            state.onDeck.forEach(climber => currentOnDeck.push(climber))
            state.inIso.forEach(climber => currentIso.push(climber))
            //modify current climbers
            currentClimbing.map(climber => climber.cycle())
            currentClimbing.forEach(climber => {
                if(climber.bouldersClimbed == 4) {
                    currentFinished = [...currentFinished, climber]
                } else {
                    modifiedClimbing.push(climber)
                }
            })
            //get next climber
            let next = currentIso.shift()
            if(next !== undefined) {
                modifiedClimbing = [...modifiedClimbing, next]
            }
            return {
                ...state,
                climbing: currentOnDeck,
                onDeck: modifiedClimbing,
                inIso: currentIso,
                finished: currentFinished
            };
        case 'reset':
            state = initialState
            let modifiedAthletes = action.payload.forEach(athlete => athlete.bouldersClimbed == 0)
            return {
                ...state,
                athletes: action.payload,
                inIso: action.payload
            }
        default: 
            return state;
    }
}

const RoundControl = () => {
    const { athletes } = useLocalState()
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <>
        <Container>
            <button onClick={() => dispatch({ type: 'reset', payload: athletes})}>Reset Round</button>
            <button onClick={() => dispatch({ type: 'start-round', payload: athletes})}>Start Round</button>
            <button onClick={() => dispatch({ type: 'remove-climber-from-iso'})}>Get first climber</button>
            <button onClick={() => dispatch({ type: 'transition-climbers'})}>Cycle Climbers</button>
        </Container>
        <Container>
        {
            state.climbing.length !== 0 && 
            state.climbing.map(climber => (
                <ScoreCard athlete={climber} />
            ))
        }
        </Container>
        </>
    )
}

export default RoundControl