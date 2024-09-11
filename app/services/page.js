'use client'

import { handleSubscriptionCheckout } from '@/app/_lib/subscriptionCheckout'
import { handlePaymentCheckout } from '@/app/_lib/paymentCheckout'
import Services from '@/app/_components/services'

export default function SubscriptionDialog(props) {
  const lineItemsTier1 = [
    {
      price: 'price_1Pw0ZPRstosojHwhivfnfGjK',
      quantity: 1,
    },
  ]
  const lineItemsTier2 = [
    {
      price: 'price_1PwT8BRstosojHwhCqXRPn2T',
      quantity: 1,
    },
  ]
  const lineItemsTier3 = [
    {
      price: 'price_1PxEnMRstosojHwh9m1bY2NX',
      quantity: 1,
    },
  ]
  const lineItemsTier4 = [
    {
      price: 'price_1PxFAhRstosojHwh0GtTdZP1',
      quantity: 1,
    },
  ]

  return (
    <Services
      handleTier1={() => handleSubscriptionCheckout(lineItemsTier1)}
      handleTier2={() => handleSubscriptionCheckout(lineItemsTier2)}
      handleTier3={() => handlePaymentCheckout(lineItemsTier3)}
      handleTier4={() => handlePaymentCheckout(lineItemsTier4)}
    />
  )
}
