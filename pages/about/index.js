import React from 'react'
import Router from 'next/router'
import MainLayout from '../../components/MainLayout/MainLayout'

export default function About({title}) {
  const linkClickHandler = (link) => {
    return () => {
      Router.push(`${link}`)
    }
  }

  return <MainLayout
    title="About page"
  >
    <h1>{title}</h1>

    <button onClick={linkClickHandler('/')}>
      Go back to home
    </button>
    <button onClick={linkClickHandler('/posts')}>
      Go back to posts
    </button>
  </MainLayout>
}

About.getInitialProps = async () => {
  const res = await fetch('http://localhost:4200/about')
  const data = await res.json()

  return {
    title: data.title
  }
}