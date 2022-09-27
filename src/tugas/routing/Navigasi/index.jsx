import React from "react";
import "./navigasi.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navigasi() {
  return (
    <Navbar className="me-auto" bg="dark" variant="dark">
      <Link to="/">Home</Link>
      <Link to="/berita">Berita</Link>
      <Link to="/form">Form input</Link>
    </Navbar>
  );
}

export default Navigasi;
