import type { AppProps } from 'next/app'
import '../styles/globals.css'
import MainLayout from '../layout/mainLayout'
import Head from 'next/head'
import Link from 'next/link'
import { AnimateSharedLayout } from 'framer-motion'
import Header from '../layout/header'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Flex Strip</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Header />

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}

export default App
