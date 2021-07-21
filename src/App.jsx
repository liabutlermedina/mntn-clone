import React from 'react'
import Hero from './components/Hero'
import PostLeft from './components/PostLeft'
import PostRight from './components/PostRight'
import ThirdPost from './components/ThirdPost'
import Footer from './components/Footer'

export default () => {
  return (
    <main className='relative px-8 py-6 md:px-12 md:py-8 lg:px-16 lg:py-12 xl:px-20 xl:py-16 bg-[#0b1d26]'>
      <Hero />
      <PostLeft />
      <PostRight />
      <ThirdPost />
      <Footer />
    </main>
  )
}
