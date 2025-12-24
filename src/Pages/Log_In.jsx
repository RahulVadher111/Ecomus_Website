import React from 'react'
import { NavLink } from "react-router-dom";


function Log_In() {
  return (
   <>
   
   <div
        className=" text-center p-5 gridyent p"
        style={{ backgroundColor: "#fcffb2", fontSize: "42px" }}
      >
        <p className="mb-4 pt-4 pb-2 ">Log In</p>
      </div>
   

   
    <div className="container py-5">
      <div className="row justify-content-between align-items-start">

        {/* LEFT : LOGIN FORM */}
        <div className="col-md-6">
          <h2 className="mb-4 fw-normal">Log in</h2>

          <div className="mb-3">
            <input
              type="email"
              className="form-control py-3"
              placeholder="Email *"
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control py-3"
              placeholder="Password *"
            />
          </div>

          <div className="mb-4">
            <a  className="text-dark">
              Forgot your password?
            </a>
          </div>

          <NavLink to="/Pages_My_Account" className="btn btn-dark w-25 py-2">
            Log in
          </NavLink>
        </div>

        {/* RIGHT : REGISTER INFO */}
        <div className="col-md-5">
          <h2 className="mb-4 fw-normal">I'm new here</h2>

          <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
            Sign up for early Sale access plus tailored new arrivals, trends and
            promotions. To opt out, click unsubscribe in our emails.
          </p>

          <NavLink
            to="/Register_From"
            className="text-dark fw-semibold text-decoration-none border-bottom border-dark d-inline-flex align-items-center gap-2"
          >
            Register <i class="bi bi-arrow-up-right ms-1"></i>
          </NavLink>
        </div>

      </div>
    </div>
   </>
  )
}

export default Log_In
