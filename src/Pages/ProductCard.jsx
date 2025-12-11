import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Seller_2_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_2_01.jpg";
import Seller_2_02 from "../Images/Navbar_imgs/Seller_imgs/Seller_2_02.jpg";
import Seller_2_03 from "../Images/Navbar_imgs/Seller_imgs/Seller_2_03.jpg";


const ProductCard = () => {
  const images = [
    { src: Seller_2_03, alt: 'Brown T-shirt' },
    { src: Seller_2_02, alt: 'Lavender T-shirt' },
    { src: Seller_2_01, alt: 'Green T-shirt' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [size, setSize] = useState('S');
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

    <div className="container-fluid mt-5">
        <div className=''>
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
                className={`img-thumbnail mb-2 ${currentIndex === index ? 'border-primary' : ''}`}
                style={{ cursor: 'pointer', width: '100px' }}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>

          {/* Main Image with Arrows */}
          <div className="col-md-5 position-relative">
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="img-fluid" />
            <button className="btn btn-outline-dark position-absolute top-50 start-0 translate-middle-y" onClick={handlePrev}>
              ‹
            </button>
            <button className="btn btn-outline-dark position-absolute top-50 end-0 translate-middle-y" onClick={handleNext}>
              ›
            </button>
          </div>

          {/* Product Details */}
          <div className="col-md-6">
            <h3>Ribbed Modal T-shirt</h3>
            <p className="text-danger h5">$25.00 <del className="text-muted">$30.00</del> <span className="badge bg-success">17% OFF</span></p>
            <span className="badge bg-warning text-dark mb-2">Best Seller</span>
            <p>Selling fast! 56 people have this in their carts.</p>
            <p>20 People are viewing this right now</p>
            <p className="text-warning">HURRY UP! SALE ENDS IN: <strong>11 Days : 15 Hours : 50 Mins : 21 Secs</strong></p>

            <div className="mb-3">
              <label className="form-label">Color:</label>
              <select className="form-select" value={color} onChange={(e) => setColor(e.target.value)}>
                <option>Brown</option>
                <option>Lavender</option>
                <option>Green</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Size:</label>
              <div className="btn-group">
                {['S', 'M', 'L', 'XL'].map((s) => (
                  <button
                    key={s}
                    className={`btn btn-outline-primary ${size === s ? 'active' : ''}`}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Quantity:</label>
              <div className="input-group" style={{ maxWidth: '150px' }}>
                <button className="btn btn-outline-secondary" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <input type="text" className="form-control text-center" value={quantity} readOnly />
                <button className="btn btn-outline-secondary" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <div className="d-grid gap-2 mb-3">
              <button className="btn btn-primary">Add to cart – ${25.00 * quantity}</button>
              <button className="btn btn-warning">Buy with PayPal</button>
            </div>

            <div className="d-flex justify-content-between text-muted small">
              <span>Compare color</span>
              <span>Ask a question</span>
              <span>Delivery & Return</span>
              <span>Share</span>
            </div>

            <hr />
            <p><strong>Estimate delivery times:</strong> 12–26 days (International), 3–6 days (United States).</p>
            <p><strong>Return:</strong> within 30 days of purchase. Duties & taxes are non-refundable.</p>
            <p><strong>Guarantee Safe Checkout:</strong> VISA, MasterCard, PayPal, AMEX, Discover</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;