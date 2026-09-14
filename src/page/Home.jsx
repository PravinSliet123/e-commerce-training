import React, { useEffect, useState } from 'react'
import SignupBanner from '../components/Common/SignupBanner'
import Header from '../components/Common/Header'
import Hero from '../components/Home/Hero'
import TopArirvals from '../components/Home/TopArirvals'
import Partners from "../components/Home/Partners"

function Home() {

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
      <Hero />
      <Partners/>

      <input onChange={(event)=>setQuery(event.target.value)} type="text" placeholder='Search Items' name="" id="" />


      <TopArirvals title={"NEW ARRIVALS"} products={products.slice(0, 4)} />
      <TopArirvals title={"top selling"} products={products.slice(5, 9)} />
    </div>
  )
}



export default Home