// app/api/getReviews/route.js or pages/api/getReviews.js
export async function GET(request) {
  const placeId = 'ChIJVVUBkdMh6IgRthsmb5FlAjs'
  const apiKey = NEXT_PUBLIC_GOOGLE_API_KEY
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=review&key=${apiKey}`

  try {
    const response = await fetch(url)
    const data = await response.json()

    if (response.ok) {
      return new Response(JSON.stringify(data.result.reviews), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // CORS header
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        },
      })
    } else {
      return new Response(
        JSON.stringify({
          message: 'Error fetching reviews',
          status: data.status,
        }),
        { status: response.status }
      )
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'Internal server error',
        error: error.message,
      }),
      { status: 500 }
    )
  }
}
