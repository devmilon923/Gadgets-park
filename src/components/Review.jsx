
export default function Review({review}) {
 

  return (
    <div className="card bg-base-100 w-full pt-6 shadow-sm">
<div className="avatar px-8">
  <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
    <img alt={review.title} loading="lazy" src={review.imageUrl} />
  </div>
</div>
  <div className="card-body pt-4">
    <h2 className="card-title">
      {review.title}
      
    </h2>
    <p>{review.review}</p>
    <div id="rating" className="rating">
        {[...Array(5)].map((_,index)=>(
            <input
            key={index}
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-green-500"
            defaultChecked={index + 1 === review.rating}
          />
        ))}
 
</div>
  </div>
</div>
  )
}
