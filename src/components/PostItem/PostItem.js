/* eslint-disable react/prop-types */
import React from 'react'
import {
  PrismicText,
  PrismicRichText
} from '@prismicio/react'
import StyledImage from '../../style/Image.styled'

const PostItem = ({ post }) => {
  const { data } = post

  return (
    <article>
      <h2>
        <PrismicText field={data.title} />
      </h2>
      <StyledImage
        className={'post_img'}
        src={data.post_image.url}
      />
      <span>{data.date}</span>
      <PrismicRichText field={data.content} />
    </article>
  )
}

export default PostItem
