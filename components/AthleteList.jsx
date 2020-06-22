import { useLocalState } from './LocalState'

const AthleteList = () => {

    const { athletes } = useLocalState()
    return (
        <>
            <div className='athlete-list'>
               {
                   athletes.map((athlete, i) => 
                       <div key={`athlete-${i}`} className = 'athlete-card'>
                           <p>{athlete.name}</p>
                           {
                               athlete.inIso ? 'In Iso' : ''
                           }
                           {
                               athlete.onDeck ? 'On Deck' : ''
                           }
                           {
                               athlete.climbing ? 'Climbing' : ''
                           }
                           {
                               athlete.finished ? 'Finished' : ''
                           }
                       </div>
                   )
               }
            </div> 
            <style jsx>
            {`
                .athlete-list {
                    width: 20%;
                    height: 100vh;
                    border: 1px solid black;
                }
                .athlete-card {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            `}
            </style>
        </>
    )
}

export default AthleteList