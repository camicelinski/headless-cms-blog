import React from 'react'
import { Link } from 'react-router-dom'
import {
  useAllPrismicDocumentsByType,
  PrismicText
} from '@prismicio/react'
import StyledNav from '../style/Nav.styled'

const Nav = () => {
  const [categories] = useAllPrismicDocumentsByType('category')
  console.log(categories)

  return (
    <StyledNav>
      <ul>
        <li key={'home'}>
          <Link to={'/'}>Home</Link>
        </li>
        {categories && (
          categories.map((category) =>
            <li key={category.id}>
              <Link to={`/${category.data.category_id}`}>
                <PrismicText field={category.data.category_title} />
              </Link>
            </li>
          )
        )}
        <li key={'aboutUs'}>
          <Link to={'/about-us'}>About us</Link>
        </li>
      </ul>
    </StyledNav>
  )
}

export default Nav
