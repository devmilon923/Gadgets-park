import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Review from './Review'
export default function RewviewContainer() {
    const [reviews,setReviews] =useState([])
    const [count,setCount] =useState(4)
   
    const data = useLoaderData()
  
   useEffect(()=>{
    const slicedData = [...data].splice(0, count);
    setReviews(slicedData)
},[count])
    const hanldeShowMore = ()=>{

        const add = count + 4
        setCount(add)
    }
  return (
    <>
     <div className='container px-3 mx-auto py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-between'>
{reviews.map(review=><Review key={review.id} review={review}></Review>)}

    </div>
    <div className='text-center m-3'>
    <button onClick={hanldeShowMore} className='px-6 btn bg-violet-700 text-white hover:bg-violet-800'>Show More</button>
    </div>
    </>
   
  )
}
