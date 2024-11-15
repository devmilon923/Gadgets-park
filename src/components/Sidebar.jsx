import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className='lg:col-span-1 border bg-white rounded-lg'>
          <div className='w-full grid grid-cols-1 gap-5 p-5'>
            <NavLink to='/' className={({isActive})=>`${isActive?'bg-violet-700 text-white':'bg-gray-100'} px-10 py-4 rounded-full text-center font-bold`} >All Product</NavLink>
            <NavLink to='/Laptops' className={({isActive})=>`${isActive?'bg-violet-700 text-white':'bg-gray-100'} px-10 py-4 rounded-full text-center font-bold`}>Laptops</NavLink>
            <NavLink to='/Phones' className={({isActive})=>`${isActive?'bg-violet-700 text-white':'bg-gray-100'} px-10 py-4 rounded-full text-center font-bold`}>Phones</NavLink>
            <NavLink to='/Accessories' className={({isActive})=>`${isActive?'bg-violet-700 text-white':'bg-gray-100'} px-10 py-4 rounded-full text-center font-bold`}>Accessories</NavLink>
            <NavLink to='/Smart Watches' className={({isActive})=>`${isActive?'bg-violet-700 text-white':'bg-gray-100'} px-10 py-4 rounded-full text-center font-bold`}>Smart Watches</NavLink>
            <NavLink to='/MacBook' className={({isActive})=>`${isActive?'bg-violet-700 text-white':'bg-gray-100'} px-10 py-4 rounded-full text-center font-bold`}>MacBook</NavLink>
            <NavLink to='/iPhone' className={({isActive})=>`${isActive?'bg-violet-700 text-white':'bg-gray-100'} px-10 py-4 rounded-full text-center font-bold`}>Iphone</NavLink>
          </div>
        </div>
  )
}
