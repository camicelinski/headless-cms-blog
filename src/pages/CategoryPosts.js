import React from 'react'
import { useParams } from 'react-router-dom'
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import PostItemSmall from '../components/PostItemSmall'
// import Pagination from '../components/Pagination'
// import Header from '../components/Header'
// import Footer from '../components/Footer'

const CategoryPosts = () => {
  const { category } = useParams()
  const [documents] = useAllPrismicDocumentsByType('blog_post')
  console.log(category, documents)

  return (
    <main>
      {documents && (documents.filter((document) =>
        document.data.categories.map((n) => {
          return n.uid
        }).includes(category)).map((document, index) =>
          <PostItemSmall
            document={document}
            key={index}
          />
      )
      )}
    </main>
  )
}

export default CategoryPosts
