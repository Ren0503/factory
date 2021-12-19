import 'styles/global.css'

import { AppProps } from 'next/app'
import React from 'react'
import { useStore } from 'react-redux'
import { Persistor } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import { Header, Footer } from 'components/core'
import { wrapper } from 'store'

function MyApp({ Component, pageProps }: AppProps) {
    const store = useStore()
    // @ts-ignore we put it in the config before
    const persistor: Persistor = store.__persistor
    return (
        <PersistGate persistor={persistor} loading={<div>Loading</div>}>
            <Header />
            <main className="lg:container mx-auto py-3">
                <Component {...pageProps} />
            </main>
            <Footer />
        </PersistGate>
    )
}

export default wrapper.withRedux(MyApp)