import { createContext, useState, useContext, useReducer } from 'react'

const LocalStateContext = createContext()

const LocalStateProvider = LocalStateContext.Provider

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
            let athletes = action.payload
            athletes.forEach(athlete => athlete.inIso = true)
            return { ...state, athletes, inIso: athletes};
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
                if(climber.finished) {
                    climber.climbing = false
                    currentFinished = [...currentFinished, climber]
                } else {
                    modifiedClimbing.push(climber)
                }
            })
            currentOnDeck.forEach(climber => {
                climber.climbing = true;
                climber.onDeck = false;
            })
            //get next climber
            let next = currentIso.shift()
            if(next !== undefined) {
                next.setStartedClimbing()
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
            return {
                ...state,
                athletes: action.payload,
                inIso: action.payload
            }
        default: 
            return state;
    }
}

function LocalState({children}) {
    const [roundInformation, setRoundInformation] = useState({})
    const [athletes, setAthletes] = useState([])
    const [state, dispatch] = useReducer(reducer, initialState)

    function setLocalStateRoundInformation(roundInfo) {
        setRoundInformation(roundInfo)
    }

    const defaultValues = {
        roundInformation, setLocalStateRoundInformation,
        athletes, setAthletes,
        reducerState: state,
        dispatch
    }

    return <LocalStateProvider value={defaultValues}>
                {children}
            </LocalStateProvider>
}

function useLocalState() {
    const all = useContext(LocalStateContext)
    return all
}

export { LocalState, LocalStateContext, useLocalState }