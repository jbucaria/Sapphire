// subscriptionCheckout.js

import { createStripeCheckoutSubscription } from '@/app/_lib/createSubscriptionAction'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export async function handleSubscriptionCheckout(lineItems) {
  try {
    const { sessionId, checkoutError } =
      await createStripeCheckoutSubscription(lineItems)

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
