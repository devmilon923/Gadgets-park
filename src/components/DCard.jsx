import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { allDataContext } from '../main'

export default function DCard({addbtn,cart}) {
  const {setcartList,cartList,addCartList,wishList,setwishList}= useContext(allDataContext)
  const handleDelete =()=>{
   if(addbtn){
    const newArry1 = wishList.filter(data=>data.product_id!==cart.product_id)
    setwishList(newArry1)
    toast.success('Product successfully remove from wishlist.')
   }else{
    const newArry = cartList.filter(data=>data.product_id!==cart.product_id)
    setcartList(newArry)
    return toast.success('Product successfully remove into cart.')
   }
  }
  return (
    <div>
        <div className="flex py-5 items-center justify-between bg-white mx-2">
  <div className="flex md:flex-row items-center gap-2 lg:gap-12 md:4">
    <img src={cart.product_image} className="lg:h-52 md:h-32 md:w-32 h-20 w-20 lg:w-60 object-cover" alt={cart.product_title} />
    <div className='space-y-2'>
    <h1 className="lg:text-xl text-md font-bold">{cart.product_title}</h1>
    <p className=" text-gray-500 text-sm md:text-md"><b>Description: </b>{cart.description}</p>
    <h3 className="lg:text-lg text-md font-bold text-gray-500">Price: ${cart.price}</h3>
    {addbtn?<button  onClick={()=>addCartList(cart)} className='btn hover:bg-violet-900 px-10 text-white rounded-full bg-violet-700'>Add Cart</button>:''}
    
  </div>
  </div>
 
 
  <div onClick={handleDelete} className="w-10 h-10 flex cursor-pointer items-center rounded-full mx-2 justify-center">
  <i className="fa-solid fa-trash-can text-red-400"></i>
  </div>

</div>
    </div>
  )
}
