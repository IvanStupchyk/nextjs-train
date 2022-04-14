import React from 'react'
import NextProgress from 'next-progress'
import '../styles/main.css'
import '../styles/mainLayout.scss'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
    <NextProgress
      height={'5'}
      delay={100}
      options={{ showSpinner: true }}
    />
  </>
}