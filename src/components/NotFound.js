import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <p>Essa página não existe. Retorne à <Link to={'/'}>página principal.</Link></p>
    </>
  )
}

export default NotFound
