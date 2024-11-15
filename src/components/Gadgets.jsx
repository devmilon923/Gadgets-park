import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Gadgets() {
  return (
    <div className='pb-12'>
      <h1 className='lg:text-5xl text-2xl font-extrabold text-center mb-12'>Explore Cutting-Edge Gadgets</h1>
      <div className='grid lg:grid-cols-4 grid-cols-1 px-3 justify-between gap-6'>
        <Sidebar></Sidebar>
        
         <Outlet></Outlet>
            
        
      </div>
    </div>
  )
}
