/* eslint-disable react/prop-types */
import React from 'react'
import {
  PrismicText,
  PrismicRichText
} from '@prismicio/react'

const PostItem = ({ post }) => {
  const { data } = post

  return (
    <article>
      <h2>
        <PrismicText field={data.title} />
      </h2>
      <span>{data.date}</span>
      <PrismicRichText field={data.content} />
    </article>
  )
}

export default PostItem
