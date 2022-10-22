/* eslint-disable react/prop-types */
import React from 'react'
// import * as prismicH from '@prismicio/helpers'

const Introduction = ({ sliceZone, textLimit = 300 }) => {
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

    return <p>{limitedText}</p>
  }

  return null
}

export default Introduction
