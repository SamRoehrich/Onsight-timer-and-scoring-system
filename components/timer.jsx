import { useState } from 'react'

const Timer = () => {

    const [athletes, setAthletes] = useState(0)

    return (
        <div>
            <div>
                <span>Add an athlete to the round</span>
                <input placeholder='name' />
                <input placeholder='catagory' />
            </div>
            <span>current time</span>
        </div>
    )
}

export default Timer