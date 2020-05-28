import { useState } from 'react';

const CreateCustomRound = () => {

    const [roundType, setRoundType] = useState('')
    function handleChange() {
        setRoundType(event.target.value)
    }

    return (
        <div>
            <span>Type of round</span>
            <select onChange={handleChange}>
                <option value='boulder'>Boulder Onsight</option>
                <option value='sport'>Sport Onsight</option>
            </select>
            { roundType === 'boulder' ? <BoulderSetup /> : <SportSetup />}
        </div>
    )
}

const BoulderSetup = () => {
    return (
        <form>
            <input type='text' placeholder='Number of boulders' />
            <input type='text' placeholder='Time per boulder' defaultValue='4:00' />
            <input type='text' placeholder='Transition time' defaultValue='0:00' />
            <button type='submit'>Create Round</button>
        </form>
    )
}

const SportSetup = () => {
    return (
        <form>
            <input type='text' placeholder='Number of routes' />
            <input type='text' placeholder='Time per route' defaultValue='6:00' />
            <input type='text' placeholder='Transition time' defaultValue='0:45' />
            <button type='submit'>Create Round</button>
        </form>
    )
}
export default CreateCustomRound