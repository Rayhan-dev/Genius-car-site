import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Experts from "./Experts/Experets";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container">
        <Services></Services>
        <Experts></Experts>
      </div>
    </div>
  );
};

export default Home;
