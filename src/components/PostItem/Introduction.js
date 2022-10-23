/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const Introduction = ({ sliceZone, textLimit = 300, uid }) => {
  const firstTextSlice = sliceZone.find((slice) => slice.type === 'paragraph')
  console.log(firstTextSlice)

  if (firstTextSlice) {
    const text = firstTextSlice.text
    let limitedText = text.substring(0, textLimit)

    if (text.length > textLimit) {
      limitedText = `${limitedText.substring(
        0,
        limitedText.lastIndexOf(' ')
      )}...`
    }

    return (
      <p>
        {limitedText}
        <Link
          to={'/post/'.concat(uid)}
          className={'post_link-read-more'}
        >
          <span> Leia mais...</span>
        </Link>
      </p>
    )
  }

  return null
}

export default Introduction
