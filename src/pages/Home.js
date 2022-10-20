import React from 'react'
import {
  useAllPrismicDocumentsByType
} from '@prismicio/react'
import PostItemSmall from '../components/PostItemSmall'
import Pagination from '../components/Pagination'

const Home = () => {
  const [documents] = useAllPrismicDocumentsByType('blog_post')
  console.log(documents)

  return (
    <>
      <main>
        {documents && (
          <Pagination
            path={''}
            limit={3}
            length={documents.length}
          >
            {documents && (
              documents.map((post, index) =>
                <PostItemSmall
                  post={post}
                  key={index}
                />
              )
            )}
          </Pagination>
        )}
      </main>
    </>
  )
}

export default Home
