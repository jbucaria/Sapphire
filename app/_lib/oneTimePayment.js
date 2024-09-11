'use server'

import { currentUser } from '@clerk/nextjs/server'
import { clerkClient } from '@clerk/clerk-sdk-node'

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
})
export async function createStripeCheckoutPayment(lineItems) {
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
    customer: user.stripeCustomerId || undefined, // Use existing customer ID if available
    invoice_creation: {
      enabled: true,
    },
    customer_email: user.stripeCustomerId
      ? undefined
      : user.emailAddresses[0].emailAddress,
    payment_method_types: ['card'], // Optional: specify allowed payment methods (e.g., card)
  })

  return { sessionId: session.id, checkoutError: null }
}

export async function retrieveStripeCheckoutSession(sessionId) {
  if (!sessionId) {
    return { success: false, error: 'No session ID provided.' }
  }

  const user = await currentUser()
  if (!user) {
    return { success: false, error: 'You need to sign in first.' }
  }

  const previousCheckoutSessionIds = Array.isArray(
    user.publicMetadata.checkoutSessionIds
  )
    ? user.publicMetadata.checkoutSessionIds
    : []

  if (previousCheckoutSessionIds.includes(sessionId)) {
    return {
      success: true,
      error: null,
    }
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId)

  // Update the user's metadata with one-time payment details
  await clerkClient.users.updateUserMetadata(user.id, {
    publicMetadata: {
      purchaseAmount: session.amount_total,
      type: session.mode, // "payment" in this case
      checkoutSessionIds: [...previousCheckoutSessionIds, sessionId],
      stripeCustomerId: session.customer,
      test: 'test',
    },
  })

  return { success: true, error: null }
}
