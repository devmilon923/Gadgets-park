import { useContext } from "react";
import { allDataContext } from "../main";
import DCard from "./DCard";

export default function Wishlist() {
  const {wishList,setwishList}= useContext(allDataContext)
  return (
    <div className="container mx-auto mb-12 px-2">
    <div className="flex items-start justify-between py-5">
      <h1 className="text-3xl font-bold">Wishlist</h1>
     
    </div>
  
  <div className="grid grid-cols-1 gap-6 mt-6">
  
{wishList.length? wishList.map(wish=>  <DCard addbtn={true} cart={wish} key={wish.product_id}></DCard>):<p className="text-center">No Product available</p>}
  
  </div>
  
  </div>
  )
}
