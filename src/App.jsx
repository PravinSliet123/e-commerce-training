import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Signup from "./page/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Home Page wahi screenshot wala rahega */}
        <Route path="/" element={<Home />} />
        
        {/* Alag Signup Page */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;