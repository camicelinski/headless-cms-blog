import styled from 'styled-components'

const StyledImage = styled.img`
  border: none;

  &.post_img {
    height: 400px;
  }

  &.post_small_img {
    max-width: 100%;
  }

  &.about-us_img {    
    max-width: 100%;
  }

  &.avatar {
    border-radius: 50%;
    height: 135px;
  }
`

export default StyledImage
