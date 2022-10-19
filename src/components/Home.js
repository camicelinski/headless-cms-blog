import React from 'react'
import {
  useAllPrismicDocumentsByType
} from '@prismicio/react'
import PostItemSmall from './PostItemSmall'
import Pagination from './Pagination'

const Home = () => {
  const [posts] = useAllPrismicDocumentsByType('blog_post')
  console.log(posts)

  return (
    <section>
      {posts && (
        <Pagination
          path={'/'}
          limit={5}
          length={posts.length}
        >
          {posts && (
            posts.map((post, index) =>
              <PostItemSmall
                post={post}
                key={index}
              />
            )
          )}
        </Pagination>
      )}
    </section>
  )
}

export default Home
