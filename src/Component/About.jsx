import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <div className=" min-vh-100 d-flex flex-column">
        <Navbar />
        <div className=" about_img overflow-hidden d-flex flex-column justify-content-center custom_vh">
          <div className=" my_container">
            <p className=" fs_2xl text-white text-center w-50 m-auto">
              Introducing Our Newest Glass Creations!
            </p>
            <p className=" fs_md text-white text-center">
              {" "}
              Elevate your space with our latest collection of premium glass
              basins
            </p>
            <button className=" shop d-flex m-auto mt-5">SHOP NOW</button>
            <p className=" fs_md text-white text-center mt-4">NEW IN</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
