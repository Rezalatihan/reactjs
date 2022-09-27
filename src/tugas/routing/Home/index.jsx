import React from "react";
import Cardd from "../../portfolio/component/cardd/Cardd";
import Banner from "../../portfolio/component/carosel/Banner";
import Content from "../../portfolio/component/Content";

function Home() {
  return (
    <div>
      <Banner />
      <Content />
      <Cardd />
    </div>
  );
}

export default Home;
