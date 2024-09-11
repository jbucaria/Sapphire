'use server'
import Stripe from 'stripe'

import { currentUser } from '@clerk/nextjs/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15', // Make sure you're using the latest version
})

export async function createCustomerPortalSession(returnUrl) {
  try {
    // Get the current authenticated user
    const user = await currentUser()

    if (!user) {
      throw new Error('You must be signed in to manage billing.')
    }

    // Assuming you store the Stripe customer ID in Clerk's publicMetadata or another source
    const stripeCustomerId = user.publicMetadata.stripeCustomerId

    if (!stripeCustomerId) {
      throw new Error('Stripe customer ID not found.')
    }

    // Create a portal session
    const session = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId, // Pass the Stripe customer ID
      return_url: returnUrl, // URL to return to after managing billing
    })

    return { url: session.url }
  } catch (error) {
    console.error('Error creating customer portal session:', error)
    return { error: error.message }
  }
}
