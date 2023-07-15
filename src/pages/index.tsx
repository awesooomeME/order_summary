import Image from 'next/image'
import { Red_Hat_Display } from 'next/font/google'

import hero from '../../public/illustration-hero.svg'
import music from '../../public/icon-music.svg'
import bg_desktop from '../../public/pattern-background-desktop.svg'
import bg_mobile from '../../public/pattern-background-mobile.svg'

const red_hat = Red_Hat_Display({ subsets: ['latin'], weight: ['500', '700', '900'] })

export default function Home() {
  return (
    <main className={`${red_hat.className} h-screen w-screen
      flex flex-col justify-center items-center overflow-hidden
      bg-pale_blue relative`}>
      <div className='absolute w-full top-0 left-0'>
        {/* <Image src={bg_desktop} alt='' className='w-screen h-auto'/> */}
        <picture>
          <source srcSet={bg_desktop} media='(min-width: 375px)'/>
          <Image src={bg_mobile} alt='' className='w-screen h-auto'/>
        </picture>
      </div>
      <div className='w-[90%] md:w-1/4 h-[60%] md:h-3/4 bg-white rounded-xl flex flex-col pb-10 shadow-xl z-[10]'>
        <div>
          <Image src={hero} alt='Hero' className='w-full h-auto mb-5 md:mb-10 rounded-xl'/>
        </div>
        <div className='flex flex-col items-center px-5 md:px-10 justify-between flex-1'>
          <h1 className='font-bold text-2xl md:text-3xl md:mb-5'>
            Order Summary
          </h1>
          <h1 className='text-desaturated_blue text-center text-md md:text-xl'>
            You can now listen to millions of songs, audiobooks, and podcasts
            on any device anywhere you like!
          </h1>
          <div className='flex justify-between w-full bg-pale_blue/20 px-2 py-2 rounded-xl'>
            <div className='flex gap-4 items-center'>
              <Image src={music} alt='music icon' className='h-10 w-auto'/>
              <div className='text-s md:text-xl'>
                <h1 className='font-semibold'>
                  Annual Plan
                </h1>
                <h1 className='text-desaturated_blue'>
                  $59.99/year
                </h1>
              </div>
            </div>
            <button className='text-bright_blue underline'>
              Change
            </button>
          </div>
          <button className='w-full bg-bright_blue text-white rounded-xl py-3 shadow-xl'>
            Proceed to payment
          </button>
          <button className='text-desaturated_blue py-3'>
            Cancel Order
          </button>
        </div>
      </div>
    </main>
  )
}
