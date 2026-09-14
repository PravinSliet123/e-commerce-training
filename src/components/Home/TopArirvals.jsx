import React from 'react'
import "./TopArrrival.css"
import ProductCard from '../Common/ProductCard'
import { Link } from 'react-router'

function TopArirvals(props) {
  return (
    <div className='top_arrival_container' >
        <h1 className='arrival_heading' >{props.title}</h1>
       <div className='top_arrival_prods'>
        {
          props.products?.map((prod,index)=>(
              <ProductCard key={props.id} product={prod} />
          ))
        }
       </div>

       <div style={{
        margin:"20px 0px",
        display:"flex",
        justifyContent:"center"
       }} >
        <Link to={"/products"} className=' text-center px-4 py-2 w-[150px]  border border-gray-200 text-[18px]  rounded-full cursor-pointer hover:bg-[#000000] hover:text-white transition-all  ' >View All</Link>
       </div>
    </div>
  )
}

export default TopArirvals