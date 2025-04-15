import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// CSS
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
