import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import logo from '@/public/skimmingPool.jpg'
import Image from 'next/image'

export const metadata = {
  title: 'About',
}

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Premium Pool Service
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Family-Owned & Trusted
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                We’re a family-owned and state-licensed pool service company
                serving Spring Hill, Brooksville, Hernando Beach, Weeki Wachee,
                and all of Hernando County. With our commitment to exceptional
                service and no contracts, our clients trust us for the best
                pricing and hassle-free maintenance plans.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            alt="Infinity Pool"
            src={logo}
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                We take pride in offering all-inclusive maintenance packages
                starting at just{' '}
                <strong className="font-semibold text-blue-600">
                  $100/month
                </strong>
                , and our promise is simple: no contracts, ever! Whether you
                need routine maintenance or specialized services, we have you
                covered.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Free Estimates.
                    </strong>{' '}
                    We always offer free estimates, so you can explore our
                    services risk-free.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      No Contracts.
                    </strong>{' '}
                    Unlike many competitors, we offer flexible service plans
                    with no long-term commitments.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Satisfaction Guaranteed.
                    </strong>{' '}
                    If you’re not <em>100% satisfied</em> with our service, you
                    don’t pay—simple as that!
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                We’re committed to offering the best pool service in Hernando
                County, and our team is ready to exceed your expectations.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Your Local Pool Experts
              </h2>
              <p className="mt-6">
                Trust Sapphire Pools for all your pool care needs, and
                experience hassle-free service at its best.{' '}
                <em className="italic font-semibold text-blue-600">
                  State License# CPC1458976
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
