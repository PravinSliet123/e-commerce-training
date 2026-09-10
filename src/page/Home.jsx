import React, { useEffect, useState } from 'react'
import SignupBanner from '../components/Common/SignupBanner'
import Header from '../components/Common/Header'
import Hero from '../components/Home/Hero'
import TopArirvals from '../components/Home/TopArirvals'


function Home() {

  const [products, setProducts] = useState([])


  //callback or async await


  function getAllProducts() {
    try {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then(data => {
          setProducts(data.products)

        })
    } catch (error) {

    }

  }
  useEffect(() => {
    getAllProducts()
  }, [])


  return (
    <div>
      <SignupBanner />
      <Header />
      <Hero />
      <TopArirvals title={"NEW ARRIVALS"} products={products.slice(0,4)} />
      <TopArirvals title={"top selling"} products={products.slice(5,9)} />
    </div>
  )
}



export default Home