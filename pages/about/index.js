import React from 'react'
import Router from 'next/router'
import MainLayout from '../../components/MainLayout/MainLayout'

export default function About() {
  const linkClickHandler = (link) => {
    return () => {
      Router.push(`${link}`)
    }
  }

  return <MainLayout
    title="About page"
  >
    <h1>About page</h1>

    <button onClick={linkClickHandler('/')}>
      Go back to home
    </button>
    <button onClick={linkClickHandler('/posts')}>
      Go back to posts
    </button>
  </MainLayout>
}