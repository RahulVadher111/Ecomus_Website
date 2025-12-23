import React from 'react'

function Payment_confirmation() {
  return (
    <>
    
    <div
        className=" text-center p-5 gridyent p"
        style={{ backgroundColor: "#fcffb2", fontSize: "42px" }}
      >
        <p className="mb-4 pt-4 pb-2 ">Payment Confirmation</p>
      </div>

      {/* section  */}
      <div className="container py-5">
      <h2 className="text-center mb-4 fw-normal">
        Payment confirmation
      </h2>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="payment-card p-4 p-md-5">
            
            <div className="row mb-3">
              <div className="col-6">Date</div>
              <div className="col-6 text-end">01/01/2024</div>
            </div>

            <div className="row mb-3">
              <div className="col-6">Payment method</div>
              <div className="col-6 text-end">Visa</div>
            </div>

            <div className="row mb-3">
              <div className="col-6">Card number</div>
              <div className="col-6 text-end">**** **** **** 9999</div>
            </div>

            <div className="row mb-3">
              <div className="col-6">Cardholder name</div>
              <div className="col-6 text-end">Themesflat</div>
            </div>

            <div className="row mb-3">
              <div className="col-6">Email</div>
              <div className="col-6 text-end">info@fashionshop.com</div>
            </div>

            <div className="row mb-4">
              <div className="col-6">Phone</div>
              <div className="col-6 text-end">(212) 555-1234</div>
            </div>

            <div className="row align-items-center mb-4">
              <div className="col-6 fw-semibold fs-5">
                Subtotal
              </div>
              <div className="col-6 text-end fw-semibold fs-5">
                $188.00 USD
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <button className="btn btn-outline-dark w-100 py-2">
                  Cancel Payment
                </button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-dark w-100 py-2">
                  Confirm Payment
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Payment_confirmation
