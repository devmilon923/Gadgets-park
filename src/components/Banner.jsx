import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from '../assets/banner.jpg'
export default function Banner() {
  return (
    <div className='bg-violet-700 lg:w-[90%] mx-auto rounded-b-xl text-center relative mb-52 lg:mb-96'>
      <div className='space-y-4 lg:w-3/5 mx-auto px-2 lg:pb-40 pb-36 pt-32'>
        <h1 className='text-white lg:text-5xl text-3xl font-extrabold'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
        <p className='text-white lg:text-lg'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
        <Link to={'dashboard/cart'} className='btn bg-white px-5 rounded-full text-violet-700'>Shop Now</Link>
      </div>

      <div className='border border-white rounded-xl p-5 bg-blur absolute lg:w-6/12 w-[90%] mx-auto transform lg:translate-x-[50%] lg:translate-y-[-22%] translate-x-[5%] translate-y-[-37%]'>
<img src={bannerImg} className='lg:h-96 rounded-xl w-full lg:object-cover object-contain' alt="" />
      </div>
    </div>
  )
}
