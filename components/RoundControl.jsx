import styled from 'styled-components'
import { useLocalState } from './LocalState'

const Container = styled.div`
    height: 60px;
    width: 75vw;
    display: flex;
    justify-content: center;
`

const RoundControl = () => {
    const { athletes, dispatch } = useLocalState()
    
    return (
        <Container>
            <button onClick={() => dispatch({ type: 'reset', payload: athletes})}>Reset Round</button>
            <button onClick={() => dispatch({ type: 'start-round', payload: athletes})}>Start Round</button>
            <button onClick={() => dispatch({ type: 'remove-climber-from-iso'})}>Get first climber</button>
            <button onClick={() => dispatch({ type: 'transition-climbers'})}>Cycle Climbers</button>
        </Container>
    )
}

export default RoundControl