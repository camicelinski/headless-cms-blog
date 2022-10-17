import React from 'react'
import { useSinglePrismicDocument, PrismicText } from '@prismicio/react'
import Nav from './Nav'

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
      <Nav />
    </>
  )
}

export default Header
