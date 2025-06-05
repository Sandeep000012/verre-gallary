import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import sstar from "../assets/Images/png/sstar.png"
import aa from "../assets/Images/png/aa.png"
import bb from "../assets/Images/png/bb.png"
import st1 from "../assets/Images/png/st1.png"
import st2 from "../assets/Images/png/st2.png"
import p1 from "../assets/Images/png/p1.png"
import p2 from "../assets/Images/png/p2.png"
import p3 from "../assets/Images/png/p3.png"
import p4 from "../assets/Images/png/p4.png"
import girl from "../assets/Images/png/girl.png"
import stars1 from "../assets/Images/png/stars1.png"


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
          </div>
        </div>
      </div>

      {/* /////////////////////////////CANADIAN BRAND////////////////// */}

      <section>
        <div className="text-center p-4 mt-5">
          <h2 className=" fs_2xl font_sedan d-flex m-auto w-75 lh-1 clr_grey">
            <span className="text-primary">✦</span>
            We Are A Canadian Brand, And All Our Products Are Manufactured In
            Canada
            <span className="text-primary">✦</span>
          </h2>
          <p className="mt-3 clr_brown fs_md font_helvetica w_65 text-center px-3 d-flex m-auto">
            RENAISSANCE GLASSWORKS has been creating and selling its glass
            products around the world for 25 years now. Our striking, stylish
            wash basins, often mounted on an elegant glass column, and our
            textured glass accessories and custom countertops and back splashes
            are among our best-selling creations.
          </p>
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
                  src={sstar}
                  alt="star"
                />
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
              <button className="about_btn mt-4 mx-auto mx-md-0 font_helvetica">
                ABOUT US
              </button>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end position-relative mb-4 mb-md-0 overflow-hidden">
              <img
                className="w-75"
                src={aa}
                alt="main"
              />
              <img
                className="w-50 glass position-absolute"
                src={bb}
                alt="overlay"
              />
            </div>
          </div>
        </div>
      </section>

      {/* //////////////////////////OUR STORY////////////////////// */}

      <section>
        <div className="my_container mt-5 pt-5">
          <div className="row align-items-end justify-content-between flex-md-row text-center text-md-start">
            <div className="col-12 col-md-6 d-flex justify-content-between mb-4 mb-md-0 overflow-hidden">
              <div className=" row align-items-end justify-content-between">
                <div className=" col-md-8 col-8">
                  <img
                  className=" stry_img me-4 w-100"
                  src={st1}
                  alt="main"
                />
                </div>
                <div className=" col-md-4 col-4">
                  <img
                  className=" stry_img2"
                  src={st2}
                  alt="overlay"
                />
                </div>
              </div>
            </div> 

            <div className="col-12 col-md-5 mt-4 mt-md-0">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                <img
                  className="img_c me-3"
                  src={sstar}
                  alt="star"
                />
                <p className="fs_xsm fw-normal clr_brown mb-0 font_helvetica">
                  OUR STORY
                </p>
              </div>
              <p className="fs_xl clr_grey mb-3 lh-1 font_sedan">
                A Passion for Glass, A Legacy of Artistry
              </p>
              <p className="fs_xsm clr_brown font_helvetica">
                Verre Gallery was founded to bring finely crafted glass art to
                those who appreciate elegance and quality. We work with skilled
                artisans and innovative designers to curate collections that
                reflect both classic and modern sensibilities, ensuring that
                every piece tells a unique story.
              </p>
            </div>
          </div>
        </div>
      </section>

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
            <div
              className="cmt_box mt-4 mx-auto"
              
            >
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

      {/* ///////////////////////////////////VERRE GALLERY//////////////////////////// */}

      <section>
        <div className=" container mt-5">
          <h2 className=" fs_2xl font_sedan text-center d-flex m-auto w-75 lh-1 clr_grey">
            <span className="text-primary me-2">✦</span>
            WHY CHOOSE VERRE GALLERY
            <span className="text-primary ms-2">✦</span>
          </h2>
          <p className=" fs_md clr_brown font_helvetica text-center mt-2">
            At Verre Gallery, we invite you to explore the world of fine
            glassware and discover pieces that bring elegance to your home, and
            lifestyle.
          </p>

          <div className=" row align-items-center justify-content-between mt-4">
            <div className=" col-sm-6 col-xsm-10 mb-4">
              <div className=" d-flex align-items-center justify-content-between">
                <img
                  className=" me-3 p_img2"
                  src={p1}
                  alt="new product"
                />
                <div>
                  <p className=" fs_md clr_grey font_sedan lh-1">
                    INNOVATION AND NEW PRODUCTS
                  </p>
                  <p className=" fs_sm clr_brown font_helvetica mt-2 lh-1">
                    We offer the largest choice of wash basins with a wide
                    variety of unique accessories for the bathroom.
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-sm-6 col-xsm-10 mb-4">
              <div className=" d-flex align-items-center justify-content-between">
                <img
                  className=" me-4 p_img2"
                  src={p2}
                  alt="new product"
                />
                <div>
                  <p className=" fs_md clr_grey font_sedan lh-1">
                    FOREVER ENVIRONMENT FRIENDLY
                  </p>
                  <p className=" fs_sm clr_brown font_helvetica mt-2 lh-1">
                    No chemicals, We prioritize eco-friendly practices and
                    responsible sourcing.
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-sm-6 col-xsm-10 mb-4">
              <div className=" d-flex align-items-center justify-content-between">
                <img
                  className=" me-4 p_img2"
                  src={p3}
                  alt="new product"
                />
                <div>
                  <p className=" fs_md clr_grey font_sedan lh-1">
                    TIMELESS AND ANTIBACTERIAL DESIGNS
                  </p>
                  <p className=" fs_sm clr_brown font_helvetica mt-2 lh-1">
                    Inspired by art, culture, and modern trends. 100% recyclable
                    and transformable, glass is a green product by design.
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-sm-6 col-xsm-10 mb-4">
              <div className=" d-flex align-items-center justify-content-between">
                <img
                  className=" me-3 p_img2"
                  src={p4}
                  alt="new product"
                />
                <div>
                  <p className=" fs_md clr_grey font_sedan lh-1">
                    NON-POROUS GLASS
                  </p>
                  <p className=" fs_sm clr_brown font_helvetica mt-2 lh-1">
                    Our thermo formed glass is impervious to fingerprints and
                    water marks, compared to standard translucent glass. Just
                    try it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /////////////////////////////////SHOP NOW////////////////////////////////// */}

      <section>
        <div className=" d-flex align-items-center justify-content-between mt-5 pt-3">
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
            <p className=" fs_1xl clr_grey fw-normal text-center scroll-content font_sedan">
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

      {/* ////////////////////////////Customers/////////////////////// */}

      <section>
        <div className=" my_container mt-5 pt-5">
          <p className=" fs_1xl clr_grey text-center font_sedan">
            HEAR FROM OUR SATISFIED CUSTOMERS
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
                    <img
                      className=" w-25"
                      src={girl}
                      alt="girl"
                    />
                    <p className=" fs_xsm clr_grey">Emily R.</p>
                  </div>
                  <img
                    className=" w-50"
                    src={stars1}
                    alt="star"
                  />
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
                    <img
                      className=" w-25"
                      src={girl}
                      alt="girl"
                    />
                    <p className=" fs_xsm clr_grey">Daniel K.</p>
                  </div>
                  <img
                    className=" w-50"
                    src={stars1}
                    alt="star"
                  />
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
                    <img
                      className=" w-25"
                      src={girl}
                      alt="girl"
                    />
                    <p className=" fs_xsm clr_grey">Melissa W.</p>
                  </div>
                  <img
                    className=" w-50"
                    src={stars1}
                    alt="star"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className=" view_button d-flex m-auto mt-4 font_helvetica">
            VIEW ALL
          </button>
        </div>
      </section>

      {/* /////////////////////////EXPERTS///////////////////////// */}

      <section>
        <div className="my_container mt-5 mb-5">
          <div className="bgc_cream py-4 px-3 row align-items-center justify-content-between flex-column flex-md-row text-center text-md-start">
            <div className="col-12 col-xl-10 col-lg-9 mb-3 mb-md-0">
              <img
                className="img_c mb-2"
                src={sstar}
                alt="star"
              />
              <div className=" text-lg-start text-center">
                <p className="clr_grey fs_lg font_sedan">
                  PERFECTLY CONTROLED GLASS FUSING AND THERMOFORMING
                </p>
                <p className="fs_sm clr_brown font_helvetica">
                  Consistency in manufacturing for more than twenty years,
                  Proven protective packaging!
                </p>
              </div>
            </div>
            <div className="col-12 col-xl-2 col-lg-3 d-flex justify-content-center justify-content-lg-end mt-sm-3">
              <button className="expert_button font_helvetica">
                MEET OUR EXPERTS
              </button>
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
              src={sstar}
              alt="star"
            />
            <p className="clr_brown fs_xsm pe-3 ps-3 mb-0 font_helvetica">
              SUBSCRIBE TO OUR E-MAILS
            </p>
            <img
              className="img_c"
              src={sstar}
              alt="star"
            />
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
            <button className="subscribe_btn font_helvetica">SUBSCRIBE</button>
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

export default About;
