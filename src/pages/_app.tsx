import '../utils/styles/style.css';
import '../utils/styles/font.css'
import { AppProps } from 'next/app';
import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function MyApp({ Component, pageProps}: AppProps) {
    return (
    <Component {...pageProps} />
    );
}
