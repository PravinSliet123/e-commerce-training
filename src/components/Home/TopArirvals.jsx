import React from 'react'
import "./TopArrrival.css"
import ProductCard from '../Common/ProductCard'

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
    </div>
  )
}

export default TopArirvals