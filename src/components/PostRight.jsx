import React from 'react'
import second from '../assets/02.png'
import arrow2 from '../assets/arrow2.svg'

export default () => {
  return (
    <>
      <div className='max-w-6xl mx-auto relative mt-14 text-white'>
        <div className='flex md:flex-row flex-col'>
          <img src={second} alt='' className='object-cover md:w-64 h-60 md:object-center md:h-full lg:w-96 xl:w-[490px] md:block hidden' />
          <div className='flex-1 md:py-10 px-4 xl:py-36 md:ml-[87px] md:pl-20 relative'>
            <h1 className='absolute opacity-10 text-[90px] lg:text-[100px] xl:text-9xl font-Gilroy font-bold left-0 top-0 xl:mt-24 hidden sm:block'>
              02
            </h1>
            <div className='flex items-center gap-6'>
              <div className='bg-yellow-300 h-[2px] w-16 mb-[11px]'></div>
              <p className='text-yellow-300 text-xs lg:text-sm xl:text-base font-semibold'>HIKING ESSENTIALS</p>
            </div>
            <h1 className='font-Chronichle font-medium text-3xl lg:text-5xl xl:text-7xl'>
              Picking the right Hiking Gear!
            </h1>
            <p className='text-xs lg:text-sm xl:text-base hidden sm:block'>
              The nice thing about beginning hiking is that you don’t really
              need any special gear, you can probably get away with things you
              already have. Let’s start with clothing. A typical mistake hiking
              beginners make is wearing jeans and regular clothes, which will
              get heavy and chafe wif they get sweaty or wet.
            </p>
            <div className='flex items-center gap-4 text-yellow-300 cursor-pointer'>
              <p className='font-semibold text-xs lg:text-sm xl:text-base'>read more</p>
              <img src={arrow2} alt='' className='xl:w-6 w-4 mb-[13px] xl:mb-[10px]' />
            </div>
          </div>
          <img src={second} alt='' className='object-cover md:w-64 h-40 h-full w-96 xl:w-[490px] sm:hidden' />
        </div>
      </div>
    </>
  )
}
