import styled from 'styled-components'

const StyledPaginationRoute = styled.nav`
& ul {
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
  list-style: none;   
}

& li {
  margin-right: 25px;
  margin-bottom: 10px;
  font-size: 1.3rem;

  & a {
    text-decoration: none;
    color: black;
    padding-bottom: 4px;

    &:hover {
      color: #B4DD7F;
      transition: 0.1s;
    }
  }  
}
`

export default StyledPaginationRoute
