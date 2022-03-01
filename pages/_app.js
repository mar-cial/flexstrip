import React from 'react'
import MainLayout from '../components/mainLayout'
import '../styles/globals.css'
import Head from 'next/head'

const FlexStripApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Flex Strip</title>
      </Head>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>

    </>
  )
}

export default FlexStripApp