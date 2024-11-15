import { Link } from "react-router-dom";

export default function Card({product}) {
  return (
    <div className="card card-compact border bg-base-100 shadow-sm p-4">
  <figure className="bg-white py-3 ">
    <img loading="lazy" className="h-48 object-contain rounded-lg"
      src={product.product_image}
      alt="Shoes" />
  </figure>
  <div className="card-body text-center">
    <h2 className="card-title mx-auto">{product.product_title}</h2>
    <p className="mb-1">Price: ${product.price}</p>
    <div className="card-actions justify-center">
      <Link to={`/details/${product.product_id}`} className="btn border-1 border-violet-700 text-violet-700 bg-transparent px-4 btn-sm rounded-full">View Details</Link>
    </div>
  </div>
</div>
  )
}
