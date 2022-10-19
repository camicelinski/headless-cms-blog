/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { PrismicRichText, PrismicText } from '@prismicio/react'
import StyledImage from '../style/Image.styled'

const PostItemSmall = ({ post }) => {
  const { slugs, data } = post
  console.log(slugs)

  return (
    <article>
      <h3>
        <PrismicText field={data.title} />
      </h3>
      <StyledImage
        className={'post_img'}
        src={data.post_image.url}
      />
      <span>{data.date}</span>
      <PrismicRichText field={data.content} />
      <Link to={'/post/'.concat(post.uid)}>
        <span>Leia mais...</span>
      </Link>
    </article>
  )
}

export default PostItemSmall
