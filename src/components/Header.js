import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSinglePrismicDocument, PrismicText } from '@prismicio/react'
import Nav from './Nav'
import StyledHeader from '../style/Header.styled'
import StyledImage from '../style/Image.styled'

const Header = () => {
  const [document] = useSinglePrismicDocument('header')
  console.log(document)
  const location = useLocation()

  const isPostPage = (location) => {
    console.log(location)
    return location.pathname.includes('/post/')
  }

  return (
    <StyledHeader>
      {document && (
        <>
          <StyledImage
            className={isPostPage(location) ? 'hidden' : 'avatar'}
            src={document.data.avatar.url}
            alt={'blog-avatar'}
          />
          <h1>
            <PrismicText field={document.data.blog_title} />
          </h1>
        </>
      )}
      <Nav />
    </StyledHeader>
  )
}

export default Header
