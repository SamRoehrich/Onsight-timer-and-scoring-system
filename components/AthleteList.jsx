import { useLocalState } from './LocalState'

const AthleteList = () => {

    const { athletes } = useLocalState()
    console.log(athletes)
    return (
        <>
            <div className='athlete-list'>
               {
                   athletes.map((athlete, i) => 
                       <div key={`athlete-${i}`}>
                           <p>{athlete.name}</p>
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
            `}
            </style>
        </>
    )
}

export default AthleteList