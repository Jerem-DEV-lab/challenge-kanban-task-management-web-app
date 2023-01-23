import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="fr">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={""}/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700&display=swap"
                        rel="stylesheet"/>
                    <link rel="shortcut icon" href="/favicon-32x32.png"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
)
}
