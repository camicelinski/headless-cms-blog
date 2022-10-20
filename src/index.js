import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// import './index.css'
import reportWebVitals from './reportWebVitals'

import { PrismicProvider } from '@prismicio/react'
import PrismicApi from './prismic'

const prismicApi = new PrismicApi()

ReactDOM.render(
  <React.StrictMode>
    <PrismicProvider client={prismicApi.loadData()}>
      <App />
    </PrismicProvider>,
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
