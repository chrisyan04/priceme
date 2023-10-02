import React from 'react'
import Image from 'next/image'
import Searchbar from '@/components/Searchbar'
import HeroCarousel from '@/components/HeroCarousel'

const Home = () => {
  return (
    <>
    <section className='px-6 md:px-20 py-24'>
      <div className="flex max-xl:flex-col gap-16">
        <div className="flex flex-col justify-center">
          <p className='small-text'>
            Search, Shop, and Save right now:
            <Image 
            src="/assets/icons/arrow-right.svg"
            alt="arrow-right"
            width={16}
            height={16} />
          </p>

          <h1 className='head-text'>
            <span className='opacity-80'>Experience the Strength of</span> Price
            <span className='text-primary'>Me</span>
          </h1>

          <p className='mt-6 font-bold opacity-70'>
          Self-serve, powerful product and growth analytics to increase conversion, engagement, and retention.
          </p>

          <Searchbar />
        </div>

        <HeroCarousel />
      </div>
    </section>

    <section className='trending-section'>
      <h2 className='section-text'>Trending</h2>

      <div className="flex flex-wrap gap-x-8 gap-y-16">
        {['Apple Iphone 15', 'Book', 'Sneakers'].map(
          (product) => (
            <div>{product}</div>
          )
        )}
      </div>
    </section>
    </>
  )
}

export default Home
