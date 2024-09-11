import Image from 'next/image'
import cleanPool1 from '@/public/cleanPool1.jpg'
import cleanPool2 from '@/public/cleanPool2.jpg'
import cleanPool3 from '@/public/cleanPool3.jpg'
import sparkilingPool from '@/public/sparklingPool.jpg'

export default function Category() {
  return (
    <div className="bg-gray-100  ">
      <div className="text-center my-10">
        <h1 className="text-3xl font-bold tracking-widest text-blue-900 sm:text-6xl uppercase leading-tight sm:leading-snug">
          We Make Your Life Easier
        </h1>
      </div>
      <div className="grid sm:grid-rows-2 sm:grid-flow-col gap-3 sm:h-[600px]">
        <div className="row-span-3 border">
          <Image
            src={cleanPool1}
            alt="cleaning-pool"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="sm:col-span-3 ">
          <Image
            src={cleanPool2}
            alt="cleaning-pool"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="sm:row-span-2 col-span-1">
          <Image
            src={cleanPool3}
            alt="cleaning-pool"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="sm:row-span-2 col-span-2">
          <Image
            src={sparkilingPool}
            alt="cleaning-pool"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
