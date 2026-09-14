
import { useState } from "react" //explicit export
import Home from "./page/Home"
import { Routes, Route } from "react-router";
import About from "./page/About";
import SignupBanner from "./components/Common/SignupBanner";
import Header from "./components/Common/Header";
import Products from "./page/Products"
import ProductDetails from "./page/ProductDetail"
import Cart from "./page/Cart"

function App({}) {
  const [cart, setCart] = useState([])
  console.log("🚀 ~ App ~ cart:", cart)
  
  return (
    <div>
      <SignupBanner />
      <Header cart={cart} />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products" element={<Products  />} />
        <Route path="/my-cart" element={<Cart cart={cart} setCart={setCart}  />} />
        <Route path="/products/:productId" element={<ProductDetails cart={cart} setCart={setCart} />} />
      </Routes>
    </div>
  )
}

export default App