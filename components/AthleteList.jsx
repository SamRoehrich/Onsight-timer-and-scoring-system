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
                    width: 15%;
                    height: 100%;
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