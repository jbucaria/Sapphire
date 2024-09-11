'use server'

import { currentUser } from '@clerk/nextjs/server'
import { clerkClient } from '@clerk/clerk-sdk-node'
import Stripe from 'stripe'

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15', // Use the correct API version
})

export async function createOneTimeCheckoutSession(lineItems) {
  try {
    const user = await currentUser()

    if (!user) {
      return { sessionId: null, checkoutError: 'You need to sign in first.' }
    }

    const origin = process.env.NEXT_PUBLIC_SITE_URL

    const session = await stripe.checkout.sessions.create({
      mode: 'payment', // Change mode to "payment" for one-time payment
      line_items: lineItems,
      success_url: `${origin}/checkout?sessionId={CHECKOUT_SESSION_ID}`,
      cancel_url: origin,
      customer: user.stripeCustomerId || undefined,
      invoice_creation: {
        enabled: true,
      },
      customer_email: user.stripeCustomerId
        ? undefined
        : user.emailAddresses[0].emailAddress,
    })

    return { sessionId: session.id, checkoutError: null }
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return { error: error.message }
  }
}
