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

const RoundControl = () => {
    const { athletes, dispatch, reducerState } = useLocalState()
    
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
            reducerState.climbing.length !== 0 && 
            reducerState.climbing.map(climber => (
                <ScoreCard athlete={climber} />
            ))
        }
        </Container>
        </>
    )
}

export default RoundControl