import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import girl from "../assets/Images/png/girl.png"
import stars1 from "../assets/Images/png/stars1.png"
import sstar from "../assets/Images/png/sstar.png"

const Customer = () => {
  const sliderRef3 = useRef(null);
  const settings3 = {
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
          slidesToShow: 1,
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
    <div>
      <section className=" d-none d-md-block">
        <div className=" my_container mt-5">
          <p className=" fs_1xl clr_grey text-center font_sedan">
            HEAR FROM OUR SATISFIED CUSTOMERS
          </p>
          <div className=" row justify-content-between">
            <div className=" col-md-3 col-10 position-relative mt-4 m-auto ">
              <div className=" p_space h-100">
                <div>
                  <p className=" fs_xsm clr_brown mb-2 font_helvetica">
                    "I was blown away by the quality and elegance of my glass
                    basin. It’s the perfect center piece for my bathroom, and
                    the craftsmanship is outstanding!"
                  </p>
                </div>
                <div className=" d-flex align-items-center justify-content-between mt-3 border1 pt-2">
                  <div className=" d-flex align-items-center gap-2">
                    <img className=" w-25" src={girl} alt="girl" />
                    <p className=" fs_xsm clr_grey">Emily R.</p>
                  </div>
                  <img className=" w-50" src={stars1} alt="star" />
                </div>
              </div>
              <img
                className=" img_c s1 d-none d-lg-block"
                src={sstar}
                alt="star"
              />
            </div>
            <div className=" col-md-3 col-10 position-relative mt-4 m-auto">
              <div className=" p_space h-100">
                <div>
                  <p className=" fs_xsm clr_brown mb-2 font_helvetica">
                    "The glass countertop exceeded my expectations! It’s
                    durable, easy to maintain, and adds a modern touch to my
                    kitchen. Highly recommended!"
                  </p>
                </div>
                <div className=" d-flex align-items-center justify-content-between mt-3 border1 pt-2">
                  <div className=" d-flex align-items-center gap-2">
                    <img className=" w-25" src={girl} alt="girl" />
                    <p className=" fs_xsm clr_grey">Daniel K.</p>
                  </div>
                  <img className=" w-50" src={stars1} alt="star" />
                </div>
              </div>
              <img
                className=" img_c s1 d-none d-lg-block"
                src={sstar}
                alt="star"
              />
            </div>
            <div className=" col-md-3 col-10 mt-4 m-auto">
              <div className=" p_space h-100">
                <div>
                  <p className=" fs_xsm clr_brown mb-2 font_helvetica">
                    "The glass countertop exceeded my expectations! It’s
                    durable, easy to maintain, and adds a modern touch to my
                    kitchen. Highly recommended!"
                  </p>
                </div>
                <div className=" d-flex align-items-center justify-content-between mt-3 border1 pt-2">
                  <div className=" d-flex align-items-center gap-2">
                    <img className=" w-25" src={girl} alt="girl" />
                    <p className=" fs_xsm clr_grey">Melissa W.</p>
                  </div>
                  <img className=" w-50" src={stars1} alt="star" />
                </div>
              </div>
            </div>
          </div>
          <button className=" view_button d-flex m-auto mt-4 font_helvetica">
            VIEW ALL
          </button>
        </div>
      </section>

      <section className=" d-block d-md-none">
        <div className=" my_container mt-5">
          <p className=" fs_1xl clr_grey text-center font_sedan">
            HEAR FROM OUR SATISFIED CUSTOMERS
          </p>

          <div className="w-11/12 mx-auto relative">
            <Slider ref={sliderRef3} {...settings3}>
              <div className=" col-md-3 col-10 position-relative mt-4 m-auto ">
                <div className=" p_space h-100">
                  <div>
                    <p className=" fs_xsm clr_brown mb-2 font_helvetica">
                      "I was blown away by the quality and elegance of my glass
                      basin. It’s the perfect center piece for my bathroom, and
                      the craftsmanship is outstanding!"
                    </p>
                  </div>
                  <div className=" d-flex align-items-center justify-content-between mt-3 border1 pt-2">
                    <div className=" d-flex align-items-center gap-2">
                      <img className=" w-25" src={girl} alt="girl" />
                      <p className=" fs_xsm clr_grey">Emily R.</p>
                    </div>
                    <img className=" w-50" src={stars1} alt="star" />
                  </div>
                </div>
                <img
                  className=" img_c s1 d-none d-lg-block"
                  src={sstar}
                  alt="star"
                />
              </div>
              <div className=" col-md-3 col-10 position-relative mt-4 m-auto">
                <div className=" p_space h-100">
                  <div>
                    <p className=" fs_xsm clr_brown mb-2 font_helvetica">
                      "The glass countertop exceeded my expectations! It’s
                      durable, easy to maintain, and adds a modern touch to my
                      kitchen. Highly recommended!"
                    </p>
                  </div>
                  <div className=" d-flex align-items-center justify-content-between mt-3 border1 pt-2">
                    <div className=" d-flex align-items-center gap-2">
                      <img className=" w-25" src={girl} alt="girl" />
                      <p className=" fs_xsm clr_grey">Daniel K.</p>
                    </div>
                    <img className=" w-50" src={stars1} alt="star" />
                  </div>
                </div>
                <img
                  className=" img_c s1 d-none d-lg-block"
                  src={sstar}
                  alt="star"
                />
              </div>
              <div className=" col-md-3 col-10 mt-4 m-auto">
                <div className=" p_space h-100">
                  <div>
                    <p className=" fs_xsm clr_brown mb-2 font_helvetica">
                      "The glass countertop exceeded my expectations! It’s
                      durable, easy to maintain, and adds a modern touch to my
                      kitchen. Highly recommended!"
                    </p>
                  </div>
                  <div className=" d-flex align-items-center justify-content-between mt-3 border1 pt-2">
                    <div className=" d-flex align-items-center gap-2">
                      <img className=" w-25" src={girl} alt="girl" />
                      <p className=" fs_xsm clr_grey">Melissa W.</p>
                    </div>
                    <img className=" w-50" src={stars1} alt="star" />
                  </div>
                </div>
              </div>
            </Slider>
            <div className=" d-flex  align-items-center justify-content-center  g-4  mt-5 pt-4">
              <button
                onClick={() => sliderRef3.current?.slickPrev()}
                className=" fs_lg rounded-circle py-2 px-4 me-4"
              >
                <span className=" fs_lg">{"<"}</span>
              </button>
              <button
                onClick={() => sliderRef3.current?.slickNext()}
                className="  fs_lg rounded-circle py-2 px-4"
              >
                <span className=" fs_lg">{">"}</span>
              </button>
            </div>
          </div>
          <button className=" view_button d-flex m-auto mt-4 font_helvetica">
            VIEW ALL
          </button>
        </div>
      </section>
    </div>
  );
};

export default Customer;
