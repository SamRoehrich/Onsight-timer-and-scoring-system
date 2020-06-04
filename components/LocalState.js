import { createContext, useState, useContext } from 'react'

const LocalStateContext = createContext()

const LocalStateProvider = LocalStateContext.Provider

function LocalState({children}) {
    const [roundInformation, setRoundInformation] = useState({ })
    const [athletes, setAthletes] = useState([])
    const [inIso, setInIso] = useState([])
    const [onDeck, setOnDeck] = useState([])
    const [climbing, setClimbing] = useState([])
    const [finished, setFinished] = useState([])

    function setLocalStateRoundInformation(roundInfo) {
        setRoundInformation(roundInfo)
    }

    const defaultValues = {
        roundInformation, setLocalStateRoundInformation,
        athletes, setAthletes,
        inIso, setInIso,
        onDeck, setOnDeck,
        climbing, setClimbing,
        finished, setFinished
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