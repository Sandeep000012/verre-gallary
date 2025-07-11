import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Components/Footer";
import wbasin1 from "../assets/Images/png/wbasin1.png";
import wbasin2 from "../assets/Images/png/wbasin2.png";
import wbasin3 from "../assets/Images/png/wbasin3.png";
import wbasin4 from "../assets/Images/png/wbasin4.png";
import stars from "../assets/Images/png/stars.png";
import like from "../assets/Images/png/like.png";
import colors from "../assets/Images/png/colors.png";
import sstar from "../assets/Images/png/sstar.png";
import D1 from "../assets/Images/png/D1.png";
import D2 from "../assets/Images/png/D2.png";
import D3 from "../assets/Images/png/D3.png";
import D4 from "../assets/Images/png/D4.png";
import D5 from "../assets/Images/png/D5.png";
import aa from "../assets/Images/png/aa.png";
import bb from "../assets/Images/png/bb.png";
import wt1 from "../assets/Images/png/wt1.png";
import wt2 from "../assets/Images/png/wt2.png";
import wt3 from "../assets/Images/png/wt3.png";
import wt4 from "../assets/Images/png/wt4.png";
import c1 from "../assets/Images/png/c1.png";
import c2 from "../assets/Images/png/c2.png";
import c3 from "../assets/Images/png/c3.png";
import c4 from "../assets/Images/png/c4.png";
import fp from "../assets/Images/png/fp.png";
import Button from "../Components/Button";
import Customer from "../Components/Customer";

const Home = () => {
  const shobtn = `mt-5 shop d-flex m-auto`;
  const Homebtn = `mt-3 about_btn`;
  const prdctbtn = `product_btn`;
  const explrbtn = `explore_btn d-flex m-auto`;
  const exprtbtn = `expert_btn`;
  const sbscribe_btn = ` subscribe_btn`;

  const sliderRef = useRef(null);
  const sliderRef2 = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <ul className="flex justify-center">{dots}</ul>
      </div>
    ),
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl"
    >
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="60"
          cy="60"
          r="59.5"
          transform="rotate(-180 60 60)"
          stroke="#17313A"
        />
      </svg>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl"
    >
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="60" cy="60" r="59.5" stroke="#17313A" />
        <path
          d="M67 75L52 60L67 45"
          stroke="#17313A"
          stroke-width="3"
          stroke-linecap="square"
        />
      </svg>
    </div>
  );

  return (
    <>
      {/* //////////////////////////////Hero Section////////////////////// */}

      <div className=" min-vh-100 d-flex flex-column">
        <Navbar />

        <Slider {...settings}>
          <div className=" header_img overflow-hidden d-flex flex-column justify-content-center custom_vh">
            <div className=" my_container">
              <p className=" fs_2xl text-white text-center w-75 m-auto font_sedan">
                Introducing Our Newest Glass Creations!
              </p>
              <p className=" fs_md text-white text-center font_helvetica">
                {" "}
                Elevate your space with our latest collection of premium glass
                basins
              </p>
              {/* <button className=" shop d-flex m-auto mt-5 font_helvetica">SHOP NOW</button> */}
              <Button text="SHOP NOW" style={shobtn} />
              <p className=" fs_md text-white text-center mt-4 font_helvetica">
                NEW IN
              </p>
            </div>
          </div>
          <div className=" header_img overflow-hidden d-flex flex-column justify-content-center custom_vh">
            <div className=" my_container">
              <p className=" fs_2xl text-white text-center w-75 m-auto font_sedan">
                Introducing Our Newest Glass Creations!
              </p>
              <p className=" fs_md text-white text-center font_helvetica">
                {" "}
                Elevate your space with our latest collection of premium glass
                basins
              </p>
              <Button text="SHOP NOW" style={shobtn} />
              <p className=" fs_md text-white text-center mt-4 font_helvetica">
                NEW IN
              </p>
            </div>
          </div>
          <div className=" header_img overflow-hidden d-flex flex-column justify-content-center custom_vh">
            <div className=" my_container">
              <p className=" fs_2xl text-white text-center w-75 m-auto font_sedan">
                Introducing Our Newest Glass Creations!
              </p>
              <p className=" fs_md text-white text-center font_helvetica">
                {" "}
                Elevate your space with our latest collection of premium glass
                basins
              </p>
              <Button text="SHOP NOW" style={shobtn} />
              <p className=" fs_md text-white text-center mt-4 font_helvetica">
                NEW IN
              </p>
            </div>
          </div>
          <div className=" header_img overflow-hidden d-flex flex-column justify-content-center custom_vh">
            <div className=" my_container">
              <p className=" fs_2xl text-white text-center w-75 m-auto font_sedan">
                Introducing Our Newest Glass Creations!
              </p>
              <p className=" fs_md text-white text-center font_helvetica">
                {" "}
                Elevate your space with our latest collection of premium glass
                basins
              </p>
              <Button text="SHOP NOW" style={shobtn} />
              <p className=" fs_md text-white text-center mt-4 font_helvetica">
                NEW IN
              </p>
            </div>
          </div>
          <div className=" header_img overflow-hidden d-flex flex-column justify-content-center custom_vh">
            <div className=" my_container">
              <p className=" fs_2xl text-white text-center w-75 m-auto font_sedan">
                Introducing Our Newest Glass Creations!
              </p>
              <p className=" fs_md text-white text-center font_helvetica">
                {" "}
                Elevate your space with our latest collection of premium glass
                basins
              </p>
              <Button text="SHOP NOW" style={shobtn} />
              <p className=" fs_md text-white text-center mt-4 font_helvetica">
                NEW IN
              </p>
            </div>
          </div>
        </Slider>
      </div>

      {/* /////////////////////////Shop Bestsellers//////////////////////// */}

      <section>
        <div className=" my_container">
          <div className=" d-flex justify-content-between align-items-center mt-3">
            <p className=" fs_1xl clr_grey font_sedan">Shop Bestsellers</p>
            <div className=" d-flex">
              <p className=" text-decoration-underline me-1 font_helvetica">
                VIEW ALL
              </p>
              <p>
                <span>{">"}</span>
              </p>
            </div>
          </div>

          <div className="w-11/12 mx-auto relative">
            <Slider ref={sliderRef} {...settings2}>
              <div className=" pe-3">
                <div className=" p_space">
                  <div>
                    <img className=" w-100" src={wbasin1} alt="washbasin" />
                  </div>
                  <div>
                    <p className=" fs_sm clr_grey fw-bolder">
                      Small Round Basin - squared to wall pedestal
                    </p>
                    <p className=" fs_xsm mb-1 font_helvetica">LAS121</p>
                    <p className=" fs_sm fw-bolder clr_brown">$ 3,995.00</p>
                    <div className=" d-flex align-items-center">
                      <img className=" w-50 me-2" src={stars} alt="rating" />
                      <p className=" fs_sm clr_brown">12.9k</p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-between mt-3">
                      <button className=" cart fs_sm clr_grey font_helvetica">
                        Add to Cart
                      </button>
                      <img className=" w_15 me-2" src={like} alt="like" />
                    </div>
                    <img className=" w-100 mt-3" src={colors} alt="colors" />
                  </div>
                </div>
              </div>
              <div className=" pe-3">
                <div className=" p_space">
                  <div>
                    <img className=" w-100" src={wbasin2} alt="washbasin" />
                  </div>
                  <div>
                    <p className=" fs_sm clr_grey fw-bolder font_helvetica">
                      ROUND Basin - on small pedestal wrought iron{" "}
                    </p>
                    <p className=" fs_xsm mb-1 font_helvetica">LAS101</p>
                    <p className=" fs_sm fw-bolder clr_brown">$ 5,495.00</p>
                    <div className=" d-flex align-items-center">
                      <img className=" w-50 me-2" src={stars} alt="rating" />
                      <p className=" fs_sm clr_brown">6.8k</p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-between mt-3">
                      <button className=" cart fs_sm clr_grey font_helvetica">
                        Add to Cart
                      </button>
                      <img className=" w_15 me-2" src={like} alt="like" />
                    </div>
                    <img className=" w-100 mt-3" src={colors} alt="colors" />
                  </div>
                </div>
              </div>
              <div className=" pe-3">
                <div className=" p_space">
                  <div>
                    <img className=" w-100" src={wbasin3} alt="washbasin" />
                  </div>
                  <div>
                    <p className=" fs_sm clr_grey fw-bolder font_helvetica">
                      Large Round Basin - on small pedestal
                    </p>
                    <p className=" fs_xsm mb-1 font_helvetica">LAS120</p>
                    <p className=" fs_sm fw-bolder clr_brown">$ 4,495.00</p>
                    <div className=" d-flex align-items-center">
                      <img className=" w-50 me-2" src={stars} alt="rating" />
                      <p className=" fs_sm clr_brown">4.8k</p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-between mt-3">
                      <button className=" cart fs_sm clr_grey font_helvetica">
                        Add to Cart
                      </button>
                      <img className=" w_15 me-2" src={like} alt="like" />
                    </div>
                    <img className=" w-100 mt-3" src={colors} alt="colors" />
                  </div>
                </div>
              </div>
              <div className=" pe-3">
                <div className=" p_space">
                  <div>
                    <img className=" w-100" src={wbasin4} alt="washbasin" />
                  </div>
                  <div>
                    <p className=" fs_sm clr_grey fw-bolder font_helvetica">
                      Small Round Basin - squared to wall pedestal
                    </p>
                    <p className=" fs_xsm mb-1 font_helvetica">LAS303</p>
                    <p className=" fs_sm fw-bolder clr_brown">$ 3,995.00</p>
                    <div className=" d-flex align-items-center">
                      <img className=" w-50 me-2" src={stars} alt="rating" />
                      <p className=" fs_sm clr_brown">8.5k</p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-between mt-3">
                      <button className=" cart fs_sm clr_grey font_helvetica">
                        Add to Cart
                      </button>
                      <img className=" w_15 me-2" src={like} alt="like" />
                    </div>
                    <img className=" w-100 mt-3" src={colors} alt="colors" />
                  </div>
                </div>
              </div>
            </Slider>
            <div className=" d-flex  align-items-center justify-content-center  g-4  mt-5 pt-4">
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className=" fs_lg rounded-circle py-2 px-4 me-4"
              >
                <span className=" fs_lg">{"<"}</span>
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="  fs_lg rounded-circle py-2 px-4"
              >
                <span className=" fs_lg">{">"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* /////////////////////////DARE TO DREAM//////////////////////// */}

      <section>
        <div className=" d-flex align-items-center justify-content-between mt-4">
          <div className=" d-flex align-items-center d-none d-md-flex">
            <img className=" img_c" src={sstar} alt="star" />
            <p className=" fs_sm clr_brown text-decoration-underline ms-2 me-2 font_helvetica">
              SHOP NOW
            </p>
            <img className=" img_c " src={sstar} alt="star" />
          </div>
          <div className=" overflow-hidden d-flex justify-content-center">
            <p className=" fs_xl clr_grey fw-normal text-center scroll-content font_sedan">
              DARE TO DREAM, WE DO THE BEST
            </p>
          </div>
          <div className=" d-flex align-items-center d-none d-md-flex">
            <img className=" img_c" src={sstar} alt="star" />
            <p className=" fs_sm clr_brown text-decoration-underline ms-2 me-2 font_helvetica">
              SHOP NOW
            </p>
            <img className=" img_c" src={sstar} alt="star" />
          </div>
        </div>
        <div className=" d-flex align-items-center mt-5 flex-wrap justify-content-center">
          <div className=" w_20 position-relative">
            <img className=" w-100" src={D1} alt="basin" />
            <div className=" p_btn">
              <p className=" fs_md fw-normal text-white mb-2 font_sedan">
                BASIN
              </p>
              {/* <button className=" product_btn font_helvetica">VIEW PRODCUTS</button> */}
              <Button text="VIEW PRODCUTS" style={prdctbtn} />
            </div>
          </div>
          <div className=" w_20 position-relative">
            <img className=" w-100" src={D2} alt="PEDESTAL" />
            <div className=" p_btn">
              <p className=" fs_md fw-normal text-white mb-2 font_sedan">
                PEDESTAL
              </p>
              <Button text="VIEW PRODCUTS" style={prdctbtn} />
            </div>
          </div>
          <div className=" w_20 position-relative">
            <img className=" w-100" src={D3} alt="UNDERMOUNT" />
            <div className=" p_btn">
              <p className=" fs_md fw-normal text-white mb-2 font_sedan">
                UNDERMOUNT
              </p>
              <Button text="VIEW PRODCUTS" style={prdctbtn} />
            </div>
          </div>
          <div className=" w_20 position-relative">
            <img className=" w-100" src={D4} alt="DROP-IN" />
            <div className=" p_btn">
              <p className=" fs_md fw-normal text-white mb-2 font_sedan">
                DROP-IN
              </p>
              <Button text="VIEW PRODCUTS" style={prdctbtn} />
            </div>
          </div>
          <div className=" w_20 position-relative">
            <img className=" w-100" src={D5} alt="CUSTOM" />
            <div className=" p_btn">
              <p className=" fs_md fw-normal text-white mb-2 font_sedan">
                CUSTOM
              </p>
              <Button text="VIEW PRODCUTS" style={prdctbtn} />
            </div>
          </div>
        </div>
      </section>

      {/* //////////////////////////TIMELESS GLASSWORKS////////////////////// */}

      <section>
        <div className="my_container mt-5 pt-5">
          <div className="row align-items-center justify-content-between flex-column-reverse flex-md-row text-center text-md-start">
            <div className="col-12 col-md-5 mt-4 mt-md-0">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                <img className="img_c me-3" src={sstar} alt="star" />
                <p className="fs_xsm fw-normal clr_brown mb-0 font_helvetica">
                  TIMELESS GLASSWORKS
                </p>
              </div>
              <p className="fs_xl clr_grey mb-3 lh-1 font_sedan">
                Artistry in Glass, Elevating Your Spaces
              </p>
              <p className="fs_xsm clr_brown font_helvetica">
                We specialize in creating exquisite glass basins and accessories
                for bathroom that blend artistry with functionality. Whether
                you're looking for a sleek modern touch or a unique handcrafted
                masterpiece, our commitment to precision and excellence ensures
                that every product reflects sophistication and elegance.
              </p>
              {/* <button className="about_btn mt-4 mx-auto mx-md-0 font_helvetica">
                ABOUT US
              </button> */}
              <Button text="ABOUT US" style={Homebtn} />
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end position-relative mb-4 mb-md-0 overflow-hidden">
              <img className="w-75" src={aa} alt="main" />
              <img
                className="w-50 glass position-absolute"
                src={bb}
                alt="overlay"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ///////////////////////////New Arrivals////////////////////////// */}

      <section>
        <div className=" my_container mt-5 pt-5">
          <div className=" d-flex justify-content-between align-items-center mt-3 mb-3">
            <p className=" fs_1xl clr_grey font_sedan">New Arrivals</p>
            <div className=" d-flex">
              <p className=" text-decoration-underline me-1 font_helvetica">
                VIEW ALL
              </p>
              <p>
                <span>{">"}</span>
              </p>
            </div>
          </div>

          <div className="w-11/12 mx-auto relative">
            <Slider ref={sliderRef2} {...settings2}>
              <div className=" pe-3">
                <div className=" p_space">
                  <div>
                    <img className=" w-100" src={wt1} alt="washbasin" />
                  </div>
                  <div>
                    <p className=" fs_sm clr_grey fw-bolder font_helvetica">
                      Round Vessel
                    </p>
                    <p className=" fs_xsm mb-1 font_helvetica">LAS03</p>
                    <p className=" fs_sm fw-bolder clr_brown font_helvetica">
                      $ 2,095.00
                    </p>
                    <div className=" d-flex align-items-center">
                      <img className=" w-50 me-2" src={stars} alt="rating" />
                      <p className=" fs_sm clr_brown font_helvetica">598</p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-between mt-3">
                      <button className=" cart fs_sm clr_grey font_helvetica">
                        Add to Cart
                      </button>
                      <img className=" w_15 me-2" src={like} alt="like" />
                    </div>
                    <img className=" w-100 mt-3" src={colors} alt="colors" />
                  </div>
                </div>
              </div>
              <div className=" pe-3">
                <div className=" p_space">
                  <div>
                    <img className=" w-100" src={wt2} alt="washbasin" />
                  </div>
                  <div>
                    <p className=" fs_sm clr_grey fw-bolder font_helvetica">
                      Small round basin squared
                    </p>
                    <p className=" fs_xsm mb-1 font_helvetica">LAS121</p>
                    <p className=" fs_sm fw-bolder clr_brown font_helvetica">
                      $ 4,195.00
                    </p>
                    <div className=" d-flex align-items-center">
                      <img className=" w-50 me-2" src={stars} alt="rating" />
                      <p className=" fs_sm clr_brown font_helvetica">125</p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-between mt-3">
                      <button className=" cart fs_sm clr_grey font_helvetica">
                        Add to Cart
                      </button>
                      <img className=" w_15 me-2" src={like} alt="like" />
                    </div>
                    <img className=" w-100 mt-3" src={colors} alt="colors" />
                  </div>
                </div>
              </div>
              <div className=" pe-3">
                <div className=" p_space">
                  <div>
                    <img className=" w-100" src={wt3} alt="washbasin" />
                  </div>
                  <div>
                    <p className=" fs_sm clr_grey fw-bolder font_helvetica">
                      Round vessel 3 levels
                    </p>
                    <p className=" fs_xsm mb-1 font_helvetica">LAS053</p>
                    <p className=" fs_sm fw-bolder clr_brown font_helvetica">
                      $ 3,495.00
                    </p>
                    <div className=" d-flex align-items-center">
                      <img className=" w-50 me-2" src={stars} alt="rating" />
                      <p className=" fs_sm clr_brown font_helvetica">78</p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-between mt-3">
                      <button className=" cart fs_sm clr_grey font_helvetica">
                        Add to Cart
                      </button>
                      <img className=" w_15 me-2" src={like} alt="like" />
                    </div>
                    <img className=" w-100 mt-3" src={colors} alt="colors" />
                  </div>
                </div>
              </div>
              <div className=" pe-3">
                <div className=" p_space">
                  <div>
                    <img className=" w-100" src={wt4} alt="washbasin" />
                  </div>
                  <div>
                    <p className=" fs_sm clr_grey fw-bolder font_helvetica">
                      Modern shallow rectangular bowl
                    </p>
                    <p className=" fs_xsm mb-1 font_helvetica">LAS072</p>
                    <p className=" fs_sm fw-bolder clr_brown font_helvetica">
                      $ 2,895.00
                    </p>
                    <div className=" d-flex align-items-center">
                      <img className=" w-50 me-2" src={stars} alt="rating" />
                      <p className=" fs_sm clr_brown font_helvetica">105</p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-between mt-3">
                      <button className=" cart fs_sm clr_grey font_helvetica">
                        Add to Cart
                      </button>
                      <img className=" w_15 me-2" src={like} alt="like" />
                    </div>
                    <img className=" w-100 mt-3" src={colors} alt="colors" />
                  </div>
                </div>
              </div>
            </Slider>
            <div className=" d-flex  align-items-center justify-content-center  g-4  mt-5 pt-4">
              <button
                onClick={() => sliderRef2.current?.slickPrev()}
                className=" fs_lg rounded-circle py-2 px-4 me-4"
              >
                <span className=" fs_lg">{"<"}</span>
              </button>
              <button
                onClick={() => sliderRef2.current?.slickNext()}
                className="  fs_lg rounded-circle py-2 px-4"
              >
                <span className=" fs_lg">{">"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* /////////////////////////OUR CATALOGUES//////////////////////// */}

      <section>
        <div className="my_container mt-5 pt-5 mb-5">
          <div className="row align-items-center justify-content-between">
            {/* <!-- Left Image Column --> */}
            <div className="col-12 col-md-4 order-1 order-md-1">
              <div className="mb-4">
                <img className="w-100" src={c1} alt="catalouge" />
              </div>
              <div>
                <img className="w-100" src={c2} alt="catalouge" />
              </div>
            </div>
            {/* 
    <!-- Middle Text Column --> */}
            <div className="col-12 col-md-4 mb-3 order-2 order-md-2 mt-2">
              <div className="d-flex align-items-center justify-content-center">
                <img className="img_c" src={sstar} alt="star" />
                <p className="fs_xsm clr_brown ms-2 me-2 font_helvetica">
                  OUR CATALOGUES
                </p>
                <img className="img_c" src={sstar} alt="star" />
              </div>
              <p className="fs_lg clr_brown mb-3 text-center font_sedan">
                The Regal Work Of Glass Masterpieces
              </p>
              <p className="fs_xsm clr_brown text-center mb-3 font_helvetica">
                Indulge in the finest selection of luxurious glass basins and
                accessories and more. Crafted for elegance, designed for
                royalty.
              </p>
              {/* <button className="explore_btn d-flex m-auto font_helvetica">EXPLORE</button> */}
              <Button text="EXPLORE" style={explrbtn} />
            </div>

            {/* <-- Right Image Column --> */}
            <div className="col-12 col-md-4 order-3 order-md-3">
              <div className="mb-4">
                <img className="w-100" src={c3} alt="catalouge" />
              </div>
              <div>
                <img className="w-100" src={c4} alt="catalouge" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* //////////////////////////Featured Product////////////////////// */}

      <section>
        <div className="bg_img2 mt-5 pt-5">
          <div className="my_container">
            <div className="row align-items-center justify-content-between text-center text-md-start">
              <div className="col-md-6 col-sm-6 col-7 mb-4 mb-md-0">
                <p className="fs_xl text-white font_sedan">Featured Product</p>
                <p className="fs_xsm text-white mb-5 font_helvetica">
                  "Elegant Basin & Countertop Glassworks – Crafted for Style &
                  Durability"
                </p>
                <img className="w-100" src={fp} alt="glasswork" />
              </div>
              <div className="col-md-6 col-sm-6 col-7">
                <p className="fs_lg text-white text-center">
                  PURE <span className="fs_md font_sedan">TRANSITION</span>
                </p>
                <p className="fs_sm text-white text-center font_helvetica">
                  VERRE <span className="fs_xsm">Gallery</span>
                </p>
                <button className="explore1_btn mt-4 d-flex mx-auto font_helvetica">
                  EXPLORE ALL
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ////////////////////////////Customers/////////////////////// */}

      <Customer />

      {/* /////////////////////////EXPERTS///////////////////////// */}

      <section>
        <div className="my_container mt-5 mb-5">
          <div className="bgc_cream py-4 px-3 row align-items-center justify-content-between flex-column flex-md-row text-center text-md-start">
            <div className="col-12 col-xl-9 col-lg-9 mb-3 mb-md-0">
              {/* <img
                className="img_c mb-2"
                src={sstar}
                alt="star"
              /> */}
              <div className=" text-lg-start text-center">
                <p className="clr_grey fs_md font_sedan">
                  <span className="text-primary">✦</span>
                  PERFECTLY CONTROLED GLASS FUSING AND THERMOFORMING
                </p>
                <p className="fs_xsm clr_brown font_helvetica">
                  Consistency in manufacturing for more than twenty years,
                  Proven protective packaging!
                </p>
              </div>
            </div>
            <div className="col-12 col-xl-3 col-lg-3 d-flex justify-content-center justify-content-lg-end mt-sm-3">
              {/* <button className="expert_button font_helvetica">MEET OUR EXPERTS</button> */}
              <Button text="MEET OUR EXPERTS" style={exprtbtn} />
            </div>
          </div>
        </div>
      </section>

      {/* ////////////////////////////OUR NEWSLETTER//////////////// */}

      <section>
        <div>
          <div className="d-flex align-items-center justify-content-center flex-wrap mb-2 text-center">
            <img className="img_c" src={sstar} alt="star" />
            <p className="clr_brown fs_xsm pe-3 ps-3 mb-0 font_helvetica">
              SUBSCRIBE TO OUR E-MAILS
            </p>
            <img className="img_c" src={sstar} alt="star" />
          </div>

          <p className="fs_lg clr_grey text-center mb-2 font_sedan">
            OUR NEWSLETTER
          </p>
          <p className="fs_xsm clr_brown text-center mb-4 font_helvetica">
            Be the first to know about new collections and exclusive offers.
          </p>

          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
            <input
              className="mb-3 mb-md-0 me-md-3"
              type="email"
              placeholder="Enter your email"
            />
            {/* <button className="subscribe_btn font_helvetica">SUBSCRIBE</button> */}
            <Button text="SUBSCRIBE" style={sbscribe_btn} />
          </div>

          <p className="fs_1xsm clr_brown text-center mb-5 font_helvetica">
            *By clicking 'SUBSCRIBE' you agree that you have read and understood
            Verre Gallery’s Privacy Policy.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Home;
