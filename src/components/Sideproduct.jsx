
import { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Card from '../components/Card'
export default function Sideproduct() {

const {category} = useParams()
const dataObj = useLoaderData()

const [filteredData, setFilteredData] = useState(dataObj);

useEffect(()=>{

    if(category!==undefined && category!==false){
        const catagoryData = dataObj.filter(data=>data.category===category)
        setFilteredData(catagoryData)
    }else{
        setFilteredData(dataObj)
    }
},[dataObj,category])

    
  return (
    <div className='lg:col-span-3 h-fit gap-5 rounded-lg grid lg:grid-cols-3'>
    {filteredData.length? filteredData.map(product=><Card key={product.product_id} product={product}></Card>):'No product available'}
    
</div>
  )
}
