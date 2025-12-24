import React from 'react'
import Seller_1_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_1_01.jpg";

function Shoping_popup() {
  return (
    <>
    
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="cartOffcanvas"
    >
      {/* Header */}
      <div className="offcanvas-header border-bottom">
        <h5 className="fw-bold">Shopping cart</h5>
        <button className="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>

      {/* Body */}
      <div className="offcanvas-body">

        {/* Free shipping bar */}
        <div className="mb-4">
          <div className="progress" style={{ height: "4px" }}>
            <div className="progress-bar bg-danger" style={{ width: "60%" }} />
          </div>
          <p className="small mt-2">
            Buy <strong>$75.00</strong> more to enjoy <strong>Free Shipping</strong>
          </p>
        </div>

        {/* Cart Item */}
        {[1, 2].map((item) => (
          <div className="d-flex gap-3 mb-4" key={item}>
            <img
              src={Seller_1_01}
              alt=""
              className="rounded w-25"
            />
            <div className="flex-grow-1">
              <h6 className="mb-1">T-shirt</h6>
              <p className="mb-1 text-muted small">$25.00</p>

              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-outline-secondary btn-sm">−</button>
                <span>1</span>
                <button className="btn btn-outline-secondary btn-sm">+</button>
                <button className="btn btn-link text-danger p-0 ms-3">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Subtotal */}
        <hr />
        <div className="d-flex justify-content-between fw-bold mb-3">
          <span>Subtotal</span>
          <span>$49.99 USD</span>
        </div>

        {/* Buttons */}
        <div className="d-grid gap-2">
          <button className="btn btn-outline-dark">View Cart</button>
          <button className="btn btn-dark">Check out</button>
        </div>

      </div>
    </div>
    
    </>
  )
}

export default Shoping_popup
