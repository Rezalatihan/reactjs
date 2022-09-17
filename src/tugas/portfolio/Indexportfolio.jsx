import React from "react";
import Navbarcomp from "./navbar/Navbarcomp";
import Banner from "./component/carosel/Banner";
import Content from "./component/Content";
import Cardd from "./component/cardd/Cardd";
import Forms from "./forms/Forms";
import Footer from "./footer/Footer";

function Indexportfolio() {
  return (
    <div>
      <Navbarcomp />
      <Banner />
      <Content />
      <Cardd />
      <Forms />
      <Footer />
    </div>
  );
}

export default Indexportfolio;
