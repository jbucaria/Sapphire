'use client'

import { useRouter } from 'next/navigation'
import { createCustomerPortalSession } from '@/app/_lib/createCustomerPortalSession'

export default function ManageBilling() {
  const router = useRouter()

  async function handleManageBilling() {
    const { url, error } = await createCustomerPortalSession(
      window.location.href
    )

    if (error) {
      console.error('Failed to create customer portal session:', error)
      return
    }

    // Redirect to the Stripe customer portal
    if (url) {
      router.push(url)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleManageBilling}
      >
        Manage Billing
      </button>
    </div>
  )
}
