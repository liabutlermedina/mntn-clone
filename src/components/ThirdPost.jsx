import React from 'react'
import third from '../assets/03.png'
import arrow2 from '../assets/arrow2.svg'

export default () => {
  return (
    <>
      <div className='max-w-6xl mx-auto relative mt-14 text-white'>
        <div className='flex md:flex-row flex-col'>
          <div className='flex-1 md:py-10 xl:py-36 px-4 md:px-20 relative'>
            <h1 className='absolute opacity-10 text-[90px] lg:text-[100px] xl:text-9xl font-Gilroy font-bold left-0 top-0 xl:mt-24 hidden sm:block'>
              03
            </h1>
            <div className='flex items-center gap-6'>
              <div className='bg-yellow-300 h-[2px] w-16 mb-[11px]'></div>
              <p className='text-yellow-300 text-xs lg:text-sm xl:text-base font-semibold'>
                WHERE YOU GO IS THE KEY
              </p>
            </div>
            <h1 className='font-Chronichle font-medium text-3xl lg:text-5xl xl:text-7xl'>
              Understand Your Map & Timing
            </h1>
            <p className='text-xs lg:text-sm xl:text-base hidden sm:block'>
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you – novice, moderate, advanced moderate, expert, or expert
              backpacker?
            </p>
            <div className='flex items-center gap-2 xl:gap-4 text-yellow-300 cursor-pointer'>
              <p className='font-semibold text-xs lg:text-sm xl:text-base'>
                read more
              </p>
              <img
                src={arrow2}
                alt=''
                className='xl:w-6 w-4 mb-[13px] xl:mb-[10px]'
              />
            </div>
          </div>
          <img
            src={third}
            alt=''
            className='object-cover md:w-64 h-40 md:object-center object-bottom md:h-full lg:w-96 xl:w-[490px]'
          />
        </div>
      </div>
    </>
  )
}
