import { createContext, useState, useContext } from 'react'

const LocalStateContext = createContext()

const LocalStateProvider = LocalStateContext.Provider

function LocalState({children}) {
    const [roundInformation, setRoundInformation] = useState({})

    function setLocalStateRoundInformation(roundInfo) {
        setRoundInformation(roundInfo)
    }

    const defaultValues = {
        roundInformation,
        setLocalStateRoundInformation
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