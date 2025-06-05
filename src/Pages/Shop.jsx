import React from "react";
import Navbar from "../Components/Navbar";
import { Accordion } from "react-bootstrap";
import Footer from "../Components/Footer";
import girl from "../assets/Images/png/girl.png";
import stars1 from "../assets/Images/png/stars1.png";
import sstar from "../assets/Images/png/sstar.png";
import stars from "../assets/Images/png/stars.png";
import wbasin1 from "../assets/Images/png/wbasin1.png";
import wbasin2 from "../assets/Images/png/wbasin2.png";
import wbasin3 from "../assets/Images/png/wbasin3.png";
import wbasin4 from "../assets/Images/png/wbasin4.png";
import img1 from "../assets/Images/png/img1.png";
import img2 from "../assets/Images/png/img2.png";
import img3 from "../assets/Images/png/img3.png";

const Shop = () => {
  return (
    <>
      <Navbar />

      {/* ////////////////////////////Product Reviews/////////////////////// */}

      <section>
        <div className=" my_container mt-5">
          <p className=" fs_1xl clr_grey text-center font_sedan">
            PRODUCT REVIEWS
          </p>
          <div className=" row justify-content-between">
            <div className=" col-md-3 col-sm-6 col-10 position-relative mt-4 m-auto ">
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
            <div className=" col-md-3 col-sm-6 col-10 position-relative mt-4 m-auto">
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
            <div className=" col-md-3 col-sm-6 col-10 mt-4 m-auto">
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

      {/* ///////////////////////////You May Also Like///////////////////////// */}

      <section>
        <div className=" my_container">
          <div className=" d-flex justify-content-between align-items-center mt-3">
            <p className=" fs_1xl clr_grey font_sedan">You May Also Like</p>
            <div className=" d-flex">
              <p className=" text-decoration-underline me-1 font_helvetica">
                VIEW ALL
              </p>
              <p>
                <span>{">"}</span>
              </p>
            </div>
          </div>

          <div className=" row">
            <div className=" pe-3 col-3">
              <div className=" p_space">
                <div>
                  <img className=" w-100" src={wbasin1} alt="washbasin" />
                </div>
                <div>
                  <p className=" fs_sm clr_grey fw-bolder">
                    Small Round Basin - squared to wall pedestal
                  </p>

                  <div className=" d-flex align-items-center justify-content-between">
                    <div>
                      <p className=" fs_sm fw-bolder clr_brown">$3,995.00</p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-end">
                      <img className=" w-50" src={stars} alt="rating" />
                      <p className=" fs_sm clr_brown">12.9k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" pe-3 col-3">
              <div className=" p_space">
                <div>
                  <img className=" w-100" src={wbasin2} alt="washbasin" />
                </div>
                <div>
                  <p className=" fs_sm clr_grey fw-bolder font_helvetica">
                    ROUND Basin - on small pedestal wrought iron{" "}
                  </p>
                  <div className=" d-flex align-items-center justify-content-between">
                    <div>
                      <p className=" fs_sm fw-bolder clr_brown">$5,495.00</p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-end">
                      <img className=" w-50" src={stars} alt="rating" />
                      <p className=" fs_sm clr_brown">6.8k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" pe-3 col-3">
              <div className=" p_space">
                <div>
                  <img className=" w-100" src={wbasin3} alt="washbasin" />
                </div>
                <div>
                  <p className=" fs_sm clr_grey fw-bolder font_helvetica">
                    Large Round Basin - on small pedestal
                  </p>
                  <div className=" d-flex align-items-center justify-content-between">
                    <div>
                      <p className=" fs_sm fw-bolder clr_brown">$4,495.00</p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-end">
                      <img className=" w-50" src={stars} alt="rating" />
                      <p className=" fs_sm clr_brown">4.8k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" pe-3 col-3">
              <div className=" p_space">
                <div>
                  <img className=" w-100" src={wbasin4} alt="washbasin" />
                </div>
                <div>
                  <p className=" fs_sm clr_grey fw-bolder font_helvetica">
                    Small Round Basin - squared to wall pedestal
                  </p>
                  <div className=" d-flex align-items-center justify-content-between">
                    <div>
                      <p className=" fs_sm fw-bolder clr_brown">$3,995.00</p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-end">
                      <img className=" w-50" src={stars} alt="rating" />
                      <p className=" fs_sm clr_brown">8.5k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* //////////////////////////////////img section////////////////////////// */}

      <section>
        <div className=" my_container mt-5">
          <div className=" row h-100">
            <div className=" col-8">
              <div className=" position-relative">
                <img className=" w-100" src={img1} alt="basin" />
                <div className=" p_btn">
                  <p className=" fs_md fw-normal text-white mb-2 font_sedan">
                    BASIN
                  </p>
                  <button className=" product_btn font_helvetica">
                    VIEW PRODCUTS
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-4 d-flex flex-column gap-4">
              <div className=" position-relative h-50">
                <img
                  className=" w-100 h-100 object-fit-cover"
                  src={img2}
                  alt="basin"
                />
                <div className=" p_btn">
                  <p className=" fs_md fw-normal text-white mb-2 font_sedan">
                    PEDESTAL
                  </p>
                  <button className=" product_btn font_helvetica">
                    VIEW PRODCUTS
                  </button>
                </div>
              </div>
              <div className=" position-relative h-50">
                <img
                  className=" w-100 h-100 object-fit-cover"
                  src={img3}
                  alt="basin"
                />
                <div className=" p_btn">
                  <p className=" fs_md fw-normal text-white mb-2 font_sedan">
                    UNDERMOUNT
                  </p>
                  <button className=" product_btn font_helvetica">
                    VIEW PRODCUTS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ////////////////////FREQUENTLY ASKED QUESTIONS//////////////////////////// */}

      <section>
        <div className=" my_container mt-5 pt-5">
          <p className=" fs_md font_helvetica text-center clr_brown">
            <span className="text-primary me-2">✦</span>
            FIND ANSWERS TO COMMON QUESTIONS
            <span className="text-primary ms-2">✦</span>
          </p>
          <p className=" fs_xl clr_grey font_sedan text-center mt-3">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <div className=" mt-5 mb-5">
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Are Glass Basins Easy To Install?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, glass basins are designed for easy installation and
                  typically come with clear instructions.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What Is The Useful Life Of Glass? (Scratches, Discoloration,
                  Etc.)
                </Accordion.Header>
                <Accordion.Body>
                  Thermo formed glass is a material that is quite sturdy and
                  stable after being processed. Just think about your window
                  panes. Thermo formed glass is resistant to scratches. It will
                  also keep its shimmering color for a long time.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Does Thermo Formed Glass Need Special Care?
                </Accordion.Header>
                <Accordion.Body>
                  It only requires basic cleaning—no special care needed. Just
                  use mild cleaners and a soft cloth.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Availability Of Basin Products?
                </Accordion.Header>
                <Accordion.Body>
                  Basin products are widely available both online and at home
                  improvement stores.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Shop;
