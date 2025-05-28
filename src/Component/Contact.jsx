import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className=" my_container d-flex justify-content-center">
        <div className=" w-75">
          <p className=" fs_md font_helvetica text-center clr_brown">
            <span className="text-primary me-2">✦</span>
            NEED ASSISTENCE?
            <span className="text-primary ms-2">✦</span>
          </p>
          <p className=" fs_xl clr_grey font_sedan text-center mt-3">
            WE ARE HERE TO HELP
          </p>
          <div className=" d-flex align-items-center justify-content-between mt-4">
            <input
              className=" w-50 me-2"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className=" w-50"
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
          <textarea className=" w-100 mt-2 p-2" name="message" placeholder="Message" rows={4}></textarea>
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
        <div className=" my_container mt-5 pt-5">
          <div className=" row align-items-center justify-content-between">
            <div className=" col-6">
              <div className=" return_box d-flex align-items-center justify-content-between">
                <div>
                  <p className=" fs_md font_sedan clr_grey">
                  <span className="text-primary me-2">✦</span>
                  RETURNS & REFUNDS
                </p>
                <p className=" fs_1xsm clr_grey1 font_helvetica ms-4">Understand Our Easy & Transparent Return and Refund Policy</p>
                </div>
                <img className=" img_c" src="./src/assets/Images/png/right_arrow.png" alt="right" />
              </div>
            </div>
            <div className=" col-6">
              <div className=" return_box d-flex align-items-center justify-content-between">
                <div>
                  <p className=" fs_md font_sedan clr_grey">
                  <span className="text-primary me-2">✦</span>
                  SHIPPING POLICY
                </p>
                <p className=" fs_1xsm clr_grey1 font_helvetica ms-4">Get the Details on Our Reliable & Efficient Shipping Policy</p>
                </div>
                <img className=" img_c" src="./src/assets/Images/png/right_arrow.png" alt="right" />
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

           

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Contact;
