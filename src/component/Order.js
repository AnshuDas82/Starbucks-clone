import React from 'react'
import drink from './assets/drink.png'

const Order = () => {
  return (
    <div className='flex bg-[#006241] h-56 w-[1300px] mx-auto mt-8 rounded-md'>
      <img src={drink} className='h-56' />
      <div className="pl-16">
        <p className='pt-7'>Now Brewing</p>
        <p className='text-xl font-bold pt-4'> Starbucks Menu</p>
        <p className='pt-4'>Indulge in season's feasting! Make your sips extra special. Explore menu</p>
        <div className="pt-7">
          <p className='text-xs'>Starting from</p>
          <p className='font-bold'>RS 250</p>
        </div>
      </div>
      <div className=" flex justify-center items-center ml-auto mt-auto mr-10 text-sm mb-10 bg-[#00754a] w-44 h-10 text-white rounded-full">Order now</div>
    </div>
  )
}

export default Order
