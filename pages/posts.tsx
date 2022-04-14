import React from 'react'
import {useState, useEffect} from 'react'
import MainLayout from '../components/MainLayout/MainLayout'
import Link from 'next/link'
import {MyPost} from '../interfaces/post'
import {NextPageContext} from 'next'

interface PostsPageProps {
  posts: MyPost[]
}

export default function Posts({posts: serverPosts}: PostsPageProps) {
  const [posts, setPosts] = useState(serverPosts)

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts`)
      const data: Array<MyPost> = await response.json()

      setPosts(data)
    }

    if (!posts) {
      load()
    }
  }, [])


  if (!posts) {
    return <MainLayout>
      <h1>Loading...</h1>
    </MainLayout>
  }

  return (
    <MainLayout
      title="Posts page"
    >
      <h1>posts page</h1>

      <ul>
        {posts.map(p => (
          <li key={p.id}>
            <Link href="/post/[id]" as={`/post/${p.id}`}>
              <a>{p.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

Posts.getInitialProps = async ({res}: NextPageContext) => {
  if (!res) {
    return {
      posts: null
    }
  }

  const response = await fetch('http://localhost:4200/posts')
  const posts: Array<MyPost> = await response.json()

  return {
    posts
  }
}
