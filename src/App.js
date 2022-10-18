import React from 'react'
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom'
import { PrismicProvider, useAllPrismicDocumentsByType } from '@prismicio/react'
import PrismicApi from './prismic'
import GlobalStyle from './style/GlobalStyle'
import Home from './components/Home'
import Header from './components/Header'
import Post from './components/Post'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

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
            component={Home}
          />
          <Route
            path={'/post/:slug'}
            component={Post}
          />
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
/*
{posts.map(post => (
  <>
    <h2>{post.data.title}</h2>
    <span>{post.data.date}</span>
    <PrismicRichText field={post.data.content} />
  </>
))}
*/
