import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo_noBG.png'

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image src={logo} height="80" quality={100} alt="Sapphire Pools" />
    </Link>
  )
}

export default Logo
