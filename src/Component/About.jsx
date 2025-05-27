import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <div className=" min-vh-100 d-flex flex-column">
        <Navbar />
        <div className=" about_img overflow-hidden d-flex flex-column justify-content-center custom_vh1">
          <div className=" my_container">
            <p className=" fs_1xl text-white text-center w-75 m-auto font_sedan">
              ABOUT RENAISSANCE GLASSWORKS INC
            </p>
            <p className=" fs_md text-white w-75 d-flex m-auto text-center">
              Our offer is distinguished by the design, production and selling
              of high-end, high-quality products at competitive prices, enriched
              by a high content of recycled material, 100%
              reusable/transformable/recyclable and timeless: Offering added
              value and peace of mind for our customers, while building a bond
              of trust based on our values.
            </p>
            {/* <p className=" fs_md w-75">RENAISSANCE GLASSWORKS has been creating and selling its glass products around the world for 25 years now.
Our striking, stylish wash basins, often mounted on an elegant glass column, and our textured glass accessories
and custom countertops and back splashes are among our best-selling creations.</p> */}
          </div>
        </div>
      </div>

      {/* /////////////////////////////CANADIAN BRAND////////////////// */}
    </>
  );
};

export default About;
