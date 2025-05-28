import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Accordion } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className=" my_container d-flex justify-content-center">
        <div className=" w-75">
          <div className="text-center">
            {/* Small screens */}
            <div className="d-md-none d-flex justify-content-center align-items-center fs_md font_helvetica clr_brown">
              <span className="text-primary me-2">✦</span>
              WE ARE HERE TO HELP
              <span className="text-primary ms-2">✦</span>
            </div>

            {/* Medium and larger screens */}
            <div className="d-none d-md-block">
              <p className="fs_md font_helvetica text-center clr_brown">
                <span className="text-primary me-2">✦</span>
                NEED ASSISTANCE?
                <span className="text-primary ms-2">✦</span>
              </p>
            </div>

            <div className="d-none d-md-block">
              <p className="fs_xl clr_grey font_sedan text-center mt-3">
                WE ARE HERE TO HELP
              </p>
            </div>
            <div className=" d-flex d-md-none justify-content-center">
              <p className="fs_xl clr_grey font_sedan text-center mt-3">
                NEED ASSISTANCE?
              </p>
            </div>
          </div>

          <div className="d-flex flex-wrap flex-md-nowrap align-items-center justify-content-between mt-4">
            <input
              className="w-100 w-md-50 me-0 me-md-2 mb-2 mb-md-0"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="w-100 w-md-50"
              type="email"
              name="email"
              placeholder="E-mail"
            />
          </div>

          <input
            className=" w-100 mt-2"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            className=" w-100 mt-2 p-2"
            name="message"
            placeholder="Message"
            rows={4}
          ></textarea>
          <button className=" text-white fs_md font_helvetica message_btn mt-4 d-flex m-auto">
            SEND YOUR MESSAGE
          </button>
          <p className=" fs_xsm clr_grey1 font_helvetica text-center mt-2">
            If you have any questions, you can take a look at our FAQ’s. Another
            request? Our team is at your disposal to answer it.
          </p>
        </div>
      </div>

      {/* //////////////////////////////////////Returns & Refunds/////////////////////////// */}

      <section>
        <div className="my_container mt-5 pt-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 col-12 mb-4 mb-md-0">
              <div className="return_box d-flex align-items-center justify-content-between">
                <div>
                  <p className="fs_md font_sedan clr_grey">
                    <span className="text-primary me-2">✦</span>
                    RETURNS & REFUNDS
                  </p>
                  <p className="fs_1xsm clr_grey1 font_helvetica ms-4">
                    Understand Our Easy & Transparent Return and Refund Policy
                  </p>
                </div>
                <img
                  className="img_c"
                  src="./src/assets/Images/png/right_arrow.png"
                  alt="right"
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="return_box d-flex align-items-center justify-content-between">
                <div>
                  <p className="fs_md font_sedan clr_grey">
                    <span className="text-primary me-2">✦</span>
                    SHIPPING POLICY
                  </p>
                  <p className="fs_1xsm clr_grey1 font_helvetica ms-4">
                    Get the Details on Our Reliable & Efficient Shipping Policy
                  </p>
                </div>
                <img
                  className="img_c"
                  src="./src/assets/Images/png/right_arrow.png"
                  alt="right"
                />
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

export default Contact;
