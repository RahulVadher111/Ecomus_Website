import React from 'react'
import { NavLink } from "react-router-dom";


function Payment_confirmation() {
  return (
    <>
    
    <div
        className=" text-center p-5 gridyent p"
        style={{ backgroundColor: "#fcffb2", fontSize: "42px" }}
      >
        <p className="mb-4 pt-4 pb-2 ">Payment Confirmation</p>
      </div>

      {/* section  */}
      <div className="container py-5">
      <h2 className="text-center mb-4 fw-normal">
        Payment confirmation
      </h2>

      <div className="payment-card mx-auto p-4 p-md-5">

        <div className="info-row">
          <span>Date</span>
          <span>01/01/2024</span>
        </div>

        <div className="info-row">
          <span>Payment method</span>
          <span>Visa</span>
        </div>

        <div className="info-row">
          <span>Card number</span>
          <span>**** **** **** 9999</span>
        </div>

        <div className="info-row">
          <span>Cardholder name</span>
          <span>Themesflat</span>
        </div>

        <div className="info-row">
          <span>Email</span>
          <span>info@fashionshop.com</span>
        </div>

        <div className="info-row mb-3">
          <span>Phone</span>
          <span>(212) 555-1234</span>
        </div>

        <div className="subtotal-row">
          <strong>Subtotal</strong>
          <strong>$188.00 USD</strong>
        </div>

        <div className="btn-row">
        
          <NavLink to="/Pages_Check_Out" className="btn border border-dark button">
            Cancel Payment
          </NavLink>
          <button className="btn btn-dark button">
            Confirm Payment
          </button>
        </div>

      </div>
    </div>
    </>
  )
}

export default Payment_confirmation
