import React from 'react'
import { Route, useParams } from 'react-router-dom'
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import PostItemSmall from '../components/PostItem/PostItemSmall'
import Pagination from '../components/Pagination/Pagination'
import { sortByDate } from '../helpers/sortByDate'
// import Pagination from '../components/Pagination'
// import Header from '../components/Header'
// import Footer from '../components/Footer'

const CategoryPosts = () => {
  const { uid } = useParams()
  // const category = 'cronica'
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
            // length={Children.length}
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

/*
  {categories && (categories.map((cat) =>
          cat.uid === uid ?
              (
                <h3 key={`${cat.uid}-${cat.id}`}>
                  <PrismicText field={cat.data.category_title} />
                </h3>
              )
            : null
        ))}

  const Routes = () => {
    if (categories) {
      categories.map(item => {
        const postsByCat = documents.filter(
          post => post.data.categories.filter(
            cat => cat.category.uid.includes(item.uid)
          )
        )
        return (
          <Route
            key={item.id}
            path={`/${item.uid}`}
          >
            <h3>
              <PrismicText field={item.data.category_title} />
            </h3>
            <Pagination
              path={`/${item.uid}`}
              limit={3}
              length={postsByCat.length}
            >
              {postsByCat.map(post =>
                <PostItemSmall
                  key={post.id}
                  post={post}
                />
              )}
            </Pagination>
          </Route>
        )
      })
    } else {
      return null
    }
  }

  return (
    <main>
      <Routes />
    </main>
  )
*/
