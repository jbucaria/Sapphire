export default async function getReviews() {
  const placeId = 'ChIJVVUBkdMh6IgRthsmb5FlAjs'
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=review&key=${apiKey}`

  try {
    const reviews = []
    let nextPageToken = null

    do {
      const response = await fetch(
        nextPageToken ? `${url}&page_token=${nextPageToken}` : url
      )
      const data = await response.json()

      if (data.status === 'OK') {
        reviews.push(...data.result.reviews)
        nextPageToken = data.next_page_token
      } else {
        console.error('Error fetching reviews:', data.status)
        break
      }

      // Wait before requesting the next page
      if (nextPageToken) {
        await new Promise(resolve => setTimeout(resolve, 2000)) // Google recommends waiting a short time before using the next page token
      }
    } while (nextPageToken)

    return reviews
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return []
  }
}
