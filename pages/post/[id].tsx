import React from 'react'
import {useState, useEffect} from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {NextPageContext} from 'next'
import {MyPost} from '../../interfaces/post'

interface PostPageProps {
  post: MyPost
}

export default function Post({post: serverPost}: PostPageProps) {
  const router = useRouter()
  const [post, setPost] = useState(serverPost)

  useEffect(() => {
    async function load() {
      const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
      const data = await response.json()

      setPost(data)
    }

    if (!serverPost) {
      load()
    }
  }, [])

  if (!post) {
    return <MainLayout>
      <h1>Loading...</h1>
    </MainLayout>
  }

  return (
    <MainLayout>
      <h1>{post.title}</h1>
      <hr/>
      <p>{post.body}</p>
      <Link href="/posts">
        <a>Back to all posts</a>
      </Link>
    </MainLayout>
  )
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string
  }
}

Post.getInitialProps = async ({query, req}: PostNextPageContext) => {
  if (!req) {
    return {
      post: null
    }
  }
  const response = await fetch(`http://localhost:4200/posts/${query.id}`)
  const post: MyPost = await response.json()

  return {
    post
  }
}

// export async function getServerSideProps({query}) {
//   const res = await fetch(`http://localhost:4200/posts/${query.id}`)
//   const post = await res.json()
//
//   return {
//     props: {
//       post
//     }
//   }
// }
