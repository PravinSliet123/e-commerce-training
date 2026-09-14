import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router";

function ProductDetail({ cart, setCart }) {
  const [product, setProduct] = useState(null)
  const [activeImage, setActiveImage] = useState(null)


  const params = useParams()
  const productId = params.productId
  //callback or async await


  function getAllProducts() {
    try {
      fetch(`https://dummyjson.com/products/${productId}`, { method: "GET" }).then((res) => {
        return res.json()
      }).then(data => {
        setProduct(data)
        setActiveImage(data?.images?.[0] || data?.thumbnail)

      }).catch(err => {
        console.log("🚀 ~ getAllProducts ~ err:", err)

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
  }, [])


  if (!product) {
    return <p className=' text-2xl text-center ' > Loading...... </p>
  }

  function addToCart() {
    const newCart = [...cart, product]
    setCart(newCart)
  }

  const isAlreadyInCart = cart.find(value => value.id === product.id)
  console.log("🚀 ~ ProductDetail ~ isAlreadyInCart:", isAlreadyInCart)

  return (
    <div className=' max-w-[1400px] mx-auto p-4  '>

      {product ? <div className=' flex gap-4 ' >
        <div className=' flex '>
          <div>
            {
              product?.images?.map((img, index) => (
                <img onClick={() => setActiveImage(img)} className=' h-30 border ' src={img} />
              ))
            }
          </div>
          <img className=' h-[500px] border ml-2 ' src={activeImage} alt="" />
        </div>

        <div className='h-full '>
          <p>{product.title}</p>

          {isAlreadyInCart?<Link to={"/my-cart"} className=' px-6 py-2 rounded-full w-[150px] bg-black text-white cursor-pointer '>Go to Cart</Link>:<button onClick={addToCart} className=' px-6 py-2 rounded-full w-[150px] bg-black text-white cursor-pointer ' >Add to Cart</button>}
        </div>
      </div> : <p>Product not found</p>}
    </div>
  )
}

export default ProductDetail