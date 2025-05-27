// import React from "react";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* ///////////////blue screen//////////// */}
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
                <img src="./src/assets/Images/png/Group 4291.png" alt="flag" />
              </div>
            </div>
          </div>
        </div>
        {/* //////////////////hamburger/////////// */}
        <div className="my_container position-relative">
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
                  src="./src/assets/Images/png/hamburger.png"
                  alt="menu"
                />
              </button>

              {/* Search icon */}
              <img
                className="me-3 icon-sm"
                src="./src/assets/Images/png/search.png"
                alt="search"
              />

              {/* Desktop Menu - only visible ≥ md */}
              <ul className="d-none d-md-flex mb-0">
                <li>
                  <NavLink className="fs_sm clr_grey me-4 font_helvetica" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="fs_sm clr_grey d-flex gap-2 font_helvetica" to="/Shop">
                    Shop{" "}
                    <span>
                      <img
                        src="./src/assets/Images/png/Vector down.png"
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
                src="./src/assets/Images/png/Group.png"
                alt="logo"
              />
            </div>

            {/* Right Side */}
            <div className="d-flex align-items-center">
              {/* Desktop links - only visible ≥ md */}
              <ul className="d-none d-md-flex align-items-center mb-0 me-3">
                <li>
                  <NavLink className="fs_sm clr_grey me-4 font_helvetica" to="/About">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="fs_sm clr_grey me-4 font_helvetica" to="/Contact">
                    Contact
                  </NavLink>
                </li>
              </ul>

              {/* Always visible - login & cart icons */}
              <NavLink className="me-3" to="/Log_In">
                <img
                  className="icon-sm"
                  src="./src/assets/Images/png/login.png"
                  alt="login"
                />
              </NavLink>
              <NavLink to="/Cart">
                <img
                  className="icon-sm"
                  src="./src/assets/Images/png/cart.png"
                  alt="cart"
                />
              </NavLink>
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
