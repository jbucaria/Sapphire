'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import { useClerk, useUser } from '@clerk/clerk-react'
import { useRouter } from 'next/navigation'
import MakePaymentButton from './makePaymentButton'

const chemicalMaint = [
  'test pool water',
  'empty skimmer baskets',
  'backwash/clean filter',
  'maintain water health',
  'inspect equipment issues',
  'send service report',
]
const weeklyMaint = [
  'verify cleaner operation',
  'brush pool surfaces',
  'net/skim pool',
  'treat algae issues',
]
const repairs = [
  'pumps',
  'filters',
  'heaters',
  'chlorinators',
  'salt water generators',
  'timers',
  ' pool/spa lights',
  'valves/pvc pipe',
  ' automation',
]

export default function Example({
  handleTier1,
  handleTier2,
  handleTier3,
  handleTier4,
}) {
  const { openSignIn } = useClerk()
  const { user } = useUser()
  const router = useRouter()

  function redirectToAnotherPage() {
    router.push('/login')
  }

  return (
    <main>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-blue-700 sm:text-6xl">
              Maintenance Plans
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 capitalize">
                chemical maintenance
              </h3>

              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-sky-600">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {chemicalMaint.map(feature => (
                  <li key={feature} className="flex gap-x-3 capitalize">
                    <CheckIcon
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-sky-600"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    Monthly Cost
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      $100
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      USD
                    </span>
                  </p>

                  <button
                    onClick={!user ? redirectToAnotherPage : handleTier1}
                    className="mt-10 block w-full rounded-md bg-sky-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    Purchase Plan
                  </button>
                  {/* <button
                    onClick={handleTier3}
                    className="mt-10 block w-full rounded-md bg-sky-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    Monthly Plan
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 capitalize">
                weekly maintenance
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Plan includes everything from the Chemical Maintenance plan plus
                these additional services
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-sky-600">
                  Also included
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {weeklyMaint.map(feature => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-sky-600"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600 capitalize">
                    monthly cost
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      $140
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      USD
                    </span>
                  </p>
                  <button
                    onClick={!user ? redirectToAnotherPage : handleTier1}
                    className="mt-10 block w-full rounded-md bg-sky-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    Purchase Plan
                  </button>
                  {/* <button
                    onClick={handleTier4}
                    className="mt-10 block w-full rounded-md bg-sky-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    Monthly Plan
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-20 text-3xl font-bold tracking-tight text-blue-700 sm:text-6xl">
              Pool Equipment
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 capitalize">
                Repairs & Installations
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                We can repair, replace, or install any and all pool equipment,
                to include:
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-sky-600">
                  To include
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {repairs.map(feature => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-sky-600"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className=" sm:flex sm:justify-center sm:items-center -mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className=" rounded-2xl bg-gray-50 sm:bg-none py-5 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <a
                    href="#"
                    className=" block w-full rounded-md bg-sky-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    Request Estimate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
