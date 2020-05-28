import { useState } from 'react'
const RoundSelector = () => {

    const [international, setInternational] = useState(false)

    function handleChange() {
        event.preventDefault();
        event.target.value == 'ifsc' ? setInternational(true) : setInternational(false)
    }

    return(
        <>
        <div>
            <button value='ifsc' onClick={handleChange}>IFSC</button>
            <button value='usac' onClick={handleChange}>USA Climbing</button>
            <button>Custom Round</button>
        </div>
        {
            international ? <InternationalRoundOptions /> : <USACRoundOptions />
        }
        <style jsx>{`
            div {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            button:active {
                background-color: green;
            }
        `}</style>
        </>
    )
}

const InternationalRoundOptions = () => {

    const [roundType, setRoundType] = useState('boulder')

    return (
        <div>
            <div id='round-type'>
                <button>Sport</button>
                <button>Boulder</button>
            </div>
            <div>
                {
                    roundType === 'boulder' ? <IFSCBoulderOptions /> : <IFSCSportOptions />
                }
            </div>
            <style jsx>{`
                div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}

const USACRoundOptions = () => {

    return (
        <div>
            <div id='round-type'>
                <button>Sport</button>
                <button>Boulder</button>
            </div>


            <style jsx>{`
                div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}

const USACBoulderOptions = () => {
    return (
        <div>
            <button>Red Point</button>
            <button>4 Boulder Onsight</button>
            <button>6 Boulder Onsight</button>
        </div>
    )
}

const IFSCBoulderOptions = () => {
    return (
        <div>
            <button>Qualifying</button>
            <button>Semi Finals</button>
            <button>Finals</button>
        </div>
    )
}

const IFSCSportOptions = () => {
    return (
        <>
        <div>
            <button>Finals</button>
        </div>
        <style jsx>{`
            div {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `}</style>
        </>
    )
}

export default RoundSelector