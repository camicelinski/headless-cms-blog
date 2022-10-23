import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { PrismicProvider } from '@prismicio/react'
import PrismicApi from './prismic'
import GlobalStyle from './style/GlobalStyle'
import Header from './components/Header'
import Footer from './components/Footer'
import AnimatedSwitch from './components/AnimatedSwitch'

const prismicApi = new PrismicApi()

export const App = () => {
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
