import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Signup from "./page/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;