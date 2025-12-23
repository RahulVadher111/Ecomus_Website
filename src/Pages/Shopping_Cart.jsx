import React, { useEffect, useState } from "react";

import Seller_1_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_1_01.jpg";
import Seller_1_02 from "../Images/Navbar_imgs/Seller_imgs/Seller_1_02.jpg";
import Seller_1_03 from "../Images/Navbar_imgs/Seller_imgs/Seller_1_03.jpg";

const initialCart = [
  {
    id: 1,
    name: "Oversized Printed T-shirt",
    variant: "White / M",
    price: 18,
    qty: 1,
    img: Seller_1_02,
  },
  {
    id: 2,
    name: "Ribbed Tank Top",
    variant: "Orange / S",
    price: 18,
    qty: 1,
    img: Seller_1_01,
  },
  {
    id: 3,
    name: "Regular Fit Oxford Shirt",
    variant: "Black / L",
    price: 18,
    qty: 1,
    img: Seller_1_03,
  },
];

function Shopping_Cart() {
  const [cart, setCart] = useState(initialCart);
  // timer
  const [time, setTime] = useState(9 * 60 + 19);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  // timer end
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  //   shipping progress bar
  const FREE_SHIPPING = 150;
  const progress = Math.min((subtotal / FREE_SHIPPING) * 100, 100);
  const remaining = Math.max(FREE_SHIPPING - subtotal, 0);

  return (
    <>
      <div
        className=" text-center p-5 gridyent p"
        style={{ backgroundColor: "#fcffb2", fontSize: "42px" }}
      >
        <p className="mb-4 pt-4 pb-2 ">Shopping Cart</p>
      </div>

      {/* sectionss */}
      <div className="mx-5 py-5">
        <div className="text-center pb-5 pb-3 fs-4 ">
          <span className="limited-text text-danger">
            <i className="bi bi-fire"></i>
          </span>{" "}
          These products are limited, checkout within
          <span className="timer-badge ms-2 btn btn-danger rounded-pill ">
            {minutes}m:{seconds}s
          </span>
        </div>

        <div className="row pt-5">
          {/* LEFT CART */}
          <div className="col-lg-8">
            <div className="row fw-bold border-bottom pb-3">
              <div className="col-6">Product</div>
              <div className="col-2">Price</div>
              <div className="col-2">Quantity</div>
              <div className="col-2 text-end">Total</div>
            </div>

            {cart.map((item) => (
              <div
                key={item.id}
                className="row align-items-center border-bottom py-4"
              >
                <div
                  className="col-6 d-flex gap-3"
                  style={{ fontSize: "14px" }}
                >
                  <img
                    src={item.img}
                    alt=""
                    className=""
                    style={{ width: "85px", height: "auto" }}
                  />
                  <div>
                    <p className="mb-1 fw-semibold">{item.name}</p>
                    <small className="text-muted">{item.variant}</small>
                    <br />
                    <button
                      className="btn btn-link p-0 text-dark text-decoration-underline"
                      onClick={() => removeItem(item.id)}
                      style={{ fontSize: "13px" }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="col-2">${item.price.toFixed(2)}</div>
                <div className="col-2">
                  <div className="qty-box">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </div>

                <div className="col-2 text-end fw-semibold">
                  ${(item.price * item.qty).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SUMMARY */}
          <div className="col-lg-4">
            <div className="free-ship-box mb-4">
              <div className="progress position-relative">
                <div
                  className="progress-bar bg-danger"
                  style={{ width: `${progress}%` }}
                ></div>

                <i
                  className="bi bi-truck truck-icon fs-6"
                  style={{ left: `${progress}%` }}
                ></i>
              </div>

              <p className="mt-3 mb-0" style={{ fontSize: "14px" }}>
                Buy <strong>${remaining.toFixed(2)}</strong> more to enjoy{" "}
                <strong>Free Shipping</strong>
              </p>
            </div>

            <div className="summary-box">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6>Estimate Shipping</h6>
                <span className="fs-4 ">+</span>
              </div>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">
                  Do you want a gift wrap? Only $5.00
                </label>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <p className="fs-5">Subtotal</p>
                <p className="fs-5 fw-bold">${subtotal.toFixed(2)} USD</p>
              </div>

              <p className="text-muted small">
                Taxes and <u>shipping</u> calculated at checkout
              </p>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label" typeof="radio">
                  I agree with the <u>terms and conditions</u>
                </label>
              </div>

              <button className="btn btn-dark w-100 py-3 mb-3">
                Check out
              </button>

              <p className="text-center fw-semibold mb-2">
                Guarantee Safe Checkout
              </p>

              <div className="d-flex justify-content-center gap-2">
                <img src="https://img.icons8.com/color/36/visa.png" />
                <img src="https://img.icons8.com/color/36/mastercard.png" />
                <img src="https://img.icons8.com/color/36/paypal.png" />
                <img src="https://img.icons8.com/color/36/visa.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shopping_Cart;
