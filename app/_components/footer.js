import instagramLogo from '@/public/instagramLogo.svg'
import xLogo from '@/public/xLogo.svg'
import youTubeLogo from '@/public/youtube_2504965.svg'

import googleBuisnessLogo from '@/public/googleBuisness.svg'
import facebookLogo from '@/public/facebook_2504903.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="z-10 flex flex-col">
      <div className="flex items-center justify-around h-20">
        <ul className="flex gap-5">
          <li className="w-10">
            <a href="https://x.com/PoolSapphire">
              <Image src={xLogo} height={50} width={50} alt="x-logo" />
            </a>
          </li>
          <li className="w-10">
            <a href="https://www.facebook.com/profile.php?id=100063222940299">
              <Image
                src={facebookLogo}
                height={50}
                width={50}
                alt="facebook-logo"
              />
            </a>
          </li>
          <li className="w-10">
            <a href="https://www.youtube.com/channel/UCuO070CW62Pz5iOzsFo8gHA?view_as=subscriber">
              <Image
                src={youTubeLogo}
                height={50}
                width={50}
                alt="youtube-logo"
              />
            </a>
          </li>
          <li className="w-10">
            <a href="https://www.instagram.com/sapphirepoolcompany/">
              <Image
                src={instagramLogo}
                height={50}
                width={50}
                alt="instagram-logo"
              />
            </a>
          </li>
          <li className="w-10">
            <a href="https://www.google.com/maps/place/Sapphire+Pool+Company,+LLC/@28.5639113,-82.6628078,10z/data=!3m1!4b1!4m5!3m4!1s0x88e81f50ab9d1093:0x562d45a41f3bf9d5!8m2!3d28.564199!4d-82.3826174">
              <Image
                src={googleBuisnessLogo}
                height={50}
                width={50}
                alt="google-buisness-logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
