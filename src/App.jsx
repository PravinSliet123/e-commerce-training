
import { useState } from "react" //explicit export
import Home from "./page/Home"
import { Routes, Route } from "react-router";
import About from "./page/About";
import SignupBanner from "./components/Common/SignupBanner";
import Header from "./components/Common/Header";


function App() {
  return (
    <div>
      <SignupBanner />
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/product-detail" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App