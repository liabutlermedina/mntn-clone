import React, { useState } from 'react'
import heroImg from '../assets/hero.png'
import cart from '../assets/cart.svg'
import arrow from '../assets/arrow.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'

export default () => {
  const [isVisible, setisVisible] = useState(false)
  const handleClick = () => setisVisible(prev => !prev)
  return (
    <>
      <div
        className={`px-8 py-6 bg-[#0b1d26] max-h-[304px] text-white absolute inset-0 ${
          isVisible && 'z-10'
        }`}
      >
        <h1 className='font-Chronichle font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl'>
          MNTN
        </h1>
        <button className='' onClick={handleClick}>
          <svg
            className='w-6 h-6 absolute right-0 top-0 mt-[31px] mr-[31px]'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <nav className='space-y-5'>
          <h1 className='font-Gilroy font-bold text-base'>
            Equipment
          </h1>
          <h1 className='font-Gilroy font-bold text-base'>
            About us
          </h1>
          <h1 className='font-Gilroy font-bold text-base'>
            Blog
          </h1>
        </nav>
      </div>
      <img src={heroImg} alt='' className='absolute inset-x-0 top-0' />
      <header className='flex justify-between items-center relative text-white'>
        <h1 className='font-Chronichle font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl'>
          MNTN
        </h1>
        <nav className='flex justify-between hidden sm:flex md:w-60 xl:w-72'>
          <h1 className='font-Gilroy font-bold text-sm lg:text-base xl:text-lg'>
            Equipment
          </h1>
          <h1 className='font-Gilroy font-bold text-sm lg:text-base xl:text-lg'>
            About us
          </h1>
          <h1 className='font-Gilroy font-bold text-sm lg:text-base xl:text-lg'>
            Blog
          </h1>
        </nav>
        <nav className='flex justify-between md:w-16 sm:w-[75px] lg:w-24 xl:w-28 items-center'>
          <button className='' onClick={handleClick}>
            <svg
              className='w-6 h-6 block md:hidden'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </button>
          <img
            src={cart}
            alt=''
            className='mb-2 lg:mb-[10px] w-3 sm:w-4 lg:w-5 xl:w-6 md:block hidden'
          />
          <h1 className='font-Gilroy font-bold xl:text-lg text-xs sm:text-sm lg:text-base md:block hidden'>
            Account
          </h1>
        </nav>
      </header>
      <div className='flex items-start mt-10 xl:mt-0 xl:items-center justify-between'>
        <div className='flex relative gap-4 mb-10 items-center origin-left ml-2 rotate-90 hidden sm:flex'>
          <p className='text-white font-Gilroy text-sm xl:text-lg font-bold mb-0'>
            Follow us
          </p>
          <img
            src={instagram}
            alt=''
            className='-rotate-90 w-4 lg:w-5 xl:w-6'
          />
          <img src={twitter} alt='' className='-rotate-90 w-4 lg:w-5 xl:w-6' />
        </div>
        <div className='max-w-[450px] lg:max-w-[600px] xl:max-w-[707px] xl:mt-28 flex justify-between relative text-white mx-auto'>
          <div className='hidden sm:block'>
            <div className='flex items-center gap-2 lg:gap-4 xl:gap-6'>
              <div className='bg-yellow-300 h-[0.5px] lg:h-[1px] xl:h-[2px] w-8 lg:w-12 xl:w-16 mb-[15px] lg:mb-[13px] xl:mb-[11px]'></div>
              <p className='text-yellow-300 font-semibold xl:text-base lg:text-sm text-xs'>
                A HIKING GUIDE
              </p>
            </div>
            <h1 className='text-[25px] lg:text-[50px] xl:text-[70px] font-Chronichle font-medium'>
              Be Prepared For The Mountains And Beyond!
            </h1>
            <div className='flex items-center gap-2 lg:gap-3 xl:gap-4'>
              <p className='text-white font-semibold xl:text-base lg:text-sm text-xs'>
                scroll down
              </p>
              <img
                src={arrow}
                alt=''
                className='lg:mb-[10px] h-4 lg:h-5 xl:h-6 mb-2.5 lg:mb-[10px]'
              />
            </div>
          </div>
        </div>
        <div className='flex hidden sm:flex gap-4 h-36 lg:h-48 xl:h-60 relative font-bold xl:mt-24'>
          <div className='flex flex-col justify-between'>
            <p className='text-white text-sm xl:text-base'>Start</p>
            <p className='pl-4 text-gray-700 text-sm xl:text-base'>01</p>
            <p className='pl-4 text-gray-700 text-sm xl:text-base'>02</p>
            <p className='pl-4 text-gray-700 text-sm xl:text-base'>03</p>
          </div>
          <div className='h-full w-[2px]'>
            <div className='xl:h-[50px] h-5 lg:h-7 bg-yellow-300 w-full'></div>
            <div className='xl:h-[180px] h-32 lg:h-40 bg-white w-full'></div>
          </div>
        </div>
      </div>
    </>
  )
}
