import { useEffect } from "react";
import Banner from "../components/Banner";
import Gadgets from "../components/Gadgets";

export default function Home() {

  useEffect(() => {
    document.title = 'Home | Gadgets Park';
  }, []);
  return (
    <div className="">
         <Banner></Banner>
         <div className="container mx-auto">
         <Gadgets></Gadgets>
         </div>
    </div>
  
  )
}
