/* eslint-disable react/prop-types */
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import CategoryPosts from '../pages/CategoryPosts'
import Post from '../pages/Post'
import AboutUs from '../pages/AboutUs'

const appRoutes = ({ location }) => {
  return (
    <Routes location={location}>
      <Route
        path={'/'}
        element={<Navigate to={'/1'} />}
      />
      <Route
        path={'/:page'}
        element={<Home/>}
      />
      <Route
        path={'/:category'}
        element={<CategoryPosts/>}
      />
      <Route
        path={'/post/:slugs'}
        element={<Post/>}
      />
      <Route
        path={'/about-us'}
        element={<AboutUs/>}
      />
      <Route
        path={'/404.html'}
        element={<NotFound/>}
      />
      <Route
        path={'/*'}
        element={<Navigate to={'/404.html'} />}
      />
    </Routes>
  )
}

export default appRoutes

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
