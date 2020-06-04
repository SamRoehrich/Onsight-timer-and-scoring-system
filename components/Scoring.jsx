import { useLocalState } from './LocalState'
import { useEffect, useRef } from 'react'

import ScoreCard from "./ScoreCard"

const Scoring = () => {
    let { climbing, onDeck, inIso } = useLocalState()
    return(
        <div>  
            {
                climbing.map((climber, i) => (
                    <ScoreCard athlete={climber} key={`athlete-${i}`} />
                ))
            }
        </div>
    )
}

export default Scoring

//get index of active athlete from timer page and render scorecard for each athlete based on that index