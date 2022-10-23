/* eslint-disable react-hooks/rules-of-hooks */
import { useLocation } from 'react-router-dom'

const isPostPage = () => {
  const location = useLocation()
  console.log(location)
  return location.includes('post/')
}

export { isPostPage }
