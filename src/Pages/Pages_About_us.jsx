import React from "react";
import * as bootstrap from 'bootstrap';

import About_banner from "../Images/Navbar_imgs/Navbar_imgs/about-banner-01.jpg";
import About_banner_02 from "../Images/Navbar_imgs/Navbar_imgs/about-banner-02.jpg";
import About_banner_03 from "../Images/Navbar_imgs/Navbar_imgs/about-banner-03.jpg";
import About_banner_04 from "../Images/Navbar_imgs/Navbar_imgs/about-banner-04.jpg";
import About_banner_05 from "../Images/Navbar_imgs/Navbar_imgs/about-banner-05.jpg";
import About_banner_06 from "../Images/Navbar_imgs/Navbar_imgs/about-banner-06.jpg";

import quote from "../Images/Navbar_imgs/Navbar_imgs/quote.svg";
import Shop_Gram from "./Shop_Gram";






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

       <div className="container-fluid my-5 p-5 pb-0">
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
            Ecomus was founded in 1995 by Jane Smith, a fashion lover with a<br />
            passion for timeless style. Jane had always been drawn to classic<br />
            pieces that could be worn season after season, and she believed<br />
            that there was a gap in the market for a store that focused solely<br />
            on classic women's clothing. She opened the first store in a small<br />
            town in New England, where it quickly became a local favorite.
          </p>
        </div>

      </div>

      {/* second from */}

       <section className="container py-5">
      <div className="row align-items-center g-5">

        {/* LEFT CONTENT */}
        <div className="col-lg-6">
          <h2 className="fw-semibold mb-4">Our mission</h2>

          <p className="text-muted lh-lg">
            Our mission is to empower people through sustainable fashion.<br />
            We want everyone to look and feel good, while also doing our part<br />
            to help the environment. We believe that fashion should be stylish,<br />
            affordable and accessible to everyone. Body positivity and<br />
            inclusivity are values that are at the heart of our brand.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="col-lg-6 p-5" >
          <div className="position-relative">

            {/* MAIN IMAGE */}
            <img
              src={About_banner_03}
              alt="Mission main"
              className="img-fluid"
            style={{ width: "90%", objectFit: "cover" }}

            />

            {/* OVERLAP IMAGE */}
            <img
              src={About_banner_04}
              alt="Mission small"
              className="img-fluid  position-absolute"
              style={{
                width: "50%",
                bottom: "-60px",
                right: "-100px",
              }}
            />
          </div>
        </div>

      </div>
    </section>
    </div>

    {/* icon paart */}

    <div className="mx-5 rounded-3  p-5 " style={{backgroundColor:"#FBF7F0"}}>
  <div className="">

    {/* TITLE */}
    <div className="text-center mb-5 ">
      <h1 className="fw-semibold mt-5">Quality is our priority</h1>

      <p className="text-muted mt-3 fs-5">
        Our talented stylists have put together outfits that are perfect for the season. <br />
        They’ve variety of ways to inspire your next fashion-forward look.
      </p>
      
    </div>

    {/* ICON BOXES */}
    <div className="row g-4 p-4 pb-5">

      {/* CARD 1 */}
      <div className="col-md-4">
        <div className="text-center  ">
          <div
            className="border border-dark rounded-circle d-flex align-items-center justify-content-center mb-3 mx-auto"
            style={{ width: "100px", height: "100px" }}
          >
            <i className="bi bi-brush fs-2"></i>
          </div>

          <h3 className="fw-semibold mt-4">High-Quality Materials</h3>
          <p className="text-muted small ">
            Crafted with precision and excellence, our activewear is <br /> meticulously
            engineered using premium materials to ensure <br />unmatched comfort and durability.
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="col-md-4">
        <div className="text-center ">
          <div className="border border-dark rounded-circle d-flex align-items-center justify-content-center mb-3 mx-auto"
            style={{ width: "100px", height: "100px" }}>
            <i className="bi bi-palette fs-2"></i>
          </div>
          <h3 className="fw-semibold mt-4">Laconic Design</h3>
          <p className="text-muted small">
            Simplicity refined. Our activewear embodies the essence of <br />
             minimalistic design, delivering effortless style that speaks<br />
              volumes.
          </p>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="col-md-4">
        <div className="text-center">
          <div className="border border-dark rounded-circle d-flex align-items-center justify-content-center mb-3 mx-auto"
            style={{ width: "100px", height: "100px" }}>
            <i className="bi bi-aspect-ratio fs-2"></i>
          </div>
          <h3 className="fw-semibold mt-4">Various Sizes</h3>
          <p className="text-muted small">
            Designed for every body and anyone, our activewear <br />
            embraces diversity with a wide range of sizes and shapes,<br />
             celebrating the beauty of individuality.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>


{/* slider section */}

 <section className="mx-5 py-5 my-5 border-bottom" >
  <div className="row ">

    {/* LEFT : TEXT SLIDER */}
    <div className="col-lg-6 position-relative">
      <div id="textCarousel" className="carousel slide" data-bs-ride="false">
        <div className="carousel-inner">

          <div className="carousel-item active pt-5 mt-5">
            <p className="pt-5 pb-3 fs-1">Our customer’s reviews</p>
            <div className="pt-3 pb-2">
              <img src={quote} alt="" />
            </div>
            <div className=" mb-3 fs-4" style={{color:'#ff7b54'}}>★ ★ ★ ★ ★</div>
            <p className="text-semibold fs-5">
              "I have been shopping with this web fashion site for over a year now <br />
               and I can confidently say it is the best online fashion site out there.The<br />
                shipping is always fast and the customer service team is friendly and <br />
                helpful. I highly recommend this site to anyone looking for affordable <br />
                clothing."
            </p>
            <strong>Robert Smith</strong>
          </div>

          <div className="carousel-item  pt-5 mt-5">
            <p className="pt-5 pb-3 fs-1">Our customer’s reviews</p>
            <div className="pt-3 pb-2">
              <img src={quote} alt="" />
            </div>
            <div className=" mb-3 fs-4" style={{color:'#ff7b54'}}>★ ★ ★ ★ ★</div>
            <p className="text-semibold fs-5">
              "I have been shopping with this web fashion site for over a year now <br />
               and I can confidently say it is the best online fashion site out there.The<br />
                shipping is always fast and the customer service team is friendly and <br />
                helpful. I highly recommend this site to anyone looking for affordable <br />
                clothing."
            </p>
            <strong>Robert Smith</strong>
          </div>

        </div>

        {/* ARROWS — TEXT SLIDER & IMAGE SLIDER CONTROL */}
        <div className="d-flex justify-content-start mt-3 gap-1">
  <button
    className="btn rounded-circle border border-dark bg-white custom-carousel-btn"
    style={{ width: '30px', height: '30px', padding: '0' }}
    onClick={() => {
      const textCarousel = bootstrap.Carousel.getOrCreateInstance(document.getElementById('textCarousel'));
      textCarousel.prev();
      const imgCarousel = bootstrap.Carousel.getOrCreateInstance(document.getElementById('imgCarousel'));
      imgCarousel.prev();
    }}
  >
   <i class="bi bi-chevron-left"></i>
  </button>

  <button
    className="btn rounded-circle border border-dark bg-white custom-carousel-btn"
    style={{ width: '30px', height: '30px', padding: '0' }}
    onClick={() => {
      const textCarousel = bootstrap.Carousel.getOrCreateInstance(document.getElementById('textCarousel'));
      textCarousel.next();
      const imgCarousel = bootstrap.Carousel.getOrCreateInstance(document.getElementById('imgCarousel'));
      imgCarousel.next();
    }}
  >
   <i class="bi bi-chevron-right"></i>
  </button>
</div>


      </div>
    </div>

    {/* RIGHT : IMAGE SLIDER */}
    <div className="col-lg-6">
      <div id="imgCarousel" className="carousel slide" data-bs-ride="false">
        <div className="carousel-inner  overflow-hidden">

          <div className="carousel-item active">
            <img src={About_banner_05} className="w-100 img-fluid" alt="" />
          </div>

          <div className="carousel-item">
            <img src={About_banner_06} className="w-100 img-fluid" alt="" />
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

{/* shope gram section */}
    <div className="">
      <Shop_Gram />
    </div>
    
    </>
  );
}


export default Pages_About_us;
