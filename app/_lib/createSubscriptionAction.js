'use server'

import { currentUser } from '@clerk/nextjs/server'

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
})

export async function createStripeCheckoutSubscription(lineItems) {
  const user = await currentUser()

  if (!user) {
    return { sessionId: null, checkoutError: 'You need to sign in first.' }
  }

  if (user.publicMetadata.type === 'subscription') {
    return {
      sessionId: null,
      redirectUrl: 'localhost:3000', // Replace with your desired URL
      checkoutError: 'You are already subscribed to a plan.',
    }
  }
  const origin = process.env.NEXT_PUBLIC_SITE_URL

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: lineItems,
    success_url: `${origin}/checkout?sessionId={CHECKOUT_SESSION_ID}`,
    cancel_url: origin,
    customer: user.stripeCustomerId || undefined,
    customer_email: user.stripeCustomerId
      ? undefined
      : user.emailAddresses[0].emailAddress,
  })

  return { sessionId: session.id, checkoutError: null, success: true }
}
