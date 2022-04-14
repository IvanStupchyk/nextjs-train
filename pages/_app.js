import React from 'react'
import NextProgress from 'next-progress'
import '../styles/main.css'
import '../styles/mainLayout.scss'

export default function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <NextProgress
      height={'5'}
      delay={100}
      options={{ showSpinner: true }}
    />
  </>
}