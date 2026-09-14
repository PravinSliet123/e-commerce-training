import React, { useEffect, useState } from 'react'
import TopArirvals from '../components/Home/TopArirvals'

function Products() {

  const [products, setProducts] = useState([
  
    ])
    const[query, setQuery] = useState("")
    console.log("🚀 ~ Home ~ query:", query)
  
  
    //callback or async await
  
  
    function getAllProducts() {
      try {
        fetch(`https://dummyjson.com/products/search?q=${query}`, { method: "GET" }).then((res) => {
          return res.json()
        }).then(data => {
          console.log("🚀 ~ getAllProducts ~ data:", data)
          setProducts(data.products)
  
        })
  
  
        // Asynchronous 
        //1. callback
        //2. async/await
        console.log("🚀 ~ getAllProducts ~ response:", response)
  
      } catch (error) {
  
      }
  
    }
  
    useEffect(() => {
      getAllProducts()
  
      return ()=>{
        console.log("destrying")
      }
    }, [query])
  return (
    <div>
        <TopArirvals title={"Products"} products={products} />
  
    </div>
  )
}

export default Products