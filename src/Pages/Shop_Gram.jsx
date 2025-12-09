import React from 'react'



import Shop_Gram_01 from "../Images/Navbar_imgs/Home_imgs/Shop_Gram_01.jpg"
import Shop_Gram_02 from "../Images/Navbar_imgs/Home_imgs/Shop_Gram_02.jpg"
import Shop_Gram_03 from "../Images/Navbar_imgs/Home_imgs/Shop_Gram_03.jpg"
import Shop_Gram_04 from "../Images/Navbar_imgs/Home_imgs/Shop_Gram_04.jpg"
import Shop_Gram_05 from "../Images/Navbar_imgs/Home_imgs/Shop_Gram_05.jpg"


function Shop_Gram() {
  return (
    <>
    
     <div className="container-fluid py-4 p-4">

  <h1 className="text-center mb-2">Shop Gram</h1>
  <p className="text-center mb-5">
    Inspire and let yourself be inspired, from one unique fashion to another.
  </p>

  <div className="shopgram-grid">

    {[Shop_Gram_01, Shop_Gram_02, Shop_Gram_03, Shop_Gram_04, Shop_Gram_05].map((image, index) => (
      <div key={index} className="shopgram-item">

        <div className="shopgram-image-wrapper">
          <img src={image} className="img-fluid shopgram-img" alt="" />

          {/* Hover Center Icon */}
          <div className="shopgram-hover-icon">
            <div className="icon-circle">
              <i className="bi bi-bag "></i>
            </div>
          </div>
        </div>

      </div>
    ))}

  </div>
</div>


    {/* icons card */}
    <div className="container-fluid py-5 p-5">

      <div className="row g-4">

        {/* Free Shipping */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className=" text-center p-4 border rounded-4">
            <i className="bi bi-box-seam fs-2"></i>
            <h5 className="fw-semibold mt-4 fs-5">Free Shipping</h5>
            <p className=" small mb-0">
              Free shipping over order $120
            </p>
          </div>
        </div>

        {/* Flexible Payment */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className=" text-center p-4 border rounded-4">
            <i className="bi bi-credit-card fs-2"></i>
            <h5 className="fw-semibold mt-4 fs-5">Flexible Payment</h5>
            <p className=" small mb-0">
              Pay with Multiple Credit Cards
            </p>
          </div>
        </div>

        {/* 14 Day Returns */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className=" text-center p-4 border rounded-4">
            <i className="bi bi-arrow-counterclockwise fs-2"></i>
            <h5 className="fw-semibold mt-4 fs-5">14 Day Returns</h5>
            <p className=" small mb-0">
              Within 30 days for an exchange
            </p>
          </div>
        </div>

        {/* Premium Support */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className=" text-center p-4 border rounded-4">
            <i className="bi bi-headset fs-2"></i>
            <h5 className="fw-semibold mt-4 fs-5">Premium Support</h5>
            <p className=" small mb-0">
              Outstanding premium support
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Shop_Gram
