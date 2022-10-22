const sortByDate = (a, b) => {
  const date1 = new Date(a.data.date)
  const date2 = new Date(b.data.date)
  return date2 - date1
}

export { sortByDate }
