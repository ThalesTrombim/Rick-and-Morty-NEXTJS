import Head from 'next/head';

function NextHead({ children }) {
    return (
        <Head>
            <title>{ children }</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
    )
}

export { NextHead }