'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getReviews } from '@/app/_lib/getReviews'
import leftArrow from '@/public/arrow-left.svg'
import rightArrow from '@/public/right-arrow.svg'

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [reviews, setReviews] = useState([]) // State to hold reviews
  const [loading, setLoading] = useState(true) // State for loading indicator
  const [error, setError] = useState(null) // State to handle errors

  useEffect(() => {
    getReviews()
      .then(data => {
        setReviews(data)
      })
      .catch(err => console.error('Error fetching reviews:', err))
  }, [])

  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide(prev => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  console.log('reviews', reviews)

  // Ensure reviews are available before rendering
  if (!reviews.length) return null

  const { author_name, profile_photo_url, rating, text } = reviews[currentSlide]

  return (
    <section className="text-white relative isolate overflow-hidden bg-gradient-to-b from-blue-700 via-sky-600 to-sky-400 lg:px-8 my-5">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="p-5 text-center h-96">
          <a href="/reviews">
            <h1 className="uppercase font-extrabold text-2xl mb-5 tracking-widest">
              Hear from our customers
            </h1>
          </a>
          <h2 className="text-center text-3xl">
            {rating === 5 ? '⭐️ ⭐️ ⭐️ ⭐️ ⭐️' : ''}
          </h2>

          <div key={author_name} className="mt-10 h-28">
            <div className=" line-clamp-3 overflow-auto overflow-x-hidden text-white text-center text-xl font-semibold leading-8 sm:text-2xl sm:leading-9 tracking-wide">
              <p>{text}</p>
            </div>
          </div>

          {/* Arrows for navigation */}
          <div className="flex justify-between mt-5">
            <button
              onClick={handlePrev}
              aria-label="Previous Review"
              className="focus:outline-none"
            >
              <Image src={leftArrow} width={36} height={36} alt="Previous" />
            </button>
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-white">{author_name}</div>
              <Image
                width={36}
                height={36}
                className="h-8 w-8 rounded-full"
                src={profile_photo_url}
                alt="User Profile"
              />
            </div>
            <button
              onClick={handleNext}
              aria-label="Next Review"
              className="focus:outline-none"
            >
              <Image src={rightArrow} width={36} height={36} alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
