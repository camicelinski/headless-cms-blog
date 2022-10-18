import React from 'react'
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
        <li>Home</li>
        {categories && (
          categories.map((category) =>
            <>
              <li key={category.data.category_title}>
                <PrismicText field={category.data.category_title} />
              </li>
            </>
          )
        )}
        <li>About us</li>
      </ul>
    </StyledNav>
  )
}

export default Nav
