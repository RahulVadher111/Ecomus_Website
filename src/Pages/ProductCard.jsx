import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Seller_2_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_2_01.jpg";
import Seller_2_02 from "../Images/Navbar_imgs/Seller_imgs/Seller_2_02.jpg";
import Seller_2_03 from "../Images/Navbar_imgs/Seller_imgs/Seller_2_03.jpg";

import paypal from "../Images/Navbar_imgs/Home_imgs/paypal.png"

import Footer_1 from "../Images/Navbar_imgs/Home_imgs/Footer_1.png";
import Footer_2 from "../Images/Navbar_imgs/Home_imgs/Footer_2.png";
import Footer_3 from "../Images/Navbar_imgs/Home_imgs/Footer_3.png";
import Footer_4 from "../Images/Navbar_imgs/Home_imgs/Footer_4.png";
import Footer_5 from "../Images/Navbar_imgs/Home_imgs/Footer_5.png";

// review img
import review_1 from "../Images/Navbar_imgs/Home_imgs/Review_1.jpg"
import review_2 from "../Images/Navbar_imgs/Home_imgs/Review_2.jpg"
import review_3 from "../Images/Navbar_imgs/Home_imgs/Review_3.jpg"


const ProductCard = () => {
  const images = [
    { src: Seller_2_03, alt: 'Brown T-shirt' },
    { src: Seller_2_02, alt: 'Lavender T-shirt' },
    { src: Seller_2_01, alt: 'Green T-shirt' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [size, setSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('Brown');

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setColor(images[index].alt.split(' ')[0]);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  // 
  useEffect(() => {
  const buttons = document.querySelectorAll(".tab-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}, []);


  

  return (
    <>

    <div className="container-fluid mt-5 ">
        <div className='mx-3'>
            <button href="#" className='btn small' style={{fontSize:'14px'}}>Home <i class="bi bi-chevron-right"></i></button>
            <button className='btn small' style={{fontSize:'14px'}}>Women <i class="bi bi-chevron-right"></i></button>
            <button className='btn small text-muted' style={{fontSize:'14px'}}>Cotten jursy top </button>
        </div>
      <div className=" p-4 ">
        <div className="row">
          {/* Thumbnails */}
          <div className="col-md-1 d-flex flex-column align-items-center ">
            {images.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className={`img-thumbnail mb-2 ${currentIndex === index ? 'border-dark' : ''}`}
                style={{ cursor: 'pointer', width: '100px' }}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>

          {/* Main Image with Arrows */}
          <div className="col-md-5 position-relative">
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="img-fluid"  />
            <button className="btn  rounded-circle bg-light position-absolute top-50 start-0 translate-middle-y  mx-4 pb-2 bgred " onClick={handlePrev}>
              <i class="bi bi-chevron-left"></i>
            </button>
            <button className="btn   rounded-circle bg-light  position-absolute top-50 end-0 translate-middle-y mx-4 pb-2 bgred" onClick={handleNext}>
              <i class="bi bi-chevron-right"></i>
            </button>
          </div>

          {/* Product Details */}
          <div className="col-md-6 p-5 pt-0">
            <h3 className='pb-3'>Ribbed Modal T-shirt</h3>
            <div className='d-flex'>
          <button className="badge bg-light border border-dark text-dark pb-0 pt-0">Best Seller</button>
            <p className= 'mx-3 d-flex align-content-center justify-content-center fw-bold'>Selling fast! 56 people have this in their carts.</p>
            </div> 
            
            <p className="text-danger h3 pt-4">$25.00 <del className="text-muted">$30.00</del> <span className="badge rounded-4" style={{backgroundColor:"#FC5732"}}>17% OFF</span></p>
            
            <p className='pb-2'><span className='btn btn-dark pt-0 pb-0'>20</span> People are viewing this right now</p>
            
            <div className='border border-danger  d-flex align-items-center justify-content-center w-50 text-center '>
            <p className="text-dark ">HURRY UP! SALE ENDS IN: <br />
            <strong className='text-danger'>11 Days : 15 Hours : 50 Mins : 21 Secs</strong>
              </p> 
            </div>

            <div className="mb-3 pt-3">
              <label className="">Color : {color}</label>
              <div>
                <button 
                className='btn rounded-circle p-2 border-dark mx-2' 
                style={{backgroundColor:"#977945"}} 
                onClick={() =>{
                  setCurrentIndex(0);
                  setColor("Brown")
                }}
                ></button>
                <button 
                className='btn rounded-circle p-2 border-dark mx-2' 
                style={{backgroundColor:"#D966D9"}}
                onClick={() =>{
                  setCurrentIndex(1);
                  setColor("Lavender")
                }}
                ></button>
                <button 
                className='btn rounded-circle p-2 border-dark mx-2' 
                style={{backgroundColor:"#CAFFD6"}}
                onClick={() =>{
                  setCurrentIndex(2);
                  setColor(" Light Green")
                }}
                ></button>
              </div>
            </div>

            <div className="mb-3 pt-2">
              {/* Label stays on top */}
              <label className="form-label d-block mb-2">
                Size : {size}
              </label>

              {/* Buttons below */}
              <div className="btn-group pb-2">
                {["M", "L", "XL"].map((s) => (
                  <button
                    key={s}
                    className={`btn btn-outline-dark border-0 rounded-1 mx-2 ${size === s ? "active" : ""}`}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-3 ">
              <label className="form-label fw-bold">Quantity:</label>
              <div className="input-group" style={{ maxWidth: '150px' }}>
                <button className="btn fw-bold" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <input type="text" className="form-control text-center border-0 fw-bold" value={quantity} readOnly />
                <button className="btn fw-bold" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <div className="d-grid gap-2 mb-3">
              <div className='pb-2'>
          <button className="btn btn-dark w-75 p-2 fw-bold">Add to cart – ${25.00 * quantity}</button>
                <button className="btn btn-light rounded border-dark mx-3">
                <i class="bi bi-heart"></i>
              </button>
              <button className="btn btn-light rounded border-dark">
                <i class="bi bi-shuffle"></i>
              </button>
              
              </div>
              
              <button className="btn btn-warning text-muted p-2"> Buy with  <img src={paypal} alt="" /></button>
              <div className='text-center'>
              <a href="#" className='text-muted d-inline border-2 border-muted pb-1 '>More Payment Options</a>

              </div>
            </div>

            <div className="d-flex justify-content-between text-bold small pt-3">
              <span><i class="bi bi-palette-fill"></i> Compare color</span>
              <span><i class="bi bi-question-circle"></i> Ask a question</span>
              <span><i class="bi bi-truck"></i> Delivery & Return</span>
              <span><i class="bi bi-share-fill"></i> Share</span>
            </div>

            <div className="pt-5">
              <div className="d-flex justify-content-center gap-4 flex-wrap">
                {/* Card 1 */}
                <div className="text-center border p-4 flex-fill">
                  <i className="bi bi-truck fs-2"></i>
                  <p style={{ fontSize: "15px" }}>
                    Estimate delivery times:
                    <span className="fw-bold"> 12-26 days </span> <br />
                    (International),
                    <span className="fw-bold"> 3-6 days </span>
                    (United States).
                  </p>
                </div>

                {/* Card 2 */}
                <div className="text-center border p-4 flex-fill">
                  <i className="bi bi-arrow-repeat fs-2"></i>
                  <p style={{ fontSize: "15px" }}>
                    Return within <span className="fw-bold">30 days</span> of purchase. <br />
                    Duties & taxes are non-refundable.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-12  p-2 mt-4">
  <div className="d-flex align-items-center gap-4 flex-wrap">
    
    {/* Left: Icon + Title */}
    <div className="d-flex align-items-center gap-2" style={{fontSize:'14px'}}>
      <i className="bi bi-shield-lock fs-3 "></i>
      <p className="mb-0 fw-semibold">Guarantee Safe <br /> Checkout</p>
    </div>

    {/* Right: Payment Logos */}
    <div className="d-flex flex-wrap gap-2">
      <img src={Footer_1} className="footer-img" alt="VISA" />  
      <img src={Footer_2} className="footer-img" alt="PayPal" />
      <img src={Footer_3} className="footer-img" alt="MasterCard" />
      <img src={Footer_4} className="footer-img" alt="AMEX" />
      <img src={Footer_5} className="footer-img" alt="Discover" />
    </div>
  </div>
</div>


          </div>
        </div>
      </div>
    </div>


{/* second part ///////////////////////////////////////////////////////////////////////// */}


<div className="container-fluid  pt-0 p-5">
  <div className='border p-4'>

  {/* BUTTONS */}
  <div className="mb-4 border-bottom  border-2">
    <button
  className="btn fw-bold mx-2 tab-btn active"
  data-bs-toggle="collapse"
  data-bs-target="#desc"
>
  Description
</button>

<button
  className="btn fw-bold mx-2 tab-btn"
  data-bs-toggle="collapse"
  data-bs-target="#info"
>
  Additional Information
</button>

<button
  className="btn fw-bold mx-2 tab-btn"
  data-bs-toggle="collapse"
  data-bs-target="#review"
>
  Review
</button>

<button
  className="btn fw-bold mx-2 tab-btn"
  data-bs-toggle="collapse"
  data-bs-target="#shipping"
>
  Shipping
</button>

<button
  className="btn fw-bold mx-2 tab-btn"
  data-bs-toggle="collapse"
  data-bs-target="#return"
>
  Return Policies
</button>

  </div>

  {/* ACCORDION CONTAINER */}
  <div id="accordionExample">

    {/* DESCRIPTION */}
    <div className="collapse show" id="desc" data-bs-parent="#accordionExample">
      <div className=" card-body">

        <p className="text-muted mb-5">
          Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric that’s made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces impact on forests, biodiversity and water supply.
        </p>

        <div className="row">
          <div className="col-md-6">
            <h5>Features</h5>
            <ul className="text-muted">
              <li>Front button placket</li>
              <li>Adjustable sleeve tabs</li>
              <li>Embroidered crest</li>
            </ul>

            <h5 className="mt-4">Materials Care</h5>
            <ul className="text-muted">
              <li>100% ECOVERO™ Viscose</li>
              <li>Hand wash</li>
              <li>Imported</li>
            </ul>
          </div>

          <div className="col-md-6">
            <h5>Care Instructions</h5>

            <div className="d-flex mb-3">
              <i className="bi bi-bucket fs-4 me-3 border rounded-circle p-2"></i>
              <span>Machine wash max. 30°C</span>
            </div>

            <div className="d-flex mb-3">
              <i className="bi bi-thermometer-low fs-4 me-3 border rounded-circle p-2"></i>
              <span>Iron max 110°C</span>
            </div>

            <div className="d-flex mb-3">
              <i className="bi bi-slash-circle fs-4 me-3 border rounded-circle p-2"></i>
              <span>Do not bleach</span>
            </div>

            <div className="d-flex mb-3">
              <i className="bi bi-x-circle fs-4 me-3 border rounded-circle p-2"></i>
              <span>Do not dry clean</span>
            </div>

            <div className="d-flex">
              <i className="bi bi-wind fs-4 me-3 border rounded-circle p-2"></i>
              <span>Tumble dry medium</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* ADDITIONAL INFO */}
    <div className="collapse" id="info" data-bs-parent="#accordionExample">
      <div className=" card-body">
        <div className="container my-4">
  <div className="border rounded overflow-hidden">

    <div className="row g-0 border-bottom ">
      <div className="col-3 p-3 text-muted fw-semibold border-end">
        Color
      </div>
      <div className="col-9 p-3 text-muted">
        White, Pink, Black
      </div>
    </div>

    <div className="row g-0">
      <div className="col-3 p-3 text-muted fw-semibold border-end">
        Size
      </div>
      <div className="col-9 p-3 text-muted">
        S, M, L, XL
      </div>
    </div>

  </div>
</div>

      </div>
    </div>

    {/* REVIEW */}
    <div className="collapse" id="review" data-bs-parent="#accordionExample">
      <div className="card-body">
        <div className="container my-5">

  {/* TOP RATING SECTION */}
  <div className="row align-items-start mb-5">
    {/* LEFT */}
    <div className="col-md-3">
      <h1 className="fw-bold display-4">4.8</h1>
      <div className="text-warning fs-4 mb-2">★★★★★</div>
      <p className="text-muted">(168 Ratings)</p>
    </div>

    {/* MIDDLE */}
    <div className="col-md-5">
      {[5, 4, 3, 2, 1].map((star) => (
        <div className="d-flex align-items-center mb-2" key={star}>
          <span className="me-2">{star} ★</span>
          <div className="progress flex-grow-1" style={{ height: "6px" }}>
            <div
              className="progress-bar bg-warning"
              style={{
                width:
                  star === 5
                    ? "90%"
                    : star === 4
                    ? "70%"
                    : "0%",
              }}
            ></div>
          </div>
          <span className="ms-3">
            {star === 5 ? 59 : star === 4 ? 46 : 0}
          </span>
        </div>
      ))}
    </div>

    {/* RIGHT */}
    <div className="col-md-4 text-end">
      <button className="btn btn-outline-dark px-4">
        Write a review
      </button>
    </div>
  </div>

  {/* COMMENTS HEADER */}
  <div className="d-flex justify-content-between align-items-center mb-4">
    <h4>03 Comments</h4>

    <div className="d-flex align-items-center">
      <span className="me-2">Sort by:</span>
      <select className="form-select w-auto">
        <option>Most Recent</option>
        <option>Oldest</option>
      </select>
    </div>
  </div>

  {/* COMMENT 1 */}
  <div className="d-flex mb-5">
    <img
      src={review_1}
      className="rounded-circle me-4"
      alt=""
      style={{width:'70px',height:'70px'}}
    />
    <div>
      <h5 className="text-dark">
        Superb quality apparel that exceeds expectations
      </h5>
      <small className="text-muted">1 days ago</small>

      <p className="mt-3 text-muted">
        Great theme – we were looking for a theme with lots of built-in features
        and flexibility and this was perfect. We managed to do everything
        ourselves.
      </p>

      {/* REPLY */}
      <div className="d-flex mt-4 ps-4 border-start">
        <img
          src={review_2}
          className="rounded-circle me-3 img-fluid"
          alt=""
          style={{width:'70px',height:'70px'}}
        />
        <div>
          <h6 className="fw-bold">Reply from Modave</h6>
          <small className="text-muted">1 days ago</small>
          <p className="mt-2 text-muted">
            We love to hear it! Thank you for this fantastic review.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* COMMENT 2 */}
  <div className="d-flex">
    <img
      src={review_3}
      className="rounded-circle me-4"
      alt=""
      style={{width:'60px',height:'60px'}}
    />
    <div>
      <h5>Superb quality apparel that exceeds expectations</h5>
      <small className="text-muted">1 days ago</small>
      <p className="mt-3 text-muted">
        Great theme – flexible, modern and easy to customize.
      </p>
    </div>
  </div>

</div>

      </div>
    </div>

    {/* SHIPPING */}
    <div className="collapse" id="shipping" data-bs-parent="#accordionExample">
      <div className=" card-body">
        <div className='container-fluid pt-3'>
          <h4 className='fw-semibold'>The Company Private Limited Policy</h4>
          <div className='pt-2 text-muted' style={{fontSize:'15px'}}>
            <p className='pb-2'>
              The Company Private Limited and each of their respective subsidiary, parent and affiliated companies is deemed to operate this Website (“we” or “us”) recognizes that you care how information about you is used and shared. We have created this Privacy Policy to inform you what information we collect on the Website, how we use your information and the choices you have about the way your information is collected and used. Please read this Privacy Policy carefully. Your use of the Website indicates that you have read and accepted our privacy practices, as outlined in this Privacy Policy.
            </p>
            <p className='pb-2'>
              Please be advised that the practices described in this Privacy Policy apply to information gathered by us or our subsidiaries, affiliates or agents: (i) through this Website, (ii) where applicable, through our Customer Service Department in connection with this Website, (iii) through information provided to us in our free standing retail stores, and (iv) through information provided to us in conjunction with marketing promotions and sweepstakes.
            </p>
            <p className='pb-2'>
              We are not responsible for the content or privacy practices on any websites.
            </p>
            <p className='pb-2'>
              We reserve the right, in our sole discretion, to modify, update, add to, discontinue, remove or otherwise change any portion of this Privacy Policy, in whole or in part, at any time. When we amend this Privacy Policy, we will revise the “last updated” date located at the top of this Privacy Policy.

            </p>
            <p className='pb-2'>
              If you provide information to us or access or use the Website in any way after this Privacy Policy has been changed, you will be deemed to have unconditionally consented and agreed to such changes. The most current version of this Privacy Policy will be available on the Website and will supersede all previous versions of this Privacy Policy.

            </p>
            <p className='pb-2'>
              If you have any questions regarding this Privacy Policy, you should contact our Customer Service Department by email at marketing@company.com

            </p>
          </div>
        </div>
      </div>
    </div>

    {/* RETURN */}
    <div className="collapse" id="return" data-bs-parent="#accordionExample">
      <div className=" card-body">
        <div className='pt-3'>
          <ul class="d-flex justify-content-center mb_18">
            <li class="list-unstyled">
              <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222" margin="5px">
                 <path fill="currentColor" d="M8.7 30.7h22.7c.3 0 .6-.2.7-.6l4-25.3c-.1-.4-.3-.7-.7-.8s-.7.2-.8.6L34 8.9l-3-1.1c-2.4-.9-5.1-.5-7.2 1-2.3 1.6-5.3 1.6-7.6 0-2.1-1.5-4.8-1.9-7.2-1L6 8.9l-.7-4.3c0-.4-.4-.7-.7-.6-.4.1-.6.4-.6.8l4 25.3c.1.3.3.6.7.6zm.8-21.6c2-.7 4.2-.4 6 .8 1.4 1 3 1.5 4.6 1.5s3.2-.5 4.6-1.5c1.7-1.2 4-1.6 6-.8l3.3 1.2-3 19.1H9.2l-3-19.1 3.3-1.2zM32 32H8c-.4 0-.7.3-.7.7s.3.7.7.7h24c.4 0 .7-.3.7-.7s-.3-.7-.7-.7zm0 2.7H8c-.4 0-.7.3-.7.7s.3.6.7.6h24c.4 0 .7-.3.7-.7s-.3-.6-.7-.6zm-17.9-8.9c-1 0-1.8-.3-2.4-.6l.1-2.1c.6.4 1.4.6 2 .6.8 0 1.2-.4 1.2-1.3s-.4-1.3-1.3-1.3h-1.3l.2-1.9h1.1c.6 0 1-.3 1-1.3 0-.8-.4-1.2-1.1-1.2s-1.2.2-1.9.4l-.2-1.9c.7-.4 1.5-.6 2.3-.6 2 0 3 1.3 3 2.9 0 1.2-.4 1.9-1.1 2.3 1 .4 1.3 1.4 1.3 2.5.3 1.8-.6 3.5-2.9 3.5zm4-5.5c0-3.9 1.2-5.5 3.2-5.5s3.2 1.6 3.2 5.5-1.2 5.5-3.2 5.5-3.2-1.6-3.2-5.5zm4.1 0c0-2-.1-3.5-.9-3.5s-1 1.5-1 3.5.1 3.5 1 3.5c.8 0 .9-1.5.9-3.5zm4.5-1.4c-.9 0-1.5-.8-1.5-2.1s.6-2.1 1.5-2.1 1.5.8 1.5 2.1-.5 2.1-1.5 2.1zm0-.8c.4 0 .7-.5.7-1.2s-.2-1.2-.7-1.2-.7.5-.7 1.2.3 1.2.7 1.2z">
                     </path>
                  </svg>
                  </li>
                    <li class="">
                  <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222" margin="5px">
                    <path fill="currentColor" d="M36.7 31.1l-2.8-1.3-4.7-9.1 7.5-3.5c.4-.2.6-.6.4-1s-.6-.5-1-.4l-7.5 3.5-7.8-15c-.3-.5-1.1-.5-1.4 0l-7.8 15L4 15.9c-.4-.2-.8 0-1 .4s0 .8.4 1l7.5 3.5-4.7 9.1-2.8 1.3c-.4.2-.6.6-.4 1 .1.3.4.4.7.4.1 0 .2 0 .3-.1l1-.4-1.5 2.8c-.1.2-.1.5 0 .8.1.2.4.3.7.3h31.7c.3 0 .5-.1.7-.4.1-.2.1-.5 0-.8L35.1 32l1 .4c.1 0 .2.1.3.1.3 0 .6-.2.7-.4.1-.3 0-.8-.4-1zm-5.1-2.3l-9.8-4.6 6-2.8 3.8 7.4zM20 6.4L27.1 20 20 23.3 12.9 20 20 6.4zm-7.8 15l6 2.8-9.8 4.6 3.8-7.4zm22.4 13.1H5.4L7.2 31 20 25l12.8 6 1.8 3.5z">
                       </path>
                      </svg>
                    </li>
               <li class="">
                   <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222" margin="5px">
                        <path fill="currentColor" d="M5.9 5.9v28.2h28.2V5.9H5.9zM19.1 20l-8.3 8.3c-2-2.2-3.2-5.1-3.2-8.3s1.2-6.1 3.2-8.3l8.3 8.3zm-7.4-9.3c2.2-2 5.1-3.2 8.3-3.2s6.1 1.2 8.3 3.2L20 19.1l-8.3-8.4zM20 20.9l8.3 8.3c-2.2 2-5.1 3.2-8.3 3.2s-6.1-1.2-8.3-3.2l8.3-8.3zm.9-.9l8.3-8.3c2 2.2 3.2 5.1 3.2 8.3s-1.2 6.1-3.2 8.3L20.9 20zm8.4-10.2c-1.2-1.1-2.6-2-4.1-2.6h6.6l-2.5 2.6zm-18.6 0L8.2 7.2h6.6c-1.5.6-2.9 1.5-4.1 2.6zm-.9.9c-1.1 1.2-2 2.6-2.6 4.1V8.2l2.6 2.5zM7.2 25.2c.6 1.5 1.5 2.9 2.6 4.1l-2.6 2.6v-6.7zm3.5 5c1.2 1.1 2.6 2 4.1 2.6H8.2l2.5-2.6zm18.6 0l2.6 2.6h-6.6c1.4-.6 2.8-1.5 4-2.6zm.9-.9c1.1-1.2 2-2.6 2.6-4.1v6.6l-2.6-2.5zm2.6-14.5c-.6-1.5-1.5-2.9-2.6-4.1l2.6-2.6v6.7z">
                               </path>
                                            </svg>
                                        </li>
                                        <li class="">
                                            <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222" margin="5px">
                                                <path fill="currentColor" d="M35.1 33.6L33.2 6.2c0-.4-.3-.7-.7-.7H13.9c-.4 0-.7.3-.7.7s.3.7.7.7h18l.7 10.5H20.8c-8.8.2-15.9 7.5-15.9 16.4 0 .4.3.7.7.7h28.9c.2 0 .4-.1.5-.2s.2-.3.2-.5v-.2h-.1zm-28.8-.5C6.7 25.3 13 19 20.8 18.9h11.9l1 14.2H6.3zm11.2-6.8c0 1.2-1 2.1-2.1 2.1s-2.1-1-2.1-2.1 1-2.1 2.1-2.1 2.1 1 2.1 2.1zm6.3 0c0 1.2-1 2.1-2.1 2.1-1.2 0-2.1-1-2.1-2.1s1-2.1 2.1-2.1 2.1 1 2.1 2.1z">
                                                </path>
                                            </svg>
                                        </li>
                                        <li class="">
                                            <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222" margin="5px">
                                                <path fill="currentColor" d="M20 33.8c7.6 0 13.8-6.2 13.8-13.8S27.6 6.2 20 6.2 6.2 12.4 6.2 20 12.4 33.8 20 33.8zm0-26.3c6.9 0 12.5 5.6 12.5 12.5S26.9 32.5 20 32.5 7.5 26.9 7.5 20 13.1 7.5 20 7.5zm-.4 15h.5c1.8 0 3-1.1 3-3.7 0-2.2-1.1-3.6-3.1-3.6h-2.6v10.6h2.2v-3.3zm0-5.2h.4c.6 0 .9.5.9 1.7 0 1.1-.3 1.7-.9 1.7h-.4v-3.4z">
                                                </path>
                                            </svg>
                                        </li>
                                        <li class="">
                                            <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222" margin="5px">
                                                <path fill="currentColor" d="M30.2 29.3c2.2-2.5 3.6-5.7 3.6-9.3s-1.4-6.8-3.6-9.3l3.6-3.6c.3-.3.3-.7 0-.9-.3-.3-.7-.3-.9 0l-3.6 3.6c-2.5-2.2-5.7-3.6-9.3-3.6s-6.8 1.4-9.3 3.6L7.1 6.2c-.3-.3-.7-.3-.9 0-.3.3-.3.7 0 .9l3.6 3.6c-2.2 2.5-3.6 5.7-3.6 9.3s1.4 6.8 3.6 9.3l-3.6 3.6c-.3.3-.3.7 0 .9.1.1.3.2.5.2s.3-.1.5-.2l3.6-3.6c2.5 2.2 5.7 3.6 9.3 3.6s6.8-1.4 9.3-3.6l3.6 3.6c.1.1.3.2.5.2s.3-.1.5-.2c.3-.3.3-.7 0-.9l-3.8-3.6z">
                                                </path>
                                            </svg>
                                        </li>
                                        <li class="">
                                            <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222" margin="5px">
                                                <path fill="currentColor" d="M34.1 34.1H5.9V5.9h28.2v28.2zM7.2 32.8h25.6V7.2H7.2v25.6zm13.5-18.3a.68.68 0 0 0-.7-.7.68.68 0 0 0-.7.7v10.9a.68.68 0 0 0 .7.7.68.68 0 0 0 .7-.7V14.5z">
                                                </path>
                                            </svg>
                                        </li>
                                    </ul>
                    <p className='text-center text-muted'>LT01: 70% wool, 15% polyester, 10% polyamide, 5% acrylic 900 Grms/mt</p>
        </div>
      </div>
    </div>

  </div>
</div>
</div>


</>

  );
};

export default ProductCard;