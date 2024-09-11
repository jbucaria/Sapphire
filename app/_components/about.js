import Image from 'next/image'
import poolStairs from '@/public/poolstairs.jpg'
import Button from '@/app/_components/button'

export default function About() {
  return (
    <div className="sm:grid sm:grid-cols-2 py-5 ">
      <div className="flex flex-col px-10 justify-center">
        <h1 className="mt-5 text-blue-800 font-bold text-xl">
          Welcome to Sapphire Pool&apos;s
        </h1>
        <h2 className="uppercase mb-5 text-blue-500 font-bold">who we are</h2>
        <p className=" text-base md:text-lg text-gray-700 leading-relaxed">
          We are a state licensed, family owned and operated full service pool
          company. We specialize in providing our clients with{' '}
          <strong className="font-semibold text-blue-600">
            the best in service and pricing
          </strong>
          , all under one roof. We always offer{' '}
          <strong className="font-semibold text-blue-600">
            free estimates
          </strong>{' '}
          and{' '}
          <strong className="font-semibold text-blue-600">no contracts</strong>{' '}
          with our maintenance plans. Our promise to you is simple: If
          you&apos;re not{' '}
          <strong>
            <em className="italic">100% satisfied</em> with us, you don&apos;t
            pay!{' '}
          </strong>
          <em className="italic font-semibold text-blue-600">
            State License# CPC1458976
          </em>
        </p>
        <div className="flex items-center justify-center mb-3">
          <Button link="/about" width="w-1/3">
            Read More
          </Button>
        </div>
      </div>
      <div className="">
        <Image
          src={poolStairs}
          alt="cleaning-pool"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}
