/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { PrismicText } from '@prismicio/react'
import Introduction from './Introduction'
import StyledImage from '../../style/Image.styled'
import StyledPostItemSmall from '../../style/PostItemSmall.styled'
import { formatDate } from '../../helpers/formatDate'

const PostItemSmall = ({ post }) => {
  const { data } = post
  console.log(post, data)

  return (
    <StyledPostItemSmall>
      <Link to={'/post/'.concat(post.uid)}>
        <h3>
          <PrismicText field={data.title} />
        </h3>
      </Link>
      <div>
        <StyledImage
          className={'post_small_img'}
          src={data.post_image.url}
        />
      </div>
      <p className={'post_date'}>{ formatDate(data.date) }</p>
      <Introduction
        sliceZone={data.content}
        textLimit={500}
        uid={post.uid}
      />
    </StyledPostItemSmall>
  )
}

export default PostItemSmall
