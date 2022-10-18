import React from 'react'
import { useSinglePrismicDocument, PrismicRichText } from '@prismicio/react'

const Footer = () => {
  const [document] = useSinglePrismicDocument('footer')
  console.log(document)

  return (
    <footer>
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
    </footer>
  )
}

export default Footer
