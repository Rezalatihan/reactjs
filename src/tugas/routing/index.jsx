import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./Form/index";
import Index from "../funtcomp/Index";
import Navigasi from "./Navigasi/index";
import Footer from "../portfolio/footer/Footer";
import Form from "./Form/index";

function index() {
  return (
    <BrowserRouter>
      <Navigasi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/berita" element={<Index />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default index;
