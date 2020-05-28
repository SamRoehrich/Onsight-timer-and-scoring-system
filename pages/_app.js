import { LocalState } from '../components/LocalState'

export default function MyApp({Component, pageProps}) {
    return (
        <LocalState>
            <Component {...pageProps} />
        </LocalState>
    )
}