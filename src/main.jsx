import { createContext, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import toast from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { routes } from './routes/Routes.jsx'

export const allDataContext = createContext()

function ContextProvider({children}){
  let total =0;
  const [allData,setAllData]=useState([])
  const [wishList,setwishList]=useState([])
  const [cartList,setcartList]=useState([])


  const addWishList =(obj)=>{
    const hasInCart = cartList.find(data=>data===obj)
    if(hasInCart) return toast.error('Sorry! Cart product not add in wishlist')
    if(wishList.includes(obj)) return toast.error('This product already added in wishlist.')
    const newArry = [...wishList,obj];
    setwishList(newArry)
   return toast.success('Product successfully added in wishList.')

  }
  const addCartList =(obj)=>{
    
    if(total+obj.price >=1000) return toast.error('You reach $1000 product in you cart')

if(!obj.availability) return toast.error('Out of stock product not add in cart')

    const remove = wishList.filter(data=>data.product_id!==obj.product_id)
    setwishList(remove)
    const check = cartList.filter(pd=>pd.product_id===obj.product_id)
    if(check.length) return toast.error('This product already added in cart.')

    const newArry = [...cartList,obj];
    setcartList(newArry)
   return toast.success('Product successfully added in cart.')
  }
  cartList.forEach(e=>{
    total= total+e.price
  })

  return(
    <allDataContext.Provider value={{allData,setAllData,wishList,setwishList,cartList,setcartList,addWishList,addCartList,total}}>
      {children}
    </allDataContext.Provider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ContextProvider>
   <RouterProvider router={routes}></RouterProvider>
   </ContextProvider>
  </StrictMode>,
)
