'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useClerk } from '@clerk/nextjs'
import { useSearchParams } from 'next/navigation'
import { retrieveStripeCheckoutSession } from '@/app/_lib/handleCheckout'
import { useRouter } from 'next/navigation'

export default function Checkout() {
  const router = useRouter()
  const { session } = useClerk()
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('sessionId')

  useEffect(() => {
    if (!sessionId || !session) return

    retrieveStripeCheckoutSession(sessionId).then(({ success, error }) => {
      if (success) {
        router.refresh()
      }

      if (error) {
        console.error('Failed to retrieve checkout session!')
      }
    })
  }, [sessionId, session, router])

  return (
    <section className="flex items-center justify-center h-screen">
      <div className=" px-7">
        <h1 className="text-sm font-medium text-blue-600">
          Payment successful
        </h1>
        <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Thanks for joining.
        </p>
        <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
          Our office will reach out shortly to schedule your first visit.
        </p>

        <Link
          href="/"
          className="mt-8 flex w-fit gap-2 rounded-md bg-blue-500 px-3 py-1 text-white no-underline hover:bg-blue-600 hover:no-underline"
        >
          <span>Home</span>
        </Link>
      </div>
    </section>
  )
}
