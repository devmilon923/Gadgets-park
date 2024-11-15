import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Chart from "../components/Chart";

export default function Statistics() {
  
  const [data,setData]= useState([])
  const loaderData  = useLoaderData()
  
  useEffect(() => {
    
    setData(loaderData)
    document.title = 'Statistics | Gadgets Park';
    
  }, []);
  
  return (
    <div >
    <div className="bg-violet-700 text-white text-center pt-36 pb-14 space-y-2">
    <h1 className="text-4xl font-extrabold">Statistics</h1>
    <p className="lg:w-1/3 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
   
    </div>
    <div className="container mx-auto text-center">
    <div className="text-center py-6 lg:py-12" style={{ width: '100%', height: '500px' }}>
      <Chart data={data}></Chart>
    </div>
    </div>
  
  </div>
  )
}
