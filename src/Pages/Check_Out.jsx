import React from "react";

import Seller_2_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_2_01.jpg";

import Seller_1_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_1_01.jpg";
import Seller_1_02 from "../Images/Navbar_imgs/Seller_imgs/Seller_1_02.jpg";
import Seller_1_03 from "../Images/Navbar_imgs/Seller_imgs/Seller_1_03.jpg";

function Check_Out() {
  return (
    <>
      <div
        className=" text-center p-5 gridyent p"
        style={{ backgroundColor: "#fcffb2", fontSize: "42px" }}
      >
        <p className="mb-4 pt-4 pb-2 ">Check Out</p>
      </div>

      {/* section  */}
      <div className="mx-5 py-5">
        <div className="row g-5">
          {/* LEFT – BILLING DETAILS */}
          <div className="col-lg-7">
            <h3 className="mb-4">Billing details</h3>

            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">
                  First Name <span className="text-danger">*</span>
                </label>
                <input className="form-control p-3" placeholder="Themesflat" />
              </div>

              <div className="col-md-6">
                <label className="form-label">
                  Last Name <span className="text-danger">*</span>
                </label>
                <input className="form-control p-3" />
              </div>

              <div className="col-12">
                <label className="form-label">
                  Country/Region <span className="text-danger">*</span>
                </label>
                <select className="form-select p-3">
                  <option>---</option>
                  <option>India</option>
                  <option>USA</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">
                  Town/City <span className="text-danger">*</span>
                </label>
                <input className="form-control p-3" />
              </div>

              <div className="col-12">
                <label className="form-label">
                  Address <span className="text-danger">*</span>
                </label>
                <input className="form-control p-3" />
              </div>

              <div className="col-12">
                <label className="form-label">
                  Phone Number <span className="text-danger">*</span>
                </label>
                <input className="form-control p-3" />
              </div>

              <div className="col-12">
                <label className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input className="form-control p-3" />
              </div>

              <div className="col-12">
                <label className="form-label">Order notes (optional)</label>
                <textarea className="form-control" rows="5"></textarea>
              </div>
            </div>
          </div>

          {/* RIGHT – ORDER SUMMARY */}
          <div className="col-lg-5">
            <h3 className="mb-4">Your order</h3>

            <div className="order-box">
              {/* PRODUCTS */}
              <div className="order-item">
                <div className="img-wrap border border-3 ">
                  <img src={Seller_2_01} alt="" />
                  <span className="qty-badge">1</span>
                </div>

                <div className="flex-grow-1 ms-3">
                  <p className="mb-0 ">Ribbed modal T-shirt</p>
                  <small className="text-muted">Brown / M</small>
                </div>

                <span>$25.00</span>
              </div>

              <div className="order-item">
                <div className="img-wrap border border-3">
                  <img src={Seller_1_02} alt="" />
                  <span className="qty-badge">1</span>
                </div>

                <div className="flex-grow-1 ms-3">
                  <p className="mb-0 ">Vanilla White</p>
                </div>

                <span>$25.00</span>
              </div>

              <div className="order-item">
                <div className="img-wrap border border-3">
                  <img src={Seller_1_03} alt="" />
                  <span className="qty-badge">1</span>
                </div>

                <div className="flex-grow-1 ms-3">
                  <p className="mb-0 ">Cotton jersey top</p>
                  <small className="text-muted">Beige / S</small>
                </div>

                <span>$25.00</span>
              </div>

              <div className="order-item">
                <div className="img-wrap border border-3">
                  <img src={Seller_1_01} alt="" />
                  <span className="qty-badge">3</span>
                </div>

                <div className="flex-grow-1 ms-3">
                  <p className="mb-0 ">Ribbed Tank Top</p>
                  <small className="text-muted">Orange / S</small>
                </div>

                <span>$25.00</span>
              </div>

              {/* DISCOUNT */}
              <div className="d-flex gap-2 my-4">
                <input className="form-control p-2" placeholder="Discount code" />
                <button className="btn btn-dark px-4">Apply</button>
              </div>

              {/* TOTAL */}
              <div className="d-flex justify-content-between fw-bold fs-5 mb-3">
                <span>Total</span>
                <span>$122.00</span>
              </div>

              <hr />

              {/* PAYMENT */}
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  defaultChecked
                />
                <label className="form-check-label">Direct bank transfer</label>
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                />
                <label className="form-check-label">Cash on delivery</label>
              </div>

              <p className="text-muted small">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our <u className="text-dark">privacy policy</u>.
              </p>

              <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label text-muted">
                  I have read and agree to the website{" "}
                  <u className="text-dark">terms and conditions</u>.
                </label>
              </div>

              <button className="btn btn-dark w-100 py-2 rounded-0">Place order</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Check_Out;
