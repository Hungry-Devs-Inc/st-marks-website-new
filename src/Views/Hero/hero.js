import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.css";
import { useParams } from 'react-router-dom';
const Hero = ({pageState}) => {
  console.log(useParams());
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