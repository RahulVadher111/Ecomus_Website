import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Pages_FAQ_01() {
  const [openId, setOpenId] = useState(null);
  const [openId2, setOpenId2] = useState(null);
  const [openId3, setOpenId3] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const toggle2 = (id) => {
    setOpenId2(openId2 === id ? null : id);
  };

  const toggle3 = (id) => {
    setOpenId3(openId3 === id ? null : id);
  };

  return (
    <>
      <div
        className=" text-center p-5 gridyent"
        style={{ backgroundColor: "#fcffb2", fontSize: "42px" }}
      >
        <p className="mb-4 pt-4 pb-2 ">FAQ 01</p>
      </div>

      {/* start the secrion of FAQ 01 */}
      <div className="mx-5 my-5">
        <div className="row">
          <div className="col-md-7">
            <p className="fs-2">Shopping Information</p>

            <div className="accordion ">
              {/* Item 1 */}
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button border-bottom icon-box  ${
                      openId === 1 ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggle(1)}
                  >
                    Pellentesque habitant morbi tristique senectus et netus?
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    openId === 1 ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">
                    <p>
                      The perfect way to enjoy brewing tea on low hanging fruit
                      to identify. Duis autem vel eum iriure dolor in hendrerit
                      vulputate velit esse molestie consequat, vel illum dolore
                      eu feugiat nulla facilisis. For me, the most important
                      part of improving at photography has been sharing it.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button border-bottom icon-box ${
                      openId === 2 ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggle(2)}
                  >
                    How much is shipping and how long will it take?
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    openId === 2 ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">
                    <p>
                      The perfect way to enjoy brewing tea on low hanging fruit
                      to identify. Duis autem vel eum iriure dolor in hendrerit
                      vulputate velit esse molestie consequat, vel illum dolore
                      eu feugiat nulla facilisis. For me, the most important
                      part of improving at photography has been sharing it.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat..
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button border-bottom icon-box  ${
                      openId === 3 ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggle(3)}
                  >
                    How long will it take to get my package?
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    openId === 3 ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">
                    <p>
                      The perfect way to enjoy brewing tea on low hanging fruit
                      to identify. Duis autem vel eum iriure dolor in hendrerit
                      vulputate velit esse molestie consequat, vel illum dolore
                      eu feugiat nulla facilisis. For me, the most important
                      part of improving at photography has been sharing it.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button border-bottom icon-box ${
                      openId === 4 ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggle(4)}
                  >
                    Branding is simply a more efficient way to sell things?
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    openId === 4 ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">
                    <p>
                      The perfect way to enjoy brewing tea on low hanging fruit
                      to identify. Duis autem vel eum iriure dolor in hendrerit
                      vulputate velit esse molestie consequat, vel illum dolore
                      eu feugiat nulla facilisis. For me, the most important
                      part of improving at photography has been sharing it.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* second card */}

            <p className="fs-2 mt-5">Payment Information</p>

            <div className="accordion border-0">
              {/* Item 1 */}
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button border-bottom icon-box ${
                      openId2 === 1 ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggle2(1)}
                  >
                    Pellentesque habitant morbi tristique senectus et netus?
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    openId2 === 1 ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">
                    <p>
                      The perfect way to enjoy brewing tea on low hanging fruit
                      to identify. Duis autem vel eum iriure dolor in hendrerit
                      vulputate velit esse molestie consequat, vel illum dolore
                      eu feugiat nulla facilisis. For me, the most important
                      part of improving at photography has been sharing it.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button border-bottom icon-box ${
                      openId2 === 2 ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggle2(2)}
                  >
                    How much is shipping and how long will it take?
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    openId2 === 2 ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">
                    <p>
                      The perfect way to enjoy brewing tea on low hanging fruit
                      to identify. Duis autem vel eum iriure dolor in hendrerit
                      vulputate velit esse molestie consequat, vel illum dolore
                      eu feugiat nulla facilisis. For me, the most important
                      part of improving at photography has been sharing it.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat..
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button border-bottom icon-box ${
                      openId2 === 3 ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggle2(3)}
                  >
                    How long will it take to get my package?
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    openId2 === 3 ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">
                    <p>
                      The perfect way to enjoy brewing tea on low hanging fruit
                      to identify. Duis autem vel eum iriure dolor in hendrerit
                      vulputate velit esse molestie consequat, vel illum dolore
                      eu feugiat nulla facilisis. For me, the most important
                      part of improving at photography has been sharing it.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button border-bottom icon-box ${
                      openId2 === 4 ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggle2(4)}
                  >
                    Branding is simply a more efficient way to sell things?
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    openId2 === 4 ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">
                    <p>
                      The perfect way to enjoy brewing tea on low hanging fruit
                      to identify. Duis autem vel eum iriure dolor in hendrerit
                      vulputate velit esse molestie consequat, vel illum dolore
                      eu feugiat nulla facilisis. For me, the most important
                      part of improving at photography has been sharing it.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* third card */}

            <p className="fs-2 mt-5">Order Returns</p>

            <div className="accordion border-0">
              {/* Item 1 */}
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button border-bottom icon-box ${
                      openId3 === 1 ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggle3(1)}
                  >
                    Pellentesque habitant morbi tristique senectus et netus?
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    openId3 === 1 ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">
                    <p>
                      The perfect way to enjoy brewing tea on low hanging fruit
                      to identify. Duis autem vel eum iriure dolor in hendrerit
                      vulputate velit esse molestie consequat, vel illum dolore
                      eu feugiat nulla facilisis. For me, the most important
                      part of improving at photography has been sharing it.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button border-bottom icon-box ${
                      openId3 === 2 ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggle3(2)}
                  >
                    How much is shipping and how long will it take?
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    openId3 === 2 ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">
                    <p>
                      The perfect way to enjoy brewing tea on low hanging fruit
                      to identify. Duis autem vel eum iriure dolor in hendrerit
                      vulputate velit esse molestie consequat, vel illum dolore
                      eu feugiat nulla facilisis. For me, the most important
                      part of improving at photography has been sharing it.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat..
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button border-bottom icon-box ${
                      openId3 === 3 ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggle3(3)}
                  >
                    How long will it take to get my package?
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    openId3 === 3 ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">
                    <p>
                      The perfect way to enjoy brewing tea on low hanging fruit
                      to identify. Duis autem vel eum iriure dolor in hendrerit
                      vulputate velit esse molestie consequat, vel illum dolore
                      eu feugiat nulla facilisis. For me, the most important
                      part of improving at photography has been sharing it.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button border-bottom icon-box ${
                      openId3 === 4 ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggle3(4)}
                  >
                    Branding is simply a more efficient way to sell things?
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    openId3 === 4 ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">
                    <p>
                      The perfect way to enjoy brewing tea on low hanging fruit
                      to identify. Duis autem vel eum iriure dolor in hendrerit
                      vulputate velit esse molestie consequat, vel illum dolore
                      eu feugiat nulla facilisis. For me, the most important
                      part of improving at photography has been sharing it.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right card */}

          <div className="col-md-5 justify-content-center p-5">
            <div
              className="p-5 rounded-4"
              style={{ backgroundColor: "#f6f5f2" }}
            >
              <h2 className="fw-normal mb-3">Have a question</h2>

              <p className="text-muted mb-3">
                If you have an issue or question that requires immediate
                assistance, you can click the button below to chat live with a
                Customer Service representative.
              </p>

              <p className="text-muted mb-4">
                Please allow 06 – 12 business days from the time your package
                arrives back to us for a refund to be issued.
              </p>

              <div className="d-flex align-items-center gap-4">
                <NavLink
                  to="/Pages_Contact_us"
                  className="btn btn-dark px-4 py-2 rounded-1"
                >
                  Contact us
                </NavLink>

                <NavLink
                  to="/Pages_Contact_Us_2"
                  href="#"
                  className="text-dark text-decoration-none fw-medium border-bottom border-dark icon-box"
                >
                  Live chat <i class="bi bi-arrow-up-right"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pages_FAQ_01;
