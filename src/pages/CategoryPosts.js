import React from 'react'
import { Route, useParams } from 'react-router-dom'
import { useAllPrismicDocumentsByType, PrismicText } from '@prismicio/react'
import PostItemSmall from '../components/PostItemSmall'
// import Pagination from '../components/Pagination'
// import Header from '../components/Header'
// import Footer from '../components/Footer'

const CategoryPosts = () => {
  const { category } = useParams()
  // const category = 'cronica'
  const [documents] = useAllPrismicDocumentsByType('blog_post')
  console.log(category, documents)
  const [categories] = useAllPrismicDocumentsByType('category')
  console.log(categories)

  return (
    <main>
      <Route path={`/${category}`}>
        {categories && (categories.map((cat) =>
          cat.uid === category ?
              (
                <h3 key={`${cat.uid}-${cat.id}`}>
                  <PrismicText field={cat.data.category_title} />
                </h3>
              )
            : null
        ))}
        {documents && (
          documents.filter((post) =>
            post.data.categories.map((cat) => {
              return cat.category.uid
            }).includes(category)).map((post, index) =>
              <PostItemSmall
                post={post}
                key={index}
              />
          )
        )}
      </Route>
    </main>
  )
}

export default CategoryPosts

/*
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
