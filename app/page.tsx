import React from 'react'
import Image from 'next/image'
import Searchbar from '@/components/Searchbar'
import HeroCarousel from '@/components/HeroCarousel'
import { getAllProducts } from '@/lib/actions'
import ProductCard from '@/components/ProductCard'

const Home = async () => {

  const allProducts = await getAllProducts();

  return (
    <>
    <section className='px-6 md:px-20 py-24 bg-gradient-to-br from-amber-100/70 via-amber-500/70 to-sky-600/90'>
      <div className="flex max-xl:flex-col gap-16">
        <div className="flex flex-col justify-center">
          <p className='small-text rounded-full p-1'>
            Search, Shop, and Save right now:
            <Image 
            src="/assets/icons/arrow-right.svg"
            alt="arrow-right"
            width={16}
            height={16} />
          </p>

          <h1 className='head-text'>
            <span className='text-black/75'>Experience the Strength of</span> Price
            <span className='text-amber-500'>Me</span>
          </h1>

          <p className='mt-6 font-bold opacity-70 text-black'>
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
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
    </section>
    </>
  )
}

export default Home
