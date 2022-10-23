import React from 'react'
import {
  PrismicRichText,
  PrismicText,
  useSinglePrismicDocument
} from '@prismicio/react'
import StyledAboutUs from '../style/AboutUs'
import StyledImage from '../style/Image.styled'
// import Header from '../components/Header'
// import Footer from '../components/Footer'

const AboutUs = () => {
  const [document] = useSinglePrismicDocument('about_us')
  console.log(document)

  return (
    <StyledAboutUs>
      {document && (
        <>
          <StyledImage
            className={'about-us_img'}
            src={document.data.image.url}
          />
          <h2>
            <PrismicText field={document.data.title} />
          </h2>
          <PrismicRichText field={document.data.text} />
        </>
      )}
    </StyledAboutUs>
  )
}

export default AboutUs
