import { AppProps } from 'next/app'
import Head from 'next/head'
import MainLayout from '../layout/mainLayout'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Flex Strip PVC</title>
      </Head>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}

export default App
