import { useLocalState } from './LocalState'

import ScoreCard from "./ScoreCard"

const Scoring = ({ activeClimbers }) => {
    
    console.log(activeClimbers)
    

    return(
        <div>
            {
                activeClimbers.map(athlete => <ScoreCard athlete={athlete} />)
            }
        </div>
    )
}

export default Scoring

//get index of active athlete from timer page and render scorecard for each athlete based on that index