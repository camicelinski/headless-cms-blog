import React from 'react'
import { useParams } from 'react-router-dom'
import { usePrismicDocumentByUID } from '@prismicio/react'
import PostItem from './PostItem'

const Post = () => {
  const { slug } = useParams()
  const [post] = usePrismicDocumentByUID('blog_post', slug)

  return (
    <>
      {post && (
        <PostItem post={post} />
      )}
    </>
  )
}

export default Post
