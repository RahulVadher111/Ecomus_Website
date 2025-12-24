import React from "react";
import { NavLink } from "react-router-dom";

function Register_from() {
  return (
    <>
      <div
        className=" text-center p-5 gridyent p"
        style={{ backgroundColor: "#fcffb2", fontSize: "42px" }}
      >
        <p className="mb-4 pt-4 pb-2 ">Register</p>
      </div>

      <div className="container py-5">
        <h2 className="text-center mb-4 fw-normal">
          Register
          <p className=" pt-2" style={{ fontSize: "14px" }}>
            Sign up for early Sale access plus tailored new arrivals, trends and
            promotions. To opt <br /> out, click unsubscribe in our emails
          </p>
        </h2>

        <div className="payment-cardd mx-auto p-4 p-md-5 ">
          <div className="pb-3">
            <input className="form-control p-3" placeholder="Frist Name" />
          </div>
          <div className="pb-3">
            <input className="form-control p-3" placeholder="Last Name" />
          </div>
          <div className="pb-3">
            <input
              className="form-control p-3"
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="pb-3">
            <input
              className="form-control p-3"
              placeholder="Password"
              type="password"
            />
          </div>
          <div>
            <button className="btn w-100 btn-dark p-2">Register </button>
          </div>
          <div className="pt-3">    
            <NavLink to="/Log_in" className="btn w-100 border-0 ">
              <u>
                Already have an account? Log in here{" "}
                <i class="bi bi-arrow-up-right "></i>
              </u>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register_from;
