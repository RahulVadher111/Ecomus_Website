import React, { useState } from 'react';
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

  

  return (

    <div className="container-fluid mt-5 ">
        <div className='mx-3'>
            <button className='btn small' style={{fontSize:'14px'}}>Home <i class="bi bi-chevron-right"></i></button>
            <button className='btn small' style={{fontSize:'14px'}}>Women <i class="bi bi-chevron-right"></i></button>
            <button className='btn small text-muted' style={{fontSize:'14px'}}>Cotten jursy top </button>
        </div>
      <div className=" p-4 ">
        <div className="row">
          {/* Thumbnails */}
          <div className="col-md-1 d-flex flex-column align-items-center">
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
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="img-fluid" />
            <button className="btn  rounded-circle  position-absolute top-50 start-0 translate-middle-y  mx-4 pb-2 " onClick={handlePrev}>
              <i class="bi bi-chevron-left"></i>
            </button>
            <button className="btn   rounded-circle  position-absolute top-50 end-0 translate-middle-y mx-4 pb-2" onClick={handleNext}>
              <i class="bi bi-chevron-right"></i>
            </button>
          </div>

          {/* Product Details */}
          <div className="col-md-6 p-5 pt-0">
            <h3 className='pb-3'>Ribbed Modal T-shirt</h3>
            <div className='d-flex'>
          <button className="badge bg-light border border-dark text-dark pb-0 pt-0">Best Seller</button>
            <p className= 'mx-3 align-content-center fw-bold'>Selling fast! 56 people have this in their carts.</p>
            </div> 
            
            <p className="text-danger h3 pt-4">$25.00 <del className="text-muted">$30.00</del> <span className="badge rounded-4" style={{backgroundColor:"#FC5732"}}>17% OFF</span></p>
            
            <p className='pb-2'><span className='btn btn-dark pt-0 pb-0'>20</span> People are viewing this right now</p>
            <div className='border border-danger w-50 text-center pb-2'>
            <p className="text-dark ">HURRY UP! SALE ENDS IN:</p> 
            <strong className='text-danger'>11 Days : 15 Hours : 50 Mins : 21 Secs</strong>

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

            <div className="col-md-12 border p-4 mt-4">
  <div className="d-flex align-items-center justify-content-between flex-wrap">
    
    {/* Left: Icon + Title */}
    <div className="d-flex align-items-center gap-2">
      <i className="bi bi-shield-lock fs-3 "></i>
      <p className="mb-0 fw-semibold">Guarantee Safe Checkout</p>
    </div>

    {/* Right: Payment Logos */}
    <div className="d-flex flex-wrap gap-2">
      <img src={Footer_1} className="footer-img" alt="VISA" />z
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
  );
};

export default ProductCard;