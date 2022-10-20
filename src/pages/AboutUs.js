import React from 'react'
import {
  usePrismicDocumentsByType
} from '@prismicio/react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AboutUs = () => {
  const [document] = usePrismicDocumentsByType('about_us')
  console.log(document)

  return (
    <>
      <Header />
      <main>
        About us
      </main>
      <Footer />
    </>
  )
}

export default AboutUs
