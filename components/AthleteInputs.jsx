import PropTypes from 'prop-types'

const AthleteInputs = ({ idx, athletes, handleAthleteInputChange}) => {
    const athleteId = `name-${idx}`
    const ageId = `age-${idx}`
    return (
        <div key={`athlete-${idx}`}>
            <label htmlFor={athleteId}>{`Athlete ${idx + 1}`}</label>
            <input
                type='text'
                name={athleteId}
                data-idx={idx}
                id={athleteId}
                className='name'
                value={athletes[idx].name}
                onChange={handleAthleteInputChange}
            />
            <label htmlFor={ageId}>Age Catagory</label>
            <input 
                type='text'
                name={ageId}
                data-idx={idx}
                id={ageId}
                className='ageCat'
                value={athletes[idx].ageCat}
                onChange={handleAthleteInputChange}
            />
        </div>
    )
}

AthleteInputs.propTypes = {
    idx: PropTypes.number,
    athletes: PropTypes.array,
    handleAthleteInputChange: PropTypes.func
}

export default AthleteInputs