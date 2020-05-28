import Link from 'next/link'

const Button = (props) => {
    return (
        <>
        <div className='container'>
            <p>{props.text}</p>
        </div>
        <style jsx>{`
            .container {
                border: solid 2px gold;
                height: 50px;
                width: 70%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: azure;
                margin: 10px
            }
            a {
                color: black;
                text-decoration: none;
            }
        `}</style>
        </>
    )
}

export default Button