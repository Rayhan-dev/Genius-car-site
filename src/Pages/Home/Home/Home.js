import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container">
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
