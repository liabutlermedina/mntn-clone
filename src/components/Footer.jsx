import React from 'react'

export default () => {
  return (
    <>
      <div className='max-w-6xl mx-auto relative mt-10 md:mt-36 flex flex-wrap justify-between text-white'>
        <div className='md:w-3/6'>
          <h1 className='font-Chronichle font-bold text-base lg:text-xl xl:text-3xl md:text-left sm:text-center'>
            MNTN
          </h1>
          <p className='max-w-[280px] text-xs lg:text-sm xl:text-base md:text-left sm:text-center'>
            Get out there & discover your next slope, mountain & destination!
          </p>
          <p className='mt-28 opacity-50 text-xs lg:text-sm xl:text-base hidden md:block'>
            Copyright 2019 MNTN, Inc. Terms & Privacy
          </p>
        </div>
        <div className='md:mt-0 mt-10'>
          <h1 className='text-yellow-300 md:font-Gilroy md:font-bold text-xs md:text-sm xl:text-lg lg:text-base mb-3'>
            More on The Blog
          </h1>
          <button className='text-white text-xs lg:text-sm xl:text-base block mb-2 hover:text-yellow-300'>
            About MNTN
          </button>
          <button className='text-white text-xs lg:text-sm xl:text-base block mb-2 hover:text-yellow-300'>
            Contributors & Writers
          </button>
          <button className='text-white text-xs lg:text-sm xl:text-base block mb-2 hover:text-yellow-300'>
            Write For Us
          </button>
          <button className='text-white text-xs lg:text-sm xl:text-base block mb-2 hover:text-yellow-300'>
            Contact Us
          </button>
          <button className='text-white text-xs lg:text-sm xl:text-base block mb-2 hover:text-yellow-300'>
            Privacy Policy
          </button>
        </div>
        <div className='md:mt-0 mt-10'>
          <h1 className='text-yellow-300 md:font-Gilroy md:font-bold xl:text-lg text-xs md:text-sm lg:text-base mb-3'>
            More on MNTN
          </h1>
          <button className='text-white text-xs lg:text-sm xl:text-base block mb-2 hover:text-yellow-300'>
            The Team
          </button>
          <button className='text-white text-xs lg:text-sm xl:text-base block mb-2 hover:text-yellow-300'>
            Jobs
          </button>
          <button className='text-white text-xs lg:text-sm xl:text-base block mb-2 hover:text-yellow-300'>
            Press
          </button>
        </div>
          <p className='mt-10 opacity-50 text-xs lg:text-sm xl:text-base md:hidden block'>
            Copyright 2019 MNTN, Inc. Terms & Privacy
          </p>
      </div>
    </>
  )
}
