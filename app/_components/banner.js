import { XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function Banner() {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-none px-6 py-2.5 sm:px-3.5 sm:before:flex-1 rounded-md">
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div />
      </div>
      <div
        aria-hidden="true"
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div />
      </div>
      <div className="relative flex flex-wrap items-center gap-x-4 gap-y-2 overflow-hidden w-full">
        <div className="sm:flex sm:justify-center w-full animate-scroll sm:animate-none my-5">
          <p className="text-2xl leading-6 text-black inline-block whitespace-nowrap">
            <strong className="font-bold">Free Estimates</strong>
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>
            <strong className="font-bold">No Contracts</strong>
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>
            <strong className="font-bold">Family Owned and Operated</strong>
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>
            <strong className="font-bold">Monthly Maintenance Programs</strong>
          </p>
        </div>
        <div className="flex items-center justify-center w-full">
          <a
            href="/contact"
            className=" rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Free Estimate <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="flex flex-1 justify-end"></div>
    </div>
  )
}
