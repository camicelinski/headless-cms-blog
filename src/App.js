import React from 'react'
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom'
import { PrismicProvider, useAllPrismicDocumentsByType } from '@prismicio/react'
import PrismicApi from './prismic'
import Home from './components/Home'

const prismicApi = new PrismicApi()

export const App = () => {
  const [posts] = useAllPrismicDocumentsByType('blog_post')
  console.log(posts)

  return (
    <PrismicProvider client={prismicApi.loadData()}>
      <Router>
        <div>Header</div>
        <Switch>
          <Route
            exact
            path={'/'}
            component={Home}
          />
          <Route>
            <Redirect to={'/404.html'} />
          </Route>
        </Switch>
        <div>Footer</div>
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
