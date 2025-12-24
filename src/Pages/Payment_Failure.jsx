import React from "react";
import { NavLink } from "react-router-dom";

function Payment_Failure() {
  return (
    <>
      <div
        className=" text-center p-5 gridyent p"
        style={{ backgroundColor: "#fcffb2", fontSize: "42px" }}
      >
        <p className="mb-4 pt-4 pb-2 ">Payment Failure</p>
      </div>
 
      <div className="container py-5">
        <div className="payment-cards mx-auto p-4 ">
          <div className="d-flex align-items-center justify-content-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path d="M15.32 3H8.68c-.26 0-.52.11-.7.29L3.29 7.98c-.18.18-.29.44-.29.7v6.63c0 .27.11.52.29.71l4.68 4.68c.19.19.45.3.71.3h6.63c.27 0 .52-.11.71-.29l4.68-4.68c.19-.19.29-.44.29-.71V8.68c0-.27-.11-.52-.29-.71l-4.68-4.68c-.18-.18-.44-.29-.7-.29zM12 17.3c-.72 0-1.3-.58-1.3-1.3s.58-1.3 1.3-1.3 1.3.58 1.3 1.3-.58 1.3-1.3 1.3zm0-4.3c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1z"></path>
            </svg>

            <h4 className="mx-2">Payment Failure</h4>
          </div>

          <div className="pt-3" style={{ fontSize: "15px" }}>
            <p>
              Hey there. We tried to charge your card but, something went wrong.
              Please update your payment method below to continue
            </p>
          </div>
          <NavLink to="/Pages_Check_Out" className="btn btn-dark w-100 p-2">
            Update Payment Method
          </NavLink>

          <p className="pt-3">
            Have a question?{" "}
            <span className="text-danger">Contact Support</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Payment_Failure;
