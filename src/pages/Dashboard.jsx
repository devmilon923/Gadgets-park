import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";


export default function Dashboard() {
  useEffect(() => {
    document.title = 'Dashboard | Gadgets Park';
  }, []);
  const {section} = useParams()
  return (
    <div >
      <div className="bg-violet-700 text-white text-center pt-36 pb-14 px-3 space-y-2">
      <h1 className="text-4xl font-extrabold">Dashboard</h1>
      <p className="lg:w-1/3 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      <div className="flex gap-5 items-center justify-center">

        <NavLink to='/dashboard/wish' className={({isActive})=>`btn px-10 hover:text-violet-700 font-bold rounded-full ${isActive?'bg-white text-violet-700':'bg-transparent text-white'} border border-white`}>Wishlist</NavLink>

        <NavLink to='/dashboard/cart' className={({isActive})=>`btn px-10 hover:text-violet-700  font-bold rounded-full ${isActive?'bg-white text-violet-700':'bg-transparent text-white'} border border-white`}>Cartlist</NavLink>
     
      </div>
      </div>
{section=='wish'?<Wishlist></Wishlist>:<Cart></Cart>}

    </div>
  )
}
