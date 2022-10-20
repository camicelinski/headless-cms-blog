import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledLink = styled(NavLink)`
    color: #444;
    text-decoration: none;

    &:hover {
      color: red;
    }

    &.${props => props.activeClassName} {
      border: 1px solid red;
    }
`

export default StyledLink
