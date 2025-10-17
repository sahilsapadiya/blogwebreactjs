import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import Privacy from "./components/Privacy";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/" element={<Blog/>} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
