import React, { useRef } from "react";
import Navbar from "./Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";

const Home = () => {
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
              <p className=" fs_2xl text-white text-center w-75 m-auto">
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
          <div className=" header_img overflow-hidden d-flex flex-column justify-content-center custom_vh">
            <div className=" my_container">
              <p className=" fs_2xl text-white text-center w-75 m-auto">
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
          <div className=" header_img overflow-hidden d-flex flex-column justify-content-center custom_vh">
            <div className=" my_container">
              <p className=" fs_2xl text-white text-center w-75 m-auto">
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
          <div className=" header_img overflow-hidden d-flex flex-column justify-content-center custom_vh">
            <div className=" my_container">
              <p className=" fs_2xl text-white text-center w-75 m-auto">
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
          <div className=" header_img overflow-hidden d-flex flex-column justify-content-center custom_vh">
            <div className=" my_container">
              <p className=" fs_2xl text-white text-center w-75 m-auto">
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
        </Slider>
      </div>

      {/* /////////////////////////Shop Bestsellers//////////////////////// */}

      <section>
        <div className=" my_container">
          <div className=" d-flex justify-content-between align-items-center mt-3">
            <p className=" fs_1xl clr_grey ">Shop Bestsellers</p>
            <div className=" d-flex">
              <p className=" text-decoration-underline me-1">VIEW ALL</p>
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
                    <img
                      className=" w-100"
                      src="./src/assets/Images/png/wbasin1.png"
                      alt="washbasin"
                    />
                  </div>
                  <div>
                    <p className=" fs_sm clr_grey fw-bolder">
                      Small Round Basin - squared to wall pedestal
                    </p>
                    <p className=" fs_xsm mb-1">LAS121</p>
                    <p className=" fs_sm fw-bolder clr_brown">$ 3,995.00</p>
                    <div className=" d-flex align-items-center">
                      <img
                        className=" w-50 me-2"
                        src="./src/assets/Images/png/stars.png"
                        alt="rating"
                      />
                      <p className=" fs_sm clr_brown">12.9k</p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-between mt-3">
                      <button className=" cart fs_sm clr_grey">
                        Add to Cart
                      </button>
                      <img
                        className=" w_15 me-2"
                        src="./src/assets/Images/png/like.png"
                        alt="like"
                      />
                    </div>
                    <img
                      className=" w-100 mt-3"
                      src="./src/assets/Images/png/colors.png"
                      alt="colors"
                    />
                  </div>
                </div>
              </div>
              <div className=" pe-3">
                <div className=" p_space">
                  <div>
                    <img
                      className=" w-100"
                      src="./src/assets/Images/png/wbasin2.png"
                      alt="washbasin"
                    />
                  </div>
                  <div>
                    <p className=" fs_sm clr_grey fw-bolder">
                      ROUND Basin - on small pedestal wrought iron{" "}
                    </p>
                    <p className=" fs_xsm mb-1">LAS101</p>
                    <p className=" fs_sm fw-bolder clr_brown">$ 5,495.00</p>
                    <div className=" d-flex align-items-center">
                      <img
                        className=" w-50 me-2"
                        src="./src/assets/Images/png/stars.png"
                        alt="rating"
                      />
                      <p className=" fs_sm clr_brown">6.8k</p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-between mt-3">
                      <button className=" cart fs_sm clr_grey">
                        Add to Cart
                      </button>
                      <img
                        className=" w_15 me-2"
                        src="./src/assets/Images/png/like.png"
                        alt="like"
                      />
                    </div>
                    <img
                      className=" w-100 mt-3"
                      src="./src/assets/Images/png/colors.png"
                      alt="colors"
                    />
                  </div>
                </div>
              </div>
              <div className=" pe-3">
                <div className=" p_space">
                  <div>
                    <img
                      className=" w-100"
                      src="./src/assets/Images/png/wbasin3.png"
                      alt="washbasin"
                    />
                  </div>
                  <div>
                    <p className=" fs_sm clr_grey fw-bolder">
                      Large Round Basin - on small pedestal
                    </p>
                    <p className=" fs_xsm mb-1">LAS120</p>
                    <p className=" fs_sm fw-bolder clr_brown">$ 4,495.00</p>
                    <div className=" d-flex align-items-center">
                      <img
                        className=" w-50 me-2"
                        src="./src/assets/Images/png/stars.png"
                        alt="rating"
                      />
                      <p className=" fs_sm clr_brown">4.8k</p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-between mt-3">
                      <button className=" cart fs_sm clr_grey">
                        Add to Cart
                      </button>
                      <img
                        className=" w_15 me-2"
                        src="./src/assets/Images/png/like.png"
                        alt="like"
                      />
                    </div>
                    <img
                      className=" w-100 mt-3"
                      src="./src/assets/Images/png/colors.png"
                      alt="colors"
                    />
                  </div>
                </div>
              </div>
              <div className=" pe-3">
                <div className=" p_space">
                  <div>
                    <img
                      className=" w-100"
                      src="./src/assets/Images/png/wbasin4.png"
                      alt="washbasin"
                    />
                  </div>
                  <div>
                    <p className=" fs_sm clr_grey fw-bolder">
                      Small Round Basin - squared to wall pedestal
                    </p>
                    <p className=" fs_xsm mb-1">LAS303</p>
                    <p className=" fs_sm fw-bolder clr_brown">$ 3,995.00</p>
                    <div className=" d-flex align-items-center">
                      <img
                        className=" w-50 me-2"
                        src="./src/assets/Images/png/stars.png"
                        alt="rating"
                      />
                      <p className=" fs_sm clr_brown">8.5k</p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-between mt-3">
                      <button className=" cart fs_sm clr_grey">
                        Add to Cart
                      </button>
                      <img
                        className=" w_15 me-2"
                        src="./src/assets/Images/png/like.png"
                        alt="like"
                      />
                    </div>
                    <img
                      className=" w-100 mt-3"
                      src="./src/assets/Images/png/colors.png"
                      alt="colors"
                    />
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
            <img
              className=" img_c"
              src="./src/assets/Images/png/sstar.png"
              alt="star"
            />
            <p className=" fs_sm clr_brown text-decoration-underline ms-5 me-5">
              SHOP NOW
            </p>
            <img
              className=" img_c "
              src="./src/assets/Images/png/sstar.png"
              alt="star"
            />
          </div>
          <div className=" overflow-hidden d-flex justify-content-center">
            <p className=" fs_1xl clr_grey fw-normal text-center scroll-content">
              DARE TO DREAM, WE DO THE BEST
            </p>
          </div>
          <div className=" d-flex align-items-center d-none d-md-flex">
            <img
              className=" img_c"
              src="./src/assets/Images/png/sstar.png"
              alt="star"
            />
            <p className=" fs_sm clr_brown text-decoration-underline ms-5 me-5">
              SHOP NOW
            </p>
            <img
              className=" img_c"
              src="./src/assets/Images/png/sstar.png"
              alt="star"
            />
          </div>
        </div>
        <div className=" d-flex align-items-center mt-5 flex-wrap justify-content-center">
          <div className=" w_20 position-relative">
            <img
              className=" w-100"
              src="./src/assets/Images/png/D1.png"
              alt="basin"
            />
            <div className=" p_btn">
              <p className=" fs_md fw-normal text-white mb-2">BASIN</p>
              <button className=" product_btn">VIEW PRODCUTS</button>
            </div>
          </div>
          <div className=" w_20 position-relative">
            <img
              className=" w-100"
              src="./src/assets/Images/png/D2.png"
              alt="PEDESTAL"
            />
            <div className=" p_btn">
              <p className=" fs_md fw-normal text-white mb-2">PEDESTAL</p>
              <button className=" product_btn">VIEW PRODCUTS</button>
            </div>
          </div>
          <div className=" w_20 position-relative">
            <img
              className=" w-100"
              src="./src/assets/Images/png/D3.png"
              alt="UNDERMOUNT"
            />
            <div className=" p_btn">
              <p className=" fs_md fw-normal text-white mb-2">UNDERMOUNT</p>
              <button className=" product_btn">VIEW PRODCUTS</button>
            </div>
          </div>
          <div className=" w_20 position-relative">
            <img
              className=" w-100"
              src="./src/assets/Images/png/D4.png"
              alt="DROP-IN"
            />
            <div className=" p_btn">
              <p className=" fs_md fw-normal text-white mb-2">DROP-IN</p>
              <button className=" product_btn">VIEW PRODCUTS</button>
            </div>
          </div>
          <div className=" w_20 position-relative">
            <img
              className=" w-100"
              src="./src/assets/Images/png/D5.png"
              alt="CUSTOM"
            />
            <div className=" p_btn">
              <p className=" fs_md fw-normal text-white mb-2">CUSTOM</p>
              <button className=" product_btn">VIEW PRODCUTS</button>
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
                <img
                  className="img_c me-3"
                  src="./src/assets/Images/png/sstar.png"
                  alt="star"
                />
                <p className="fs_xsm fw-normal clr_brown mb-0">
                  TIMELESS GLASSWORKS
                </p>
              </div>
              <p className="fs_xl clr_grey mb-3 lh-1">
                Artistry in Glass, Elevating Your Spaces
              </p>
              <p className="fs_xsm clr_brown">
                We specialize in creating exquisite glass basins and accessories
                for bathroom that blend artistry with functionality. Whether
                you're looking for a sleek modern touch or a unique handcrafted
                masterpiece, our commitment to precision and excellence ensures
                that every product reflects sophistication and elegance.
              </p>
              <button className="about_btn mt-4 mx-auto mx-md-0">
                ABOUT US
              </button>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end position-relative mb-4 mb-md-0 overflow-hidden">
              <img
                className="w-75"
                src="./src/assets/Images/png/aa.png"
                alt="main"
              />
              <img
                className="w-50 glass position-absolute"
                src="./src/assets/Images/png/bb.png"
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
            <p className=" fs_1xl clr_grey ">New Arrivals</p>
            <div className=" d-flex">
              <p className=" text-decoration-underline me-1">VIEW ALL</p>
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
                    <img
                      className=" w-100"
                      src="./src/assets/Images/png/wt1.png"
                      alt="washbasin"
                    />
                  </div>
                  <div>
                    <p className=" fs_sm clr_grey fw-bolder">Round Vessel</p>
                    <p className=" fs_xsm mb-1">LAS03</p>
                    <p className=" fs_sm fw-bolder clr_brown">$ 2,095.00</p>
                    <div className=" d-flex align-items-center">
                      <img
                        className=" w-50 me-2"
                        src="./src/assets/Images/png/stars.png"
                        alt="rating"
                      />
                      <p className=" fs_sm clr_brown">598</p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-between mt-3">
                      <button className=" cart fs_sm clr_grey">
                        Add to Cart
                      </button>
                      <img
                        className=" w_15 me-2"
                        src="./src/assets/Images/png/like.png"
                        alt="like"
                      />
                    </div>
                    <img
                      className=" w-100 mt-3"
                      src="./src/assets/Images/png/colors.png"
                      alt="colors"
                    />
                  </div>
                </div>
              </div>
              <div className=" pe-3">
                <div className=" p_space">
                  <div>
                    <img
                      className=" w-100"
                      src="./src/assets/Images/png/wt2.png"
                      alt="washbasin"
                    />
                  </div>
                  <div>
                    <p className=" fs_sm clr_grey fw-bolder">
                      Small round basin squared
                    </p>
                    <p className=" fs_xsm mb-1">LAS121</p>
                    <p className=" fs_sm fw-bolder clr_brown">$ 4,195.00</p>
                    <div className=" d-flex align-items-center">
                      <img
                        className=" w-50 me-2"
                        src="./src/assets/Images/png/stars.png"
                        alt="rating"
                      />
                      <p className=" fs_sm clr_brown">125</p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-between mt-3">
                      <button className=" cart fs_sm clr_grey">
                        Add to Cart
                      </button>
                      <img
                        className=" w_15 me-2"
                        src="./src/assets/Images/png/like.png"
                        alt="like"
                      />
                    </div>
                    <img
                      className=" w-100 mt-3"
                      src="./src/assets/Images/png/colors.png"
                      alt="colors"
                    />
                  </div>
                </div>
              </div>
              <div className=" pe-3">
                <div className=" p_space">
                  <div>
                    <img
                      className=" w-100"
                      src="./src/assets/Images/png/wt3.png"
                      alt="washbasin"
                    />
                  </div>
                  <div>
                    <p className=" fs_sm clr_grey fw-bolder">
                      Round vessel 3 levels
                    </p>
                    <p className=" fs_xsm mb-1">LAS053</p>
                    <p className=" fs_sm fw-bolder clr_brown">$ 3,495.00</p>
                    <div className=" d-flex align-items-center">
                      <img
                        className=" w-50 me-2"
                        src="./src/assets/Images/png/stars.png"
                        alt="rating"
                      />
                      <p className=" fs_sm clr_brown">78</p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-between mt-3">
                      <button className=" cart fs_sm clr_grey">
                        Add to Cart
                      </button>
                      <img
                        className=" w_15 me-2"
                        src="./src/assets/Images/png/like.png"
                        alt="like"
                      />
                    </div>
                    <img
                      className=" w-100 mt-3"
                      src="./src/assets/Images/png/colors.png"
                      alt="colors"
                    />
                  </div>
                </div>
              </div>
              <div className=" pe-3">
                <div className=" p_space">
                  <div>
                    <img
                      className=" w-100"
                      src="./src/assets/Images/png/wt4.png"
                      alt="washbasin"
                    />
                  </div>
                  <div>
                    <p className=" fs_sm clr_grey fw-bolder">
                      Modern shallow rectangular bowl
                    </p>
                    <p className=" fs_xsm mb-1">LAS072</p>
                    <p className=" fs_sm fw-bolder clr_brown">$ 2,895.00</p>
                    <div className=" d-flex align-items-center">
                      <img
                        className=" w-50 me-2"
                        src="./src/assets/Images/png/stars.png"
                        alt="rating"
                      />
                      <p className=" fs_sm clr_brown">105</p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-between mt-3">
                      <button className=" cart fs_sm clr_grey">
                        Add to Cart
                      </button>
                      <img
                        className=" w_15 me-2"
                        src="./src/assets/Images/png/like.png"
                        alt="like"
                      />
                    </div>
                    <img
                      className=" w-100 mt-3"
                      src="./src/assets/Images/png/colors.png"
                      alt="colors"
                    />
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

      {/* /////////////////////////OUR  CATALOGUES//////////////////////// */}

      <section>
        <div className="my_container mt-5 pt-5 mb-5">
          <div className="row align-items-center justify-content-between">
            {/* <!-- Left Image Column --> */}
            <div className="col-12 col-md-4 order-1 order-md-1">
              <div className="mb-4">
                <img
                  className="w-100"
                  src="./src/assets/Images/png/c1.png"
                  alt="catalouge"
                />
              </div>
              <div>
                <img
                  className="w-100"
                  src="./src/assets/Images/png/c2.png"
                  alt="catalouge"
                />
              </div>
            </div>
            {/* 
    <!-- Middle Text Column --> */}
            <div className="col-12 col-md-4 mb-3 order-2 order-md-2 mt-2">
              <div className="d-flex align-items-center justify-content-center">
                <img
                  className="img_c"
                  src="./src/assets/Images/png/sstar.png"
                  alt="star"
                />
                <p className="fs_xsm clr_brown ms-2 me-2">OUR CATALOGUES</p>
                <img
                  className="img_c"
                  src="./src/assets/Images/png/sstar.png"
                  alt="star"
                />
              </div>
              <p className="fs_lg clr_brown mb-3 text-center">
                The Regal Work Of Glass Masterpieces
              </p>
              <p className="fs_xsm clr_brown text-center mb-3">
                Indulge in the finest selection of luxurious glass basins and
                accessories and more. Crafted for elegance, designed for
                royalty.
              </p>
              <button className="explore_btn d-flex m-auto">EXPLORE</button>
            </div>

            {/* <-- Right Image Column --> */}
            <div className="col-12 col-md-4 order-3 order-md-3">
              <div className="mb-4">
                <img
                  className="w-100"
                  src="./src/assets/Images/png/c3.png"
                  alt="catalouge"
                />
              </div>
              <div>
                <img
                  className="w-100"
                  src="./src/assets/Images/png/c4.png"
                  alt="catalouge"
                />
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
              <div className="col-md-6 col-sm-6 mb-4 mb-md-0">
                <p className="fs_xl text-white">Featured Product</p>
                <p className="fs_xsm text-white mb-5">
                  "Elegant Basin & Countertop Glassworks – Crafted for Style &
                  Durability"
                </p>
                <img
                  className="w-100"
                  src="./src/assets/Images/png/08.png"
                  alt="glasswork"
                />
              </div>
              <div className="col-md-6 col-sm-6 col-12">
                <p className="fs_lg text-white text-center">
                  PURE <span className="fs_md">TRANSITION</span>
                </p>
                <p className="fs_sm text-white text-center">
                  VERRE <span className="fs_xsm">Gallery</span>
                </p>
                <button className="explore1_btn mt-4 d-flex mx-auto">
                  EXPLORE ALL
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ////////////////////////////Customers/////////////////////// */}

      <section>
        <div className=" my_container mt-5">
          <p className=" fs_1xl clr_grey text-center">
            HEAR FROM OUR SATISFIED CUSTOMERS
          </p>
          <div className=" row justify-content-between">
            <div className=" col-md-4 col-sm-6 col-10 position-relative mt-4 m-auto ">
              <div className=" p_space h-100">
                <div>
                  <p className=" fs_xsm clr_brown mb-2">
                    "I was blown away by the quality and elegance of my glass
                    basin. It’s the perfect center piece for my bathroom, and
                    the craftsmanship is outstanding!"
                  </p>
                </div>
                <div className=" d-flex align-items-center justify-content-between mt-3 border1 pt-2">
                  <div className=" d-flex align-items-center gap-2">
                    <img
                      className=" w-25"
                      src="./src/assets/Images/png/girl.png"
                      alt="girl"
                    />
                    <p className=" fs_xsm clr_grey">Emily R.</p>
                  </div>
                  <img
                    className=" w-50"
                    src="./src/assets/Images/png/stars1.png"
                    alt="star"
                  />
                </div>
              </div>
              {/* <img
              className=" img_c s1 d-none d-md-block"
              src="./src/assets/Images/png/sstar.png"
              alt="star"
            /> */}
            </div>
            <div className=" col-md-4 col-sm-6 col-10 position-relative mt-4 m-auto">
              <div className=" p_space h-100">
                <div>
                  <p className=" fs_xsm clr_brown mb-2">
                    "The glass countertop exceeded my expectations! It’s
                    durable, easy to maintain, and adds a modern touch to my
                    kitchen. Highly recommended!"
                  </p>
                </div>
                <div className=" d-flex align-items-center justify-content-between mt-3 border1 pt-2">
                  <div className=" d-flex align-items-center gap-2">
                    <img
                      className=" w-25"
                      src="./src/assets/Images/png/girl.png"
                      alt="girl"
                    />
                    <p className=" fs_xsm clr_grey">Daniel K.</p>
                  </div>
                  <img
                    className=" w-50"
                    src="./src/assets/Images/png/stars1.png"
                    alt="star"
                  />
                </div>
              </div>
              {/* <img
              className=" img_c s1 d-none d-md-block"
              src="./src/assets/Images/png/sstar.png"
              alt="star"
            /> */}
            </div>
            <div className=" col-md-4 col-sm-6 col-10 mt-4 m-auto">
              <div className=" p_space h-100">
                <div>
                  <p className=" fs_xsm clr_brown mb-2">
                    "The glass countertop exceeded my expectations! It’s
                    durable, easy to maintain, and adds a modern touch to my
                    kitchen. Highly recommended!"
                  </p>
                </div>
                <div className=" d-flex align-items-center justify-content-between mt-3 border1 pt-2">
                  <div className=" d-flex align-items-center gap-2">
                    <img
                      className=" w-25"
                      src="./src/assets/Images/png/girl.png"
                      alt="girl"
                    />
                    <p className=" fs_xsm clr_grey">Melissa W.</p>
                  </div>
                  <img
                    className=" w-50"
                    src="./src/assets/Images/png/stars1.png"
                    alt="star"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className=" view_button d-flex m-auto mt-4">VIEW ALL</button>
        </div>
      </section>

      {/* /////////////////////////EXPERTS///////////////////////// */}

      <section>
        <div className="my_container mt-5 mb-5">
          <div className="bgc_cream py-4 px-3 row align-items-center justify-content-between flex-column flex-md-row text-center text-md-start">
            <div className="col-12 col-xl-10 col-lg-9 mb-3 mb-md-0">
              <img
                className="img_c mb-2"
                src="./src/assets/Images/png/sstar.png"
                alt="star"
              />
              <div className=" text-lg-start text-center">
                <p className="clr_grey fs_lg">
                  PERFECTLY CONTROLED GLASS FUSING AND THERMOFORMING
                </p>
                <p className="fs_sm clr_brown">
                  Consistency in manufacturing for more than twenty years,
                  Proven protective packaging!
                </p>
              </div>
            </div>
            <div className="col-12 col-xl-2 col-lg-3 d-flex justify-content-center justify-content-lg-end mt-sm-3">
              <button className="expert_button">MEET OUR EXPERTS</button>
            </div>
          </div>
        </div>
      </section>

      {/* ////////////////////////////OUR NEWSLETTER//////////////// */}

      <section>
        <div>
          <div className="d-flex align-items-center justify-content-center flex-wrap mb-2 text-center">
            <img
              className="img_c"
              src="./src/assets/Images/png/sstar.png"
              alt="star"
            />
            <p className="clr_brown fs_xsm pe-3 ps-3 mb-0">
              SUBSCRIBE TO OUR E-MAILS
            </p>
            <img
              className="img_c"
              src="./src/assets/Images/png/sstar.png"
              alt="star"
            />
          </div>

          <p className="fs_lg clr_grey text-center mb-2">OUR NEWSLETTER</p>
          <p className="fs_xsm clr_brown text-center mb-4">
            Be the first to know about new collections and exclusive offers.
          </p>

          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
            <input
              className="mb-3 mb-md-0 me-md-3"
              type="email"
              placeholder="Enter your email"
            />
            <button className="subscribe_btn">SUBSCRIBE</button>
          </div>

          <p className="fs_1xsm clr_brown text-center mb-5">
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
