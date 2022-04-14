import React from 'react'
import Router from 'next/router'
import MainLayout from '../../components/MainLayout/MainLayout'
import { AboutPage } from '../../interfaces/about'

interface AboutPageProps {
  title: string
}

export default function About({title}: AboutPageProps) {
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
  const res = await fetch(`${process.env.API_URL}/about`)
  const data: AboutPage = await res.json()

  return {
    title: data.title
  }
}