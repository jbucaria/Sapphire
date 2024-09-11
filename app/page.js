import Reviews from '@/app/_components/reviews'
import About from '@/app/_components/about'
import Hero from '@/app/_components/hero'
import Vendor from '@/app/_components/vendor'
import PhotoSection from '@/app/_components/photoSection'
import getReviews from '@/app/_lib/getReviews'

export default async function Page() {
  return (
    <main>
      <Hero />
      <About />
      <PhotoSection />
      <Vendor />
      <Reviews />
    </main>
  )
}
