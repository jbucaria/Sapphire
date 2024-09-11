import { SignUp } from '@clerk/nextjs'
import Header from '@/app/_components/header'

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen mt-44 sm:mt-16">
      <SignUp />
    </div>
  )
}
