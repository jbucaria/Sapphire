import Image from 'next/image'
import pentair from '@/public/pentair.png'
import hayward from '@/public/hayward.png'
import fluidra from '@/public/fluidra_blue.png'

export default function Vendor() {
  return (
    <div className="bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-bold tracking-tight text-blue-700 sm:text-3xl">
          Certified warranty center for Pentair, Hayward, & Fluidra.
        </h2>
        <div className="mx-auto mt-10 flex flex-col sm:flex-row items-center justify-around gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <a href="https://www.pentair.com/en-us/products/residential/pool-spa-equipment/pool-pumps.html">
            <Image
              alt="Pentair"
              src={pentair}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
          </a>
          <a href="https://hayward.com/">
            <Image
              alt="Reform"
              src={hayward}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
          </a>
          <a href="https://www.fluidrausa.com/en">
            <Image
              alt="Tuple"
              src={fluidra}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
