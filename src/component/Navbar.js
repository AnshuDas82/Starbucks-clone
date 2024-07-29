import React from 'react'
import logo from './assets/starbucks-logo.png'
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='flex justify-between h-20 items-center sticky bg-white dark:bg-black top-0 z-10'>
        {/* div for logo */}
        <div className="flex list-none ">
        <img className=" size-10 ml-32 "src={logo}/>
        <li href="#" className='ml-16'>Home</li>
        <li href="#" className='ml-16'>Gift</li>
        <li href="#" className='ml-16'>Order</li>
        <li href="#" className='ml-16'>Pay</li>
        <li href="#" className='ml-16'>Store</li>
      </div>
      {/* div for search box */}
      <div className='flex bg-white rounded-full shadow-md'>
      <CiSearch className='mt-1 size-6 rounded-l-full'/>
      <input className='w-56 h-8 text-xs outline-none rounded-full' type="text" placeholder='Looking for someting specific?'/>
      </div>
      {/* profile will be here */}
      <div className='  rounded-full mr-32 '>
      <CgProfile className='size-7 pl-1 '/> 
      </div>
    </div>
  )
}

export default Navbar
