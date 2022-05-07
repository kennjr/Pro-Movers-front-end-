import React from "react";
import web from "../src/images/undraw_moving_re_pipp.svg";
import image2b from "../src/images/undraw_heavy_box_agqi.svg";
// import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
      <Commom
        // name="Don’t do it yourself, Let us help you. "
        imgsrc={web}
        imgrc={image2b}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
