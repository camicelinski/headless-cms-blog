/* eslint-disable react/prop-types */
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import CategoryPosts from '../pages/CategoryPosts'
import Post from '../pages/Post'
import AboutUs from '../pages/AboutUs'

const Routes = ({ location }) => {
  return (
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
  )
}

export default Routes

/*
<Route
        exact
        path={'/'}
      >
        <Redirect to={'/1'} />
      </Route>
      <Route path={'/:page'} >
        <Home />
      </Route>
      <Route path={'/:uid'} >
        <CategoryPosts />
      </Route>
      <Route
        path={'/post/:slugs'}
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
*/
