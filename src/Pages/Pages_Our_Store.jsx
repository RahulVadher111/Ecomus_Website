import React from "react";

import ourstore1 from "../Images/Navbar_imgs/Navbar_imgs/ourstore1.png";
import ourstore2 from "../Images/Navbar_imgs/Navbar_imgs/ourstore2.png";
import ourstore3 from "../Images/Navbar_imgs/Navbar_imgs/ourstore3.png";

function Pages_Our_Store() {
  return (
    <>
      <div
        className=" text-center p-5 gridyent"
        style={{ backgroundColor: "#fcffb2", fontSize: "42px" }}
      >
        <p className="mb-4 pt-4 pb-2 ">Our Store</p>
      </div>

      {/* conteint part */}
      <div className="mx-5 py-5">
        <div className="row align-items-center g-5 ">
          {/* IMAGE SECTION */}
          <div className="col-md-6">
            <div className="img-wrapper">
              <img
                src={ourstore1}
                alt="Store"
                className="img-fluid store-img w-100"
              />
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="w-75">
              <p className="mb-4 fs-2">Ecomus Paris</p>

              <div className="mb-4">
                <h6 className="pb-2">Address</h6>
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  66 Mott St, New York, New York, Zip Code: 10006, AS
                </p>
              </div>

              <div className="mb-4">
                <h6 className="pb-2">Phone</h6>
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  (623) 934-2400
                </p>
              </div>

              <div className="mb-4">
                <h6 className="pb-2">Email</h6>
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  EComposer@example.com
                </p>
              </div>

              <div className="mb-4">
                <h6>Open Time</h6>
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  Our store has re-opened for shopping,
                </p>
                <p className="pt-2" style={{ fontSize: "14px" }}>
                  exchange Every day 11am to 7pm
                </p>
              </div>

              {/* Social Icons */}
              <div className="d-flex   gap-3 mt-4 pb-4">
                <i className="bi bi-facebook icon-box"></i>
                <i className="bi bi-twitter-x icon-box"></i>
                <i className="bi bi-instagram icon-box"></i>
                <i className="bi bi-tiktok icon-box"></i>
                <i className="bi bi-pinterest icon-box"></i>
              </div>

              <button className="btn btn-outline-dark px-4 py-2">
                Get Directions →
              </button>
            </div>
          </div>
        </div>

        {/* second part */}

        <div className="row align-items-center g-5 my-5">
          {/* CONTENT SECTION */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="w-75">
              <p className="mb-4 fs-2">Ecomus Paris</p>

              <div className="mb-4">
                <h6 className="pb-2">Address</h6>
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  66 Mott St, New York, New York, Zip Code: 10006, AS
                </p>
              </div>

              <div className="mb-4">
                <h6 className="pb-2">Phone</h6>
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  (623) 934-2400
                </p>
              </div>

              <div className="mb-4">
                <h6 className="pb-2">Email</h6>
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  EComposer@example.com
                </p>
              </div>

              <div className="mb-4">
                <h6>Open Time</h6>
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  Our store has re-opened for shopping,
                </p>
                <p className="pt-2" style={{ fontSize: "14px" }}>
                  exchange Every day 11am to 7pm
                </p>
              </div>

              {/* Social Icons */}
              <div className="d-flex   gap-3 mt-4 pb-4">
                <i className="bi bi-facebook icon-box"></i>
                <i className="bi bi-twitter-x icon-box"></i>
                <i className="bi bi-instagram icon-box"></i>
                <i className="bi bi-tiktok icon-box"></i>
                <i className="bi bi-pinterest icon-box"></i>
              </div>

              <button className="btn btn-outline-dark px-4 py-2">
                Get Directions →
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-wrapper">
              <img
                src={ourstore2}
                alt="Store"
                className="img-fluid store-img w-100"
              />
            </div>
          </div>
        </div>

        {/* thirtd part */}
        <div className="row align-items-center g-5 my-5">
          {/* IMAGE SECTION */}
          <div className="col-md-6">
            <div className="img-wrapper">
              <img
                src={ourstore3}
                alt="Store"
                className="img-fluid store-img w-100"
              />
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="w-75">
              <p className="mb-4 fs-2">Ecomus Paris</p>

              <div className="mb-4">
                <h6 className="pb-2">Address</h6>
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  66 Mott St, New York, New York, Zip Code: 10006, AS
                </p>
              </div>

              <div className="mb-4">
                <h6 className="pb-2">Phone</h6>
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  (623) 934-2400
                </p>
              </div>

              <div className="mb-4">
                <h6 className="pb-2">Email</h6>
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  EComposer@example.com
                </p>
              </div>

              <div className="mb-4">
                <h6>Open Time</h6>
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  Our store has re-opened for shopping,
                </p>
                <p className="pt-2" style={{ fontSize: "14px" }}>
                  exchange Every day 11am to 7pm
                </p>
              </div>

              {/* Social Icons */}
              <div className="d-flex   gap-3 mt-4 pb-4">
                <i className="bi bi-facebook icon-box"></i>
                <i className="bi bi-twitter-x icon-box"></i>
                <i className="bi bi-instagram icon-box"></i>
                <i className="bi bi-tiktok icon-box"></i>
                <i className="bi bi-pinterest icon-box"></i>
              </div>

              <button className="btn btn-outline-dark px-4 py-2">
                Get Directions →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pages_Our_Store;
