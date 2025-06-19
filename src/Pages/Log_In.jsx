import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import sstar from "../assets/Images/png/sstar.png"
import Button from "../Components/Button";

const Log_In = () => {
  const login_btn = `login_btn d-flex m-auto mt-4`
  return (
    <>
      <Navbar />

      <div className=" my_container mt-5 d-flex justify-content-center">
        <div className="text-center w-75 ">
          {/* Small screens */}
          <div className="d-md-none d-flex justify-content-center align-items-center fs_lg font_sedan clr_brown">
            <span className="text-primary me-2">✦</span>
            VEERE GALLERY WELCOME YOU BACK
            <span className="text-primary ms-2">✦</span>
          </div>

          {/* Medium and larger screens */}
          <div className="d-none d-md-block">
            <p className="fs_md font_helvetica text-center clr_brown">
              <span className="text-primary me-2">✦</span>
              Sign In To Access Your Orders, Customize Your Glass, And Shop With
              Ease.
              <span className="text-primary ms-2">✦</span>
            </p>
          </div>

          <div className="d-none d-md-block">
            <p className="fs_xl clr_grey font_sedan text-center mt-3">
              VEERE GALLERY WELCOME YOU BACK
            </p>
            <p className="fs_md font_helvetica text-center clr_brown mb-1">
              DARE TO DREAM...WE DO THE REST
            </p>
          </div>
          <div className=" d-flex d-md-none justify-content-center">
            <p className="fs_md clr_grey font_helvetica text-center">
              DARE TO DREAM...WE DO THE REST
            </p>
          </div>
          <div className=" mt-4">
            <input
              className="w-100"
              type="email"
              name="email"
              placeholder="Enter E-mail"
            />
            <input
              className="w-100 mt-2"
              type="password"
              name="password"
              placeholder="Enter Passwords"
            />
            {/* <button className=" login_btn text-white fs_md font_helvetica mt-4 d-flex m-auto">
              LOG IN
            </button> */}
            <Button  text="LOG IN" style={login_btn} />
            <p className=" fs_xsm clr_grey1 font_helvetica mt-3">Don’t have an account ? <span className=" text-decoration-underline">SIGN UP</span></p>
          </div>
        </div>
      </div>

      {/* ////////////////////////////OUR COMMITMENT//////////////////// */}

      <section className="mt-5 pt-5">
        <div className="commitment_img overflow-hidden d-flex flex-column justify-content-center">
          <div className="container">
            {" "}
            {/* Changed from my_container to Bootstrap's container */}
            <p className="fs_lg text-white font_sedan text-center px-3">
              {" "}
              {/* Added px-3 for padding */}
              OUR COMMITMENT T0 QUALITY & CRAFTSMANSHIP
            </p>
            <p className="fs_md text-white font_helvetica text-center px-3">
              “We believe that glass is more than just a material”
            </p>
            <div className="cmt_box mt-4 mx-auto">
              {/* Added padding and max-width */}
              <p className="clr_brown fs_md text-center font_helvetica">
                We believe that glass is more than just a material, it’s an
                expression of artistry. Every item in our collection is
                thoughtfully designed, using high-quality, sustainable materials
                and expert techniques to achieve the perfect balance of
                durability and sophistication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* /////////////////////////////////SHOP NOW////////////////////////////////// */}

      <section>
        <div className=" d-flex align-items-center justify-content-between mt-5 pt-3 mb-5">
          <div className=" d-flex align-items-center d-none d-md-flex">
            <img
              className=" img_c"
              src={sstar}
              alt="star"
            />
            <p className=" fs_sm clr_brown text-decoration-underline ms-2 me-2 font_helvetica">
              SHOP NOW
            </p>
            <img
              className=" img_c "
              src={sstar}
              alt="star"
            />
          </div>
          <div className=" overflow-hidden d-flex justify-content-center">
            <p className=" fs_lg clr_grey fw-normal text-center scroll-content font_sedan">
              EXPERIENCE THE TIMELESS BEAUTY OF GLASS
            </p>
          </div>
          <div className=" d-flex align-items-center d-none d-md-flex">
            <img
              className=" img_c"
              src={sstar}
              alt="star"
            />
            <p className=" fs_sm clr_brown text-decoration-underline ms-2 me-2 font_helvetica">
              SHOP NOW
            </p>
            <img
              className=" img_c"
              src={sstar}
              alt="star"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Log_In;
