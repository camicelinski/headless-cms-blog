import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { PrismicProvider, useAllPrismicDocumentsByType } from '@prismicio/react'
import PrismicApi from './prismic'
import GlobalStyle from './style/GlobalStyle'
import Home from './pages/Home'
import Header from './components/Header'
import Post from './pages/Post'
import Footer from './components/Footer'
import CategoryPosts from './pages/CategoryPosts'
import NotFound from './pages/NotFound'
import AboutUs from './pages/AboutUs'
// import AnimatedSwitch from './components/AnimatedSwitch'

const prismicApi = new PrismicApi()

export const App = () => {
  const [posts] = useAllPrismicDocumentsByType('blog_post')
  console.log(posts)

  return (
    <PrismicProvider client={prismicApi.loadData()}>
      <Router>
        <GlobalStyle/>
        <Header />
        <Switch>
          <Route
            exact
            path={'/'}
          >
            <Redirect to={'/home/1'} />
          </Route>
          <Route path={'/home/:page'} >
            <Home />
          </Route>
          <Route path={'/category/:uid'} >
            <CategoryPosts />
          </Route>
          <Route
            path={'/post/:uid'}
            component={Post}
          />
          <Route path={'/about-us'}>
            <AboutUs />
          </Route>
          <Route
            path={'/404.html'}
            component={NotFound}
          />
          <Route>
            <Redirect to={'/404.html'} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </PrismicProvider>
  )
}

export default App
