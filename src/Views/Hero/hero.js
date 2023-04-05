import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.css";

const Hero = ({pageState}) => {
  return (
    <>
      <div className="myHero text-white">
        <h1 className="d-none d-md-block stMark">Saint Mark Orthodox Church</h1>
      </div>
      <div className="page-name">
        {pageState}
      </div>
    </>
  );
};

export default Hero;