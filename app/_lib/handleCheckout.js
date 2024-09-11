'use server'

import { currentUser } from '@clerk/nextjs/server'
import { clerkClient } from '@clerk/clerk-sdk-node'

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
})

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

  await clerkClient.users.updateUserMetadata(user.id, {
    publicMetadata: {
      type: session.mode,
      checkoutSessionIds: [...previousCheckoutSessionIds, sessionId],
      stripeCustomerId: session.customer,
    },
  })

  return { success: true, error: null }
}
