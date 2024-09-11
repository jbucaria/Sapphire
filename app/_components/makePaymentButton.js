'use client'

import { useRouter } from 'next/navigation'
import { createOneTimeCheckoutSession } from '../_lib/createOneTimePaymentSession'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function MakePaymentButton() {
  const router = useRouter()

  async function handlePayment() {
    const lineItems = [
      {
        price: 'price_1PxEnMRstosojHwh9m1bY2NX', // Stripe Price ID for the product/service
        quantity: 1,
      },
    ]

    try {
      const { sessionId, checkoutError } =
        await createOneTimeCheckoutSession(lineItems)

      if (!sessionId || checkoutError) {
        throw new Error(checkoutError || 'Failed to create checkout session!')
      }

      const stripe = await stripePromise
      if (!stripe) throw new Error('Failed to load Stripe!')

      const { error } = await stripe.redirectToCheckout({ sessionId })

      if (error) {
        if (error instanceof Error) throw new Error(error.message)
      } else {
        throw error
      }
    } catch (error) {
      throw new Error(error?.message || 'Failed to create checkout session!')
    }
  }

  return (
    <button
      onClick={handlePayment}
      className="bg-blue-500 text-white p-2 rounded"
    >
      Pay Now
    </button>
  )
}
