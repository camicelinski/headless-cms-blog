import React from 'react'
import {
  useAllPrismicDocumentsByType,
  PrismicText
} from '@prismicio/react'

const Nav = () => {
  const [categories] = useAllPrismicDocumentsByType('category')
  console.log(categories)

  return (
    <nav>
      <ul>
        <li>Home</li>
        {categories && (
          categories.map((category) =>
            <>
              <li>
                <PrismicText field={category.data.category_title} />
              </li>
            </>
          )
        )}
        <li>About us</li>
      </ul>
    </nav>
  )
}

export default Nav
