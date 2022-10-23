const formatDate = (inputDate) => {
  const date = new Date(inputDate)

  const day = date.getDate()

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const month = (months[date.getMonth()])

  const year = date.getFullYear()

  const formatedDate = `${month} ${day}, ${year}`

  return formatedDate
}

export { formatDate }
