import { Manrope } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'

const josefin = Manrope({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

import '@/app/_styles/globals.css'
import Header from '@/app/_components/header'
import Footer from '@/app/_components/footer'

export const metadata = {
  title: {
    template: '%s | Sapphire Pools',
    default: 'Welcome | Sapphire Pools',
  },
  description:
    'Trusted family-owned pool service company in Hernando County, FL. Offering all-inclusive maintenance packages starting at $140/month. No contracts, free estimates, and satisfaction guaranteed! Serving Spring Hill, Brooksville, Hernando Beach, Weeki Wachee, and surrounding areas.',
}

export default async function RootLayout({ children }) {
  const user = await currentUser()

  const stripeSession = user?.publicMetadata?.stripeCustomerId || null

  return (
    <ClerkProvider>
      <html lang="en" className="h-full bg-gray-100 ">
        <body
          className={`${josefin.className} h-full  relative font-sans antialiased`}
        >
          <Header stripeSessionId={stripeSession} />
          <div className="flex-1 ">
            <main className=" mx-auto w-full">{children}</main>
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
