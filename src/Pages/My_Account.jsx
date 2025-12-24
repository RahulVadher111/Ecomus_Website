import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import shope_01 from "../Images/Navbar_imgs/Home_imgs/Shope_01.jpg";
import shope_02 from "../Images/Navbar_imgs/Home_imgs/Shope_02.jpg";
import Seller_9_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_9_01.jpg";



function My_Account() {
  const [active, setActive] = useState("Dashboard");
  return (
    <>
      <div
        className=" text-center p-5 gridyent p"
        style={{ backgroundColor: "#fcffb2", fontSize: "42px" }}
      >
        <p className="mb-4 pt-4 pb-2 ">My {active}</p>
      </div>

      <div className="mx-5 py-5">
        {/* TOP HEADING */}
        {/* <h2 className="text-center mb-5">
        My 
      </h2> */}

        <div className="d-flex gap-4">
          {/* LEFT MENU */}
          <div className="left-menu">
            {[
              "Dashboard",
              "Orders",
              "Address",
              "Account Details",
              "Wishlist",
            ].map((item) => (
              <div
                key={item}
                onClick={() => setActive(item)}
                className={`menu-item ${active === item ? "active" : ""}`}
              >
                {item}
              </div>
            ))}
            <NavLink
              to="/Log_in"
              className="menu-item text-decoration-none text-dark"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
              }}
            >
              Logout
            </NavLink>
          </div>

          {/* RIGHT CONTENT */}
          <div className="right-content">
            {active === "Orders" && (
              <div className="orders-box">
                <div className="orders-head">
                  <div>Order</div>
                  <div>Date</div>
                  <div>Status</div>
                  <div>Total</div>
                  <div className="">Actions</div>
                </div>

                <div className="orders-row">
                  <div>#123</div>
                  <div>August 1, 2024</div>
                  <div>On hold</div>
                  <div>$200.0 for 1 items</div>
                  <div className="">
                    <button className="btn btn-dark btn-sm px-4 p-3">
                      View
                    </button>
                  </div>
                </div>

                <div className="orders-row">
                  <div>#345</div>
                  <div>August 2, 2024</div>
                  <div>On hold</div>
                  <div>$300.0 for 1 items</div>
                  <div className="">
                    <button className="btn btn-dark btn-sm px-4 p-3">
                      View
                    </button>
                  </div>
                </div>

                <div className="orders-row">
                  <div>#567</div>
                  <div>August 3, 2024</div>
                  <div>On hold</div>
                  <div>$400.0 for 1 items</div>
                  <div className="">
                    <button className="btn btn-dark btn-sm px-4 p-3">
                      View
                    </button>
                  </div>
                </div>
              </div>
            )}

            {active === "Dashboard" && (
              <>
                <h3 className="pb-3">Hello Themesflat</h3>

                <p style={{ fontSize: "14px" }}>
                  From your account dashboard you can view your
                  <span className="text-danger">recent orders</span>, manage
                  your{" "}
                  <span className="text-danger">
                    shipping and billing address
                  </span>
                  , and{" "}
                  <span className="text-danger">
                    edit your password and account details.
                  </span>
                </p>
              </>
            )}

            {active === "Address" && (
              <>
                <div class="text-center mb-5">
                  <button class="btn btn-dark px-4 py-2">
                    Add a new address
                  </button>
                </div>

                <div class="row text-center mb-5">
                  <div class="col-md-6 mb-4">
                    <h5 class="fw-semibold mb-3">Default</h5>
                    <p class="mb-1">themesflat</p>
                    <p class="mb-1">1234 Fashion Street, Suite 567</p>
                    <p class="mb-1">New York</p>
                    <p class="mb-1">info@fashionshop.com</p>
                    <p class="mb-4">(212) 555-1234</p>

                    <button class="btn btn-dark me-2 px-4">Edit</button>
                    <button class="btn btn-outline-dark px-4">Delete</button>
                  </div>

                  <div class="col-md-6 mb-4">
                    <h5 class="fw-semibold mb-3">Default</h5>
                    <p class="mb-1">themesflat</p>
                    <p class="mb-1">1234 Fashion Street, Suite 567</p>
                    <p class="mb-1">New York</p>
                    <p class="mb-1">info@fashionshop.com</p>
                    <p class="mb-4">(212) 555-1234</p>

                    <button class="btn btn-dark me-2 px-4">Edit</button>
                    <button class="btn btn-outline-dark px-4">Delete</button>
                  </div>
                </div>
              </>
            )}

            {active === "Account Details" && (
              <>
                <h4 class="mb-4">Account Details</h4>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control py-2"
                    placeholder="First name"
                  />
                </div>

                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control py-2"
                    placeholder="Last name"
                  />
                </div>

                <div class="mb-2">
                  <input
                    type="email"
                    class="form-control py-2"
                    placeholder="Email"
                  />
                </div>
                <h4 class="mb-2">Password Change</h4>

                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control py-2"
                    placeholder="Current password"
                  />
                </div>

                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control py-2"
                    placeholder="New password"
                  />
                </div>

                <div class="mb-4">
                  <input
                    type="password"
                    class="form-control py-3"
                    placeholder="Confirm password"
                  />
                </div>

                {/* <!-- Save button --> */}
                <button class="btn btn-dark w-100 py-2 fw-semibold">
                  Save Changes
                </button>
              </>
            )}

            {active === "Wishlist" && (
              <>
                <div className="row">
                  {/* First Image */}
                  <div className="col-md-4">
                    <div className="position-relative">
                      <img
                        src={shope_01}
                        className="img-fluid w-100 rounded-2 zoom-img"
                        alt="Heart Shine"
                      />
                      <button
                        className="btn bg-white category-btn fw-semibold px-4 py-2 position-absolute d-flex align-items-center"
                        style={{
                          bottom: "30px",
                          left: "100px",
                        }}
                      >
                        man <i className="bi bi-arrow-up-right ms-2"></i>
                      </button>
                    </div>
                  </div>

                  {/* Second Image */}
                  <div className="col-md-4 ">
                    <div className="position-relative">
                      <img
                        src={shope_02}
                        className="img-fluid w-100 rounded-2 zoom-img"
                        alt="Heart Shine"
                      />
                      <button
                        className="btn bg-white category-btn fw-semibold px-4 py-2 position-absolute d-flex align-items-center"
                        style={{
                          bottom: "30px",
                          left: "100px",
                        }}
                      >
                        Women <i className="bi bi-arrow-up-right ms-2"></i>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="position-relative">
                      <img
                        src={shope_01}
                        className="img-fluid  rounded-2 zoom-img"
                        alt="Heart Shine"
                      />
                      <button
                        className="btn bg-white category-btn fw-semibold px-4 py-2 position-absolute d-flex align-items-center"
                        style={{
                          bottom: "30px",
                          left: "100px",
                        }}
                      >
                        Man <i className="bi bi-arrow-up-right ms-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default My_Account;
