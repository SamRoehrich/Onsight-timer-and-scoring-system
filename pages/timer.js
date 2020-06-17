import Scoring from '../components/Scoring'
import Timer from '../components/Timer'
import AthleteList from '../components/AthleteList'

const TimerPage = () => {
    return (
        <div className='container'>
            <AthleteList />
            <div className='timer-and-scoring'>
                <Timer />
                <div className='scoring'>
                    {/* <Scoring/> */}
                </div>
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