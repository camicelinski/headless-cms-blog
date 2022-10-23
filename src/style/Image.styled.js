import styled from 'styled-components'

const StyledImage = styled.img`
  border: none;

  &.post_img,
  &.post_small_img,
  &.about-us_img {
    max-width: 100%;
  }

  &.avatar {
    border-radius: 50%;
    height: 135px;
  }

  &.hidden {
    display: none;
  }
`

export default StyledImage
