import React from 'react'
import { Route, useParams } from 'react-router-dom'
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import PostItemSmall from '../components/PostItem/PostItemSmall'
import Pagination from '../components/Pagination/Pagination'
import { sortByDate } from '../helpers/sortByDate'

const CategoryPosts = () => {
  const { uid } = useParams()
  const [documents] = useAllPrismicDocumentsByType('blog_post')
  console.log(uid, documents)
  const [categories] = useAllPrismicDocumentsByType('category')
  console.log(categories)
  const pageUrl = `/category/${uid}`

  return (
    <main>
      <Route path={`${pageUrl}/:page`}>
        {documents && (
          <Pagination
            path={pageUrl}
            limit={5}
          >
            {documents && (
              documents.filter((post) =>
                post.data.categories.map((cat) => {
                  return cat.category.uid
                }).includes(uid)).sort(sortByDate).map((post, index) =>
                  <PostItemSmall
                    post={post}
                    key={index}
                  />
              )
            )}
          </Pagination>
        )}
      </Route>
    </main>
  )
}

export default CategoryPosts
