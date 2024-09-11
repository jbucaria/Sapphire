'use client'

import Image from 'next/image'
import { getReviews } from '../_lib/getReviews'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import leftArrow from '@/public/arrow-left.svg'
import rightArrow from '@/public/right-arrow.svg'

export default function Reviews({ reviews }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const { author_name, profile_photo_url, rating, text } = reviews[currentSlide]

  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide(prev => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="text-white relative isolate overflow-hidden bg-gradient-to-b from-blue-700 via-sky-600 to-sky-400  lg:px-8 my-5">
      <div className=" mx-auto max-w-2xl lg:max-w-4xl">
        <div className="p-5 text-center">
          <a href="/reviews">
            <h1 className="uppercase font-extrabold text-2xl mb-5 tracking-widest">
              here from our customers
            </h1>
          </a>
          <h2 className="text-center text-3xl">
            {rating === 5 ? '⭐️ ⭐️ ⭐️ ⭐️ ⭐️' : ''}
          </h2>

          <div key={author_name} className="mt-10">
            <div className="text-white line-clamp-5 overflow-auto overflow-x-hidden text-center text-xl font-semibold leading-8  sm:text-2xl sm:leading-9 tracking-wide">
              <p>{text}</p>
            </div>

            <div className="">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-white">{author_name}</div>
                <svg
                  width={3}
                  height={3}
                  viewBox="0 0 2 2"
                  aria-hidden="true"
                  className="fill-gray-900"
                ></svg>
                <Image
                  width={36}
                  height={36}
                  className="h-8 w-8 rounded-full "
                  src={profile_photo_url}
                  alt="User Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
