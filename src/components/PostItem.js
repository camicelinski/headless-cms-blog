/* eslint-disable react/prop-types */
import React from 'react'
import {
  PrismicText,
  PrismicRichText
} from '@prismicio/react'

const PostItem = ({ post }) => {
  const { data } = post

  return (
    <div>
      <h2>
        <PrismicText field={data.title} />
      </h2>
      <span>{data.date}</span>
      <PrismicRichText field={data.content} />
    </div>
  )
}

export default PostItem

/*
<>
  <h2>{post.data.title}</h2>
  <span>{post.data.date}</span>
  <PrismicRichText field={post.data.content} />
</>
*/
