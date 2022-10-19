import React from 'react'
import { useParams } from 'react-router-dom'
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import PostItemSmall from './PostItemSmall'

const CategoryPosts = () => {
  const { uid } = useParams()
  const [documents] = useAllPrismicDocumentsByType('blog_post')

  return (
    <div>
      {documents && (
        documents.filter((document) =>
          document.data.categories.map((n) => {
            return n.category.uid
          }).includes(uid)).map((document, index) =>
            <PostItemSmall
              document={document}
              key={index}
            />
        )
      )}
    </div>
  )
}

export default CategoryPosts
