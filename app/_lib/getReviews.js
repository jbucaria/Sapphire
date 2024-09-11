export async function getReviews() {
  const response = await fetch('/api/getReviews')
  const data = await response.json()
  return data
}
