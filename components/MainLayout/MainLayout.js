import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function MainLayout({children, title = 'Next app'}) {
  return (
    <>
      <Head>
        <title>{title} | Next</title>
        <meta name="keywords" content="next,javascript,nextjs"/>
        <meta name="description" content="Train project"/>
        <meta charSet="utf-8"/>
      </Head>
      <nav  className="mainLayout__nav">
        <Link href="/"><a>Home</a></Link>
        <Link href="/posts"><a>Posts</a></Link>
        <Link href="/about"><a>About</a></Link>
      </nav>

      <main >
        {children}
      </main>
    </>
  )
}