import React from 'react'
import { useSinglePrismicDocument, PrismicText } from '@prismicio/react'

const Header = () => {
  const [document] = useSinglePrismicDocument('header')
  console.log(document)

  return (
    <>
      {document && (
        <>
          <img
            src={document.data.avatar.url}
            alt={'blog-avatar'}
          />
          <h1>
            <PrismicText field={document.data.blog_title} />
          </h1>
        </>
      )}
      <p>Nav</p>
    </>
  )
}

export default Header
