import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { allDataContext } from "../main"

export default function ProductDetails() {
  const [productObj,addProduct]=useState({}) 
  const {pid}=useParams()
const{addWishList,addCartList}= useContext(allDataContext)

 useEffect(()=>{
fetch('../data.json')
.then(res=>res.json())
.then(data=>{
  if(data){
    const findOne = data.find(pd=>pd.product_id==pid)
    addProduct(findOne)
    }
})
  
 },[pid])
 useEffect(() => {
  document.title = 'Product Details | Gadgets Park';
}, []);
 
  return (
  <div>
      <div className='bg-violet-700 lg:w-full mx-auto rounded-b-xl relative mb-52 '>
      <div className='space-y-4 lg:w-3/5 mx-auto px-2 pb-32 pt-28 text-center'>
        <h1 className='text-white lg:text-3xl text-2xl font-extrabold'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
        <p className='text-white lg:text-lg'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
      
      </div>

      <div className='border rounded-xl p-5 bg-white z-20  absolute md:w-7/12 w-full transform lg:translate-x-[36%] lg:translate-y-[-20%] translate-y-[-15%] translate-x-[0%] md:translate-y-[-15%] md:translate-x-[37%]'>
      
<div className="grid grid-cols-3 gap-4 items-center text-center lg:text-start justify-between">
 <div className="lg:col-span-1 mx-auto md:col-span-4 col-span-4 relative">
  <img className="h-56 object-cover mx-auto lg:mx-0" src={productObj.product_image} alt="" /> 
  <div className="badge badge-ghost text-xs -top-2 left-[40%] absolute">{productObj.brand}</div>
 </div>
 <div className="lg:col-span-2 md:col-span-4 col-span-4 space-y-2">
  <h1 className="font-extrabold text-2xl">{productObj.product_title}</h1>
  <h4 className="font-bold text-gray-600">Price: ${productObj.price}</h4>
  {productObj.availability? <p className="px-4 py-1 mx-auto lg:mx-0 rounded-full border border-green-400 text-green-700 bg-green-100 w-fit text-sm">In Stock</p>: <p className="px-4 py-1 mx-auto lg:mx-0 rounded-full border border-red-400 text-red-700 bg-red-100 w-fit text-sm">Out of Stock</p>}
 
  <p className="text-gray-500">{productObj.description}</p>

  <div>
    <p><b>Specification:</b></p>
    {productObj.Specification && productObj.Specification.length > 0 ? (
    productObj.Specification.map((data, index) => (
        <p key={index}>{`${data.key}: ${data.value}`}</p>
    ))
) : (
    <p>N/A</p>
)}


<p className="mb-1"><b>Rating ⭐ </b></p>
<div className="flex items-center justify-center lg:justify-start gap-2">
<div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
     />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
<p className="h-fit px-2 bg-gray-50 py-2 border rounded-full text-xs">4.8</p>
</div>

  </div>
  <div className="flex items-center justify-center lg:justify-start gap-2">
    <button onClick={()=>addCartList(productObj)} className="btn px-6 bg-violet-700 text-white hover:bg-violet-900 transition hover:border hover:border-green-500 duration-400 rounded-full">Add to Card</button> 
    <button onClick={()=>addWishList(productObj)} className="border duration-400 transition hover:text-white hover:bg-red-400 border-gray-200 rounded-full h-11 w-11 flex items-center justify-center">
    <i className="fa-regular fa-heart"></i>
    </button>
  </div>
 </div>
</div>


      </div>
    </div>
    <div className="h-[400px] lg:h-48"></div>
  </div>
    
  )
}
