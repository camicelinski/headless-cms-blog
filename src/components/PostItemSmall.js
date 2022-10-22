/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { PrismicRichText, PrismicText } from '@prismicio/react'
import StyledImage from '../style/Image.styled'

const PostItemSmall = ({ post }) => {
  const { data } = post
  console.log(post, data)

  return (
    <article>
      <Link to={'/post/'.concat(post.uid)}>
        <h3>
          <PrismicText field={data.title} />
        </h3>
      </Link>
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
