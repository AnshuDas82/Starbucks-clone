import React from 'react'
import Bestseller from './assets/Bestseller.jpg'
import Drinks from './assets/Drinks.jpg'
import Food from './assets/Food.jpg'
import Merch from './assets/Merchandise.jpg'
import cofeea from './assets/CoffeeAtHome.jpg'
import readyto from './assets/ReadyToEat.jpg'

const Curations = () => {
  return (
    <div className='w-[1300px] mx-auto mt-16 h-60'>
      <div className="text-2xl font-bold pl-3 pb-10">
        Handcrafted Curations
      </div>
      <div className="flex justify-between">
        <div className="size-28 text-center">
          <img className='rounded-full' src={Bestseller} />
          Bestseller
        </div>
        <div className="size-28 text-center">
        <img className='rounded-full' src={Drinks} />
        Drinks
        </div>
        <div className="size-28 text-center">
        <img className='rounded-full' src={Food} />
        Food
        </div>
        <div className="size-28 text-center">
        <img className='rounded-full' src={Merch} />
        Merchandise
        </div>
        <div className="size-28 text-center">
        <img className='rounded-full' src={cofeea} />
        Coffee at Home
        </div>
        <div className="size-28 text-center">
        <img className='rounded-full' src={readyto} />
        Ready to eat
        </div>
      </div>
    </div>
  )
}

export default Curations
