import React from "react";
import Navbar from "../Components/Navbar";
import { Accordion } from "react-bootstrap";
import Footer from "../Components/Footer";
import stars from "../assets/Images/png/stars.png";
import wbasin1 from "../assets/Images/png/wbasin1.png";
import wbasin2 from "../assets/Images/png/wbasin2.png";
import wbasin3 from "../assets/Images/png/wbasin3.png";
import wbasin4 from "../assets/Images/png/wbasin4.png";
import img1 from "../assets/Images/png/img1.png";
import img2 from "../assets/Images/png/img2.png";
import img3 from "../assets/Images/png/img3.png";
import ph1 from "../assets/Images/png/ph1.png";
import ph2 from "../assets/Images/png/ph2.png";
import ph3 from "../assets/Images/png/ph3.png";
import right_arrow from "../assets/Images/png/right_arrow.png";
import Button from "../Components/Button";
import Customer from "../Components/Customer";

const Shop = () => {
  const Buybtn = `mt-3 w-100`;
  return (
    <>
      <div>
        <Navbar />
        <div className=" my_container">
          <p className=" fs_xsm clr_grey1 font_helvetica text-start">
            Home / Shop / Basins /{" "}
          </p>
          <div className=" row  mt-2">
            <div className=" col-md-6 col-sm-10 col-12 mx-sm-auto">
              <div className=" row align-items-start justify-content-between">
                <div className=" col-2">
                  <img className=" ph_img w-100" src={ph1} alt="washbasins" />
                </div>
                <div className=" col-10">
                  <img
                    className=" wbasin  w-100 mb-3"
                    src={ph2}
                    alt="washbasins"
                  />
                  <hr />
                  <div className=" mt-3">
                    <Accordion defaultActiveKey="0" flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          OUR WARRANTY & GUARANTEE
                        </Accordion.Header>
                        <Accordion.Body>
                          We provide a 1-year warranty on all our basins
                          covering manufacturing defects.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>SHIPPING & RETURNS</Accordion.Header>
                        <Accordion.Body>
                          Free shipping within India. Returns accepted within 15
                          days of delivery.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-sm-10 col-12 mx-sm-auto">
              <p className=" fs_sm clr_grey fw-bolder font_helvetica">
                ROUND Basin - on small pedestal with wrought iron support
              </p>
              <p className=" fs_xsm1 clr_grey1 font_helvetica">LAS1O1</p>

              <div className=" d-flex align-items-center justify-content-between mt-2">
                <div>
                  <p className=" fs_sm fw-bolder clr_brown">$ 3,995.00</p>
                </div>
                <div className=" d-flex align-items-center justify-content-end">
                  <img className=" w-50" src={stars} alt="rating" />
                  <p className=" fs_sm clr_brown">12.9k</p>
                </div>
              </div>

              <hr />

              <p className=" fs_xsm clr_brown font_helvetica">Description:</p>
              <p className=" fs_sm clr_grey1 font_helvetica">
                3/4’’ (18mm) thick <br /> Round basin on small pedestal <br />{" "}
                with wrought iron support
              </p>
              <p className=" fs_xsm clr_brown font_helvetica mt-3">
                Trim finish:
              </p>
              <p className=" fs_sm clr_grey1 font_helvetica">
                Gold – Chrome – Brushed nickel – Satin <br />
                gold Copper un-plated to paint
              </p>
              <p className=" fs_xsm clr_brown font_helvetica mt-3">
                Standards:
              </p>
              <p className=" fs_sm clr_grey1 font_helvetica">
                # can CGSB 12.1 – M96 <br />
                # ansi 297.1 – 1984 <br /># cps 16-CE1201C11
              </p>

              <hr />

              <p className=" fs_xsm clr_brown font_helvetica mt-3">
                Select Color:
              </p>
              <img className=" w-75" src={ph3} alt="color" />
              <button className=" w-100 fs_sm clr_grey font_helvetica py-2 mt-2 border-dark">
                Add to Cart
              </button>
              <Button text="BUY NOW" style={Buybtn} />
              <div className=" bgc_cream px-3 py-4 d-flex align-items-center justify-content-between mt-5">
                <div>
                  <p className="fs_md font_sedan clr_grey">
                    <span className="text-primary me-2">✦</span>
                    INSPIRATION
                  </p>
                  <p className="fs_1xsm clr_grey1 font_helvetica ms-4">
                    Personalize your decor - Start designing
                  </p>
                </div>
                <img className="img_c" src={right_arrow} alt="right" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ////////////////////////////Product Reviews/////////////////////// */}

      <Customer />

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
            <div className=" pe-3 col-md-3 col-sm-6 col-12 mx-sm-auto mt-4">
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
            <div className=" pe-3 col-md-3 col-sm-6  mx-sm-auto col-12 mt-4 mt-md-0">
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
            <div className=" pe-3 col-md-3 col-sm-6  mx-sm-auto col-12 mt-4 mt-md-0">
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
            <div className=" pe-3 col-md-3 col-sm-6  mx-sm-auto col-12 mt-4 mt-md-0">
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
            <div className=" col-md-8 col-12">
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
            <div className=" col-md-4 col-12 d-flex flex-column gap-4 mt-4 mt-md-0">
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
