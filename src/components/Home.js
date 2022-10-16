import React from 'react'
import {
  useAllPrismicDocumentsByType
} from '@prismicio/react'
import PostItem from './PostItem'

const Home = () => {
  const [posts] = useAllPrismicDocumentsByType('blog_post')
  console.log(posts)

  return (
    <div>
      {posts && (
        posts.map((post, index) =>
          <PostItem
            post={post}
            key={index}
          />
        )
      )}
    </div>
  )
}

export default Home
