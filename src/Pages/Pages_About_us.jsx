import React from "react";
import About_banner from "../Images/Navbar_imgs/Navbar_imgs/about-banner-01.jpg";
import About_banner_02 from "../Images/Navbar_imgs/Navbar_imgs/about-banner-02.jpg";


function Pages_About_us() {
  return (
    <>
      <div
        className="container-fluid p-5 text-white text-center d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${About_banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "850px",
        }}
      >
        <p style={{ fontSize: "68px" }}>
          Empowering women to achieve <br />
          fitness goals with style
        </p>
      </div>

      <div className="my-5 text-center border-bottom pb-5 container">
        <p style={{ fontSize: "42px" }}>We are Ecomus</p>
        <p style={{ color: "#545454" }}>
          Welcome to our classic women's clothing store, where we believe <br />
          that timeless style never goes out of fashion. Our collection features
          classic
          <br />
          pieces that are both stylish and versatile, perfect for building a
          <br />
          wardrobe that will last for years.
        </p>
      </div>

       <div className="container-fluid my-5 p-5">
      <div className="row align-items-center">
        
        {/* LEFT IMAGE */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={About_banner_02}
            alt="About"
            className="img-fluid"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-md-6 ps-md-6 p-5">
          <h2 className="fw-semibold mb-3">
            Established – 1995
          </h2>

          <p className="text-muted" style={{ lineHeight: "1.8" }}>
            Ecomus was founded in 1995 by Jane Smith, a fashion lover with a
            passion for timeless style. Jane had always been drawn to classic
            pieces that could be worn season after season, and she believed
            that there was a gap in the market for a store that focused solely
            on classic women's clothing. She opened the first store in a small
            town in New England, where it quickly became a local favorite.
          </p>
        </div>

      </div>
    </div>
    </>
  );
}

export default Pages_About_us;
