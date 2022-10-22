import React from 'react'
import { useParams } from 'react-router-dom'
import { usePrismicDocumentByUID } from '@prismicio/react'
import PostItem from '../components/PostItem'

const Post = () => {
  const { uid } = useParams()
  // console.log(uid)
  const [post] = usePrismicDocumentByUID('blog_post', uid)
  console.log(post)

  return (
    <>
      {post && (
        <PostItem post={post} />
      )}
    </>
  )
}

export default Post
