import Scoring from '../components/Scoring'
import Timer from '../components/timer'
import AthleteList from '../components/AthleteList'
import Results from '../components/Results'
import { useLocalState } from '../components/LocalState'

const TimerPage = () => {

    const { reducerState } = useLocalState()
    return (
        <div className='container'>
            <AthleteList />
            <div className='timer-and-scoring'>
                    <Timer />
                    {reducerState.finished.length == reducerState.athletes.length && reducerState.athletes.length > 0 ? <Results /> : ''}
                    <Scoring />
            </div>
            <style jsx>
                {`
                    .athlete-list {
                        width: 20%;
                        height: 100vh;
                        border: 1px solid black;
                    }
                    .timer-and-scoring {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto;
                    }
                    .timer {
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                    }
                    .container {
                        display: flex;
                    }
                    .scoring {
                        display: flex;
                        justify-content: space-around;
                    }
                `}
            </style>
        </div>
    )
}

export default TimerPage