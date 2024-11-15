import React from 'react'

export default function ReviewForm() {
  return (
    <div className='container mx-auto py-12'>
<div className='lg:w-1/2 w-full mx-auto bg-white p-6 md:p-12 rounded-lg'>
 <h1 className='text-2xl font-extrabold text-center text-violet-700'>Submit Your Feedback</h1>
 <p className='text-gray-500 text-center'>You feedback is valuable!</p>
 <form onSubmit={(e)=>e.preventDefault()} className='grid gap-3 mt-2'>
 <input type="text" placeholder="Your name" className="input input-bordered w-full " />
 <input type="text" placeholder="Tittle" className="input input-bordered w-full " />
 <textarea rows={8} placeholder="Type message..." className="p-3 border-2 rounded-lg w-full outline-2 outline-gray-300"></textarea>
<button type='submit' className='btn bg-violet-700 text-white hover:bg-violet-500'>Submit Review</button>
 </form>
</div>
    </div>
  )
}
