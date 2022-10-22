import React from 'react'
import {
  PrismicRichText,
  PrismicText,
  useSinglePrismicDocument
} from '@prismicio/react'
import StyledImage from '../style/Image.styled'
// import Header from '../components/Header'
// import Footer from '../components/Footer'

const AboutUs = () => {
  const [document] = useSinglePrismicDocument('about_us')
  console.log(document)

  return (
    <main>
      {document && (
        <>
          <StyledImage
            className={'post_img'}
            src={document.data.image.url}
          />
          <h2>
            <PrismicText field={document.data.title} />
          </h2>
          <PrismicRichText field={document.data.text} />
        </>
      )}
    </main>
  )
}

export default AboutUs
