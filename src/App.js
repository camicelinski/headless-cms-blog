import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { PrismicProvider, useAllPrismicDocumentsByType } from '@prismicio/react'
import PrismicApi from './prismic'
import GlobalStyle from './style/GlobalStyle'
import Header from './components/Header'
import Footer from './components/Footer'
import AnimatedSwitch from './components/AnimatedSwitch'

const prismicApi = new PrismicApi()

export const App = () => {
  const [posts] = useAllPrismicDocumentsByType('blog_post')
  console.log(posts)

  return (
    <PrismicProvider client={prismicApi.loadData()}>
      <Router>
        <GlobalStyle/>
        <Header />
        <AnimatedSwitch />
        <Footer />
      </Router>
    </PrismicProvider>
  )
}

export default App
