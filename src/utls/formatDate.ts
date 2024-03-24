export const formatDate = (date: string) => {
  if (!date) {
    throw new Error('Invalid date')
  }

  const formattedDate = new Date(date)
  return formattedDate.toLocaleDateString()
}
