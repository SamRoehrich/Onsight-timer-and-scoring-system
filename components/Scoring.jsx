import { useLocalState } from './LocalState'

import ScoreCard from "./ScoreCard"

const Scoring = () => {
    let { reducerState } = useLocalState()
    return(
        <>
        <div className='scoring'>  
            {
                reducerState.climbing.length !== 0 &&
                reducerState.climbing.map((climber, i) => (
                    <ScoreCard athlete={climber} key={`athlete-${i}`} />
                ))
            }
        </div>
        <style jsx>{`
            .scoring {
                display: flex;

            }
        `}</style>
        </>
    )
}

export default Scoring
