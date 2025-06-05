import React from "react";
import { NavLink } from "react-router-dom";
import fi1 from "../assets/Images/png/fi1.png"
import fi2 from "../assets/Images/png/fi2.png"
import fi3 from "../assets/Images/png/fi3.png"
import fi4 from "../assets/Images/png/fi4.png"
import logo1 from "../assets/Images/png/logo1.png"
import fcbk from "../assets/Images/png/fcbk.png"
import insta from "../assets/Images/png/insta.png"
import utube from "../assets/Images/png/utube.png"
import x from "../assets/Images/png/x.png"
import flag from "../assets/Images/png/flag.png"
import pay_logo from "../assets/Images/png/pay_logo.png"

const Footer = () => {
  return (
    <>
  
      <div className="bgc_black">
        <div className="my_container pt-3 pb-3">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12 mb-4">
              <img
                className="d-flex m-auto mb-3"
                src={fi1}
                alt="delivery"
              />
              <p className="clr_cream fs_sm font_helvetica text-center mb-3">
                FREE DELIVERY
              </p>
              <p className="text-white fs_xsm text-center font_helvetica">
                DHL express delivery worldwide
              </p>
            </div>

            <div className="col-md-3 col-sm-6 col-12 mb-4">
              <img
                className="d-flex m-auto mb-3"
                src={fi2}
                alt="refund"
              />
              <p className="clr_cream fs_sm font_helvetica text-center mb-3">
                SATISFIED OR REFUND
              </p>
              <p className="text-white fs_xsm text-center font_helvetica">
                Genuine returns & refunds <br /> process
              </p>
            </div>

            <div className="col-md-3 col-sm-6 col-12 mb-4">
              <img
                className="d-flex m-auto mb-3"
                src={fi3}
                alt="warranty"
              />
              <p className="clr_cream fs_sm font_helvetica text-center mb-3">
                LIFETIME WARRANTY
              </p>
              <p className="text-white fs_xsm text-center font_helvetica">
                Lifetime warranty on discoloration & thermal shocks
              </p>
            </div>

            <div className="col-md-3 col-sm-6 col-12 mb-4">
              <img
                className="d-flex m-auto mb-3"
                src={fi4}
                alt="secure payment"
              />
              <p className="clr_cream fs_sm font_helvetica text-center mb-3">
                SECURE PAYMENTS
              </p>
              <p className="text-white fs_xsm text-center font_helvetica">
                DHL express delivery <br /> worldwide
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" my_container mt-5">
        <div className=" row">
          <div className=" col-lg-3 col-md-6 col-sm-12 mb-4">
            <img
              className=" w-75"
              src={logo1}
              alt="logo"
            />
            <div className=" d-flex align-items-center justify-content-between mt-4 w-75">
              <img src={fcbk} />
              <img src={insta} />
              <img src={utube} />
              <img src={x} />
            </div>
            <p className=" fs_sm clr_grey font_helvetica mt-4">PHONE:</p>
            <NavLink className=" clr_grey1 fs_xsm font_helvetica">
              +1 888 414-4022 opt. 2
            </NavLink>
            <p className=" fs_sm clr_grey font_helvetica mt-4">EMAIL:</p>
            <NavLink className=" clr_grey1 fs_xsm font_helvetica">
              info@renaissanceglassworks.com
            </NavLink>
            <p className=" fs_sm clr_grey font_helvetica mt-4">
              BUSINESS HOURS:
            </p>
            <NavLink className=" clr_grey1 fs_xsm font_helvetica">
              Monday - Friday <br />
              8:00am - 5:00pm EST
            </NavLink>
          </div>
          <div className=" col-lg-3 col-md-6 col-sm-12 mb-4">
            <p className=" fs_sm clr_grey font_helvetica">SHOP BY CATEGORY</p>
            <ul>
              <li className=" mt-4">
                <NavLink className=" clr_grey1 fs_xsm font_helvetica mt-5">
                  Basin
                </NavLink>
              </li>
              <li className=" mt-4">
                <NavLink className=" clr_grey1 fs_xsm font_helvetica mt-5">
                  Pedestal
                </NavLink>
              </li>
              <li className=" mt-4">
                <NavLink className=" clr_grey1 fs_xsm font_helvetica mt-5">
                  Undermount
                </NavLink>
              </li>
              <li className=" mt-4">
                <NavLink className=" clr_grey1 fs_xsm font_helvetica mt-5">
                  Drop-In
                </NavLink>
              </li>
              <li className=" mt-4">
                <NavLink className=" clr_grey1 fs_xsm font_helvetica">
                  Custom
                </NavLink>
              </li>
            </ul>
          </div>
          <div className=" col-lg-3 col-md-6 col-sm-12 mb-4">
            <p className=" fs_sm clr_grey font_helvetica">QUICK LINKS</p>
            <ul>
              <li className=" mt-4">
                <NavLink className=" clr_grey1 fs_xsm font_helvetica mt-5">
                  About
                </NavLink>
              </li>
              <li className=" mt-4">
                <NavLink className=" clr_grey1 fs_xsm font_helvetica mt-5">
                  Orders
                </NavLink>
              </li>
              <li className=" mt-4">
                <NavLink className=" clr_grey1 fs_xsm font_helvetica mt-5">
                  Returns & Refunds
                </NavLink>
              </li>
              <li className=" mt-4">
                <NavLink className=" clr_grey1 fs_xsm font_helvetica mt-5">
                  Warranty Policy
                </NavLink>
              </li>
              <li className=" mt-4">
                <NavLink className=" clr_grey1 fs_xsm font_helvetica">
                  Shipping Policy
                </NavLink>
              </li>
              <li className=" mt-4">
                <NavLink className=" clr_grey1 fs_xsm font_helvetica mt-5">
                  Privacy Policy
                </NavLink>
              </li>
              <li className=" mt-4">
                <NavLink className=" clr_grey1 fs_xsm font_helvetica">
                  Terms & Conditions
                </NavLink>
              </li>
            </ul>
          </div>
          <div className=" col-lg-3 col-md-6 col-sm-12 mb-4">
            <p className=" fs_sm clr_grey font_helvetica">ADDRESS</p>
            <p className=" fs_sm clr_grey font_helvetica mt-4">
              Manufacturing Plant:
            </p>
            <p className=" clr_grey1 fs_xsm font_helvetica">
              Montreal, (Québec) Canada, H1E 4M1
            </p>
            <p className=" fs_sm clr_grey font_helvetica mt-4">
              US Distribution Center:
            </p>
            <p className=" clr_grey1 fs_xsm font_helvetica">
              Champlain NY 12919 USA
            </p>
          </div>
          <div className=" row align-items-center justify-content-between mt-3 mb-2 flex-column flex-md-row">
            <div className=" col-1">
              <img src={flag} alt="flag" />
            </div>
            <div className=" col-lg-3 col-sm-6 mt-2">
              <p className=" fs_1xsm clr_grey1 font_helvetica text-center">
                © 2025 - VERRE GALLERY by Renaissance Glassworks Inc.
              </p>
            </div>
            <div className=" col-lg-4 col-sm-8">
              <img
                className=" w-100"
                src={pay_logo}
                alt="payment"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
