import React from 'react'
import { useSinglePrismicDocument, PrismicRichText } from '@prismicio/react'
import StyledFooter from '../style/Footer.styled'

const Footer = () => {
  const [document] = useSinglePrismicDocument('footer')

  return (
    <StyledFooter>
      {document && (
        <>
          <ul>
            {document.data.media_links.map(link =>
              <li key={link.media_link.url}>
                <a href={link.media_link.url}>
                  <i className={link.icon_class}></i>
                </a>
              </li>
            )}
          </ul>
          <PrismicRichText field={document.data.copyright} />
        </>
      )}
    </StyledFooter>
  )
}

export default Footer
