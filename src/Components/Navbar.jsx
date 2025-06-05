import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import flag from "../assets/Images/png/flag.png"
import hamburger from "../assets/Images/png/hamburger.png"
import search from "../assets/Images/png/search.png"
import down from "../assets/Images/png/down.png"
import Group from "../assets/Images/png/Group.png"
import login from "../assets/Images/png/login.png"
import cart from "../assets/Images/png/cart.png"
import cart1 from "../assets/Images/png/cart1.png"
import cart2 from "../assets/Images/png/cart2.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navigate = useNavigate();
  const navToPage = (url) => {
    navigate(url);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="bgc_sky_blue pt-2 pb-2 position-relative overflow-hidden">
          <div className="my_container">
            <div className="d-flex align-items-center justify-content-between">
              <div className="scroll-wrapper w-100 d-md-none">
                <div className="scroll-content d-flex align-items-center m-auto">
                  <span className="fs_sm clr_brown me-3">{"<"}</span>
                  <p className="fs_sm clr_brown fw-normal m-0 font_helvetica">
                    Exclusive Deals on all Glass Basins Collections –{" "}
                    <a href="#" className="text-decoration-underline clr_brown">
                      Don’t Miss Out!
                    </a>
                  </p>
                  <span className="fs_sm clr_brown ms-3">{">"}</span>
                </div>
              </div>

              <div className="d-none d-md-flex align-items-center m-auto">
                <span className="fs_sm clr_brown me-3">{"<"}</span>
                <p className="fs_sm clr_brown fw-normal m-0">
                  Exclusive Deals on all Glass Basins Collections –{" "}
                  <a href="#" className="text-decoration-underline clr_brown">
                    Don’t Miss Out!
                  </a>
                </p>
                <span className="fs_sm clr_brown ms-3">{">"}</span>
              </div>

              <div>
                <img src={flag} alt="flag" />
              </div>
            </div>
          </div>
        </div>
        {/* //////////////////hamburger/////////// */}
        <div className="my_container position-relative mb-0">
          <div className="d-flex align-items-center justify-content-between pt-4 pb-4">
            {/* Left Side - Hamburger + Search */}
            <div className="d-flex align-items-center">
              {/* Hamburger button for screen ≤ 768px */}
              <button
                className="d-md-none border-0 bg-transparent me-3"
                onClick={() => setMenuOpen(true)}
              >
                <img
                  className="icon-sm"
                  src={hamburger}
                  alt="menu"
                />
              </button>

              {/* Search icon */}
              <img
                className="me-3 icon-sm"
                src={search}
                alt="search"
              />

              {/* Desktop Menu - only visible ≥ md */}
              <ul className="d-none d-md-flex mb-0">
                <li>
                  <NavLink
                    style={({ isActive }) => {
                      return { color: isActive ? "skyblue" : "" };
                    }}
                    className="fs_sm clr_grey me-4 font_helvetica"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => {
                      return { color: isActive ? "skyblue" : "" };
                    }}
                    className="fs_sm clr_grey d-flex gap-2 font_helvetica"
                    to="/Shop"
                  >
                    Shop{" "}
                    <span>
                      <img
                        src={down}
                        alt="down"
                      />
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Center Logo */}
            <div className="d-flex justify-content-center">
              <img
                className="w-50"
                src={Group}
                alt="logo"
              />
            </div>

            {/* Right Side */}
            <div className="d-flex align-items-center">
              {/* Desktop links - only visible ≥ md */}
              <ul className="d-none d-md-flex align-items-center mb-0 me-3">
                <li>
                  <NavLink
                    style={({ isActive }) => {
                      return { color: isActive ? "skyblue" : "" };
                    }}
                    className="fs_sm clr_grey me-4 font_helvetica"
                    to="/About"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => {
                      return { color: isActive ? "skyblue" : "" };
                    }}
                    className="fs_sm clr_grey me-4 font_helvetica"
                    to="/Contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>

              {/* Always visible - login & cart icons */}
              <NavLink className="me-3" to="/Log_In">
                <img
                  className="icon-sm"
                  src={login}
                  alt="login"
                />
              </NavLink>

              <li>
                <button onClick={() => setIsCartOpen(true)} className=" cart_btn">
                <img
                  className="icon-sm"
                  src={cart}
                  alt="cart"
                />
                </button>
              </li>
            </div>
          </div>

          {/* Mobile Sidebar Menu */}
          <div
            className={`mobile-sidebar bg-white position-fixed top-0 start-0 h-100 shadow p-4 transition ${
              menuOpen ? "show" : ""
            }`}
            style={{ width: "250px", zIndex: 1050 }}
          >
            <button
              className="border-0 bg-transparent mb-4"
              onClick={() => setMenuOpen(false)}
            >
              ❌ Close
            </button>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Shop" onClick={() => setMenuOpen(false)}>
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/About" onClick={() => setMenuOpen(false)}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {isCartOpen && (
            <div className="position-fixed top-0 end-0 h-100 w-25  bg-white z-index-50 shadow-lg transition-transform translate-x-0">
              {/* Header */}
              <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
                <h2 className="fs-5 fw-semibold font_sedan">My Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="fs-4 fw-light border-0 bg-transparent"
                >
                  ×
                </button>
              </div>

              <div className="px-3 pt-3 pb-2">
                {/* Cart Item */}
                <div className="d-flex align-items-start gap-3 border-bottom pb-3">
                  <img
                    src={cart1}
                    alt="item"
                    className="img-fluid"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                    }}
                  />
                  <div className="flex-grow-1">
                    <p className="fw-semibold fs-6 mb-1">
                      ROUND Basin - on small pedestal with wrought iron support
                    </p>
                    <p className="text-muted small">LAS101</p>
                    <div className="d-flex align-items-center gap-2 mt-2">
                      <button className="btn btn-outline-secondary btn-sm px-2 py-0">
                        −
                      </button>
                      <span className="small">1</span>
                      <button className="btn btn-outline-secondary btn-sm px-2 py-0">
                        +
                      </button>
                      <button className="btn btn-link btn-sm ms-auto text-decoration-underline text-muted p-0">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>

                {/* Suggestions */}
                <div className="pt-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <p className="fw-semibold small m-0">ADD MORE ITEMS</p>
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#000",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <div className="d-flex gap-3">
                    <img
                      src={cart2}
                      alt="suggest"
                      className="border img-fluid"
                      style={{
                        width: "150px",
                        height: "164px",
                        objectFit: "contain",
                      }}
                    />
                    <div className="flex-grow-1">
                      <p className="fw-semibold small mb-1">
                        Round vessel 3 levels
                      </p>
                      <p className="text-muted small mb-2">LAS533</p>
                      <button className="btn btn-link text-decoration-underline text-info p-0 small">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-4">
                  <button className="btn btn-outline-dark w-100 py-2 small fw-medium">
                    CONTINUE SHOPPING
                  </button>
                  <p className="text-muted text-center small my-2">
                    *Taxes and shipping calculated at checkout
                  </p>
                  <button className="btn btn-info w-100 text-white py-2 small fw-semibold">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Dark overlay when menu is open */}
          {menuOpen && (
            <div
              className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50"
              style={{ zIndex: 1040 }}
              onClick={() => setMenuOpen(false)}
            ></div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
