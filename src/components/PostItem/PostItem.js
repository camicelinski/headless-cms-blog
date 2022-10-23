/* eslint-disable react/prop-types */
import React from 'react'
import {
  PrismicText,
  PrismicRichText
} from '@prismicio/react'
import StyledPostItem from '../../style/PostItem.styled'
import StyledImage from '../../style/Image.styled'
import { formatDate } from '../../helpers/formatDate'

const PostItem = ({ post }) => {
  const { data } = post

  return (
    <StyledPostItem>
      <h2>
        <PrismicText field={data.title} />
      </h2>
      <StyledImage
        className={'post_img'}
        src={data.post_image.url}
      />
      <p className={'post_date'}>{ formatDate(data.date) }</p>
      <PrismicRichText field={data.content} />
    </StyledPostItem>
  )
}

export default PostItem
