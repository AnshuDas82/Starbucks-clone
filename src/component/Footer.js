import React from 'react'
import logo from './assets/starbucks-logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import apple from './assets/appstore.png'
import android from './assets/appstoreAndroid.png'

const Footer = () => {
  return (
    <div className='h-[800px] bg-[#0e382c] flex pt-32 text-white justify-evenly'>

    <div className=""><img src={logo}/></div>  
    
    <div className="">
        <p className='font-bold text-lg'>About Us</p>
        <p className='pt-5'>Our Heritage</p>
        <p className='pt-5'>CofeeHouse</p>
        <p className='pt-5'>Our Company</p>
    </div>

    <div className="">
        <p className='font-bold text-lg'>Responsibility</p>
        <p className='pt-5'>Diversity</p>
        <p className='pt-5'>Community</p>
        <p className='pt-5'>Ethical Sourcing</p>
        <p className='pt-5'>Environmental Stewardship</p>
        <p className='pt-5'>Learn More</p>
    </div>

    <div className="">
        <p className='font-bold text-lg'>Quick Links</p>
        <p className='pt-5'>Privacy Policy</p>
        <p className='pt-5'>FAQs</p>
        <p className='pt-5'>Terms and Conditions</p>
        <p className='pt-5'>Starbucks India Mobile Terms of use</p>
        <p className='pt-5'>Customer Service</p>
        <p className='pt-5'>starbucks rewards Day offer</p>
        <p className='pt-5'>Delivery</p>
        <p className='pt-5'>Season's Gifting</p>
        <p className='pt-5'>Offer of Beverage Subscription at StarBucks</p>
        <p className='pt-5'>Beverage Subscription</p>
    </div>

    <div className="">
        <p className='font-bold text-lg'>Social Media</p>
        <div className="white flex justify-around pt-5">
        <FaInstagram />
        <FaFacebookF />
        <FaTwitter />
        </div>
    </div>

    <div className="">
        <img src={apple}/>
        <img src={android}/>
    </div>

    </div>
  )
}

export default Footer
