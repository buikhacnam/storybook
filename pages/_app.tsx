import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { Header } from '@/stories/Header'

export default function App({
    Component,
    pageProps: { ...pageProps },
}: AppProps) {
    return (
        <>
            <Header logo={'/next.svg'} />

            <Component {...pageProps} />
        </>
    )
}
