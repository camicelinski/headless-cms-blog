import React from 'react'
import {
  useAllPrismicDocumentsByType
} from '@prismicio/react'
import PostItemSmall from '../components/PostItem/PostItemSmall'
import Pagination from '../components/Pagination/Pagination'

const Home = () => {
  const [documents] = useAllPrismicDocumentsByType('blog_post')
  console.log(documents)

  return (
    <>
      <main>
        {documents && (
          <Pagination
            path={'/home'}
            limit={5}
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
