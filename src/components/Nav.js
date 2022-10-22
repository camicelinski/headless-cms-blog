import React from 'react'
import {
  useAllPrismicDocumentsByType,
  PrismicText
} from '@prismicio/react'
import StyledNav from '../style/Nav.styled'
import StyledLink from '../style/Link.styled'

const Nav = () => {
  const [categories] = useAllPrismicDocumentsByType('category')
  console.log(categories)

  const activeClass = 'active'

  return (
    <StyledNav>
      <ul>
        <li>
          <StyledLink
            activeClassName={activeClass}
            to={'/home/1'}
          >
            Home
          </StyledLink>
        </li>
        {categories && (
          categories.map((category) =>
            <li key={category.uid}>
              <StyledLink
                activeClassName={activeClass}
                to={`/category/${category.uid}/1`}
              >
                <PrismicText field={category.data.category_title} />
              </StyledLink>
            </li>
          )
        )}
        <li>
          <StyledLink
            activeClassName={activeClass}
            to={'/about-us'}
          >
            About us
          </StyledLink>
        </li>
      </ul>
    </StyledNav>
  )
}

export default Nav
