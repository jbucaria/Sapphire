'use client'

import logo from '@/public/logo_noBG.png'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createCustomerPortalSession } from '../_lib/createCustomerPortalSession'

import { SignOutButton, UserButton, useAuth } from '@clerk/nextjs'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'About', href: '/about' },
]

export default function Header({ stripeSessionId }) {
  const { isSignedIn } = useAuth()
  const router = useRouter()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  async function handleManageBilling() {
    // Call the server action to create the portal session
    const { url, error } = await createCustomerPortalSession()

    if (error) {
      console.error('Failed to create customer portal session:', error)
      return
    }

    // Redirect the user to the Stripe customer portal
    if (url) {
      router.push(url)
    }
  }

  return (
    <header className=" fixed inset-x-0 top-0 z-50 text-white border-b bg-slate-800 opacity-70 ">
      <nav aria-label="Global" className=" p-6 lg:px-8">
        <div className="sm:grid-cols-3 sm:grid gap-4">
          <div className="flex lg:flex-1 justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image alt="" src={logo} className="h-12 w-auto " />
            </Link>

            <div
              className={` ${mobileMenuOpen ? 'hidden' : 'flex lg:hidden justify-end'}`}
            >
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:justify-center lg:gap-x-12">
            {navigation.map(item => {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-semibold leading-6 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
          <div className="hidden lg:flex lg:flex-1 sm:justify-end items-center gap-5 capitalize ">
            {stripeSessionId ? (
              <button
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 capitalize  hover:text-blue-600 cap"
                onClick={() => handleManageBilling(router)}
              >
                Manage Billing
              </button>
            ) : null}
            {!isSignedIn ? (
              <>
                <Link
                  href="/signup"
                  className="text-lg font-semibold leading-6 "
                >
                  Sign Up <span aria-hidden="true"></span>
                </Link>
                <Link
                  href="/login"
                  className="text-lg font-semibold leading-6 mr-5"
                >
                  Log in <span aria-hidden="true"></span>
                </Link>
              </>
            ) : null}
            <UserButton />
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-1/2 overflow-y-auto bg-slate-800 opacity-90 text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 "
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {stripeSessionId ? (
                <button
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 capitalize  hover:text-blue-600 cap"
                  onClick={() => handleManageBilling(router)}
                >
                  Manage Billing
                </button>
              ) : null}
              {!isSignedIn ? (
                <div className="space-y-2  -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50">
                  <div className="mb-3">
                    <Link
                      href="/signup"
                      className="text-lg font-semibold leading-6 "
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign Up <span aria-hidden="true"></span>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/login"
                      className="text-lg font-semibold leading-6 mr-5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Log in <span aria-hidden="true"></span>
                    </Link>
                  </div>
                </div>
              ) : null}
              <div className="mt-3">
                <UserButton />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
