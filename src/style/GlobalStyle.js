import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {    
    margin: 0 auto;
    padding: 0;
    font-family: 'Karla', sans-serif;
  }

  a {
    text-decoration: none;
    color: #000;
  }
  h2 {
    font-size: 1.8rem;
  }
`

export default GlobalStyle
