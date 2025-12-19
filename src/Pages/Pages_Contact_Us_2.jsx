import React from 'react'

function Pages_Contact_Us_2() {
  return (
    <>
    
     <div className=' text-center p-5 gridyent' style={{backgroundColor:"#fcffb2",fontSize:'42px'}}>
      <p className="mb-4 pt-4 pb-2 ">Contact Us 2</p>
        </div>

        {/*  */}

         <div className="container-fluid py-1">
      <div className="mx-5 py-5">
        <div className="row ">

          {/* LEFT SIDE */}


          <div className="col-lg-7">
            <div>
            <iframe
                title="Tower of London Map"
                src="https://www.google.com/maps?q=Tower+of+London&output=embed"
                width="100%"
                height="800"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                ></iframe>
        </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="col-lg-5 p-5">
            <div className='p-5 pt-0'>
            <p className="mb-4 fs-2">Visit Our Store</p>

            <div className="mb-4">
              <h6 className="pb-2">Address</h6>
              <p className="mb-0" style={{fontSize:"14px"}}>
                66 Mott St, New York, New York,
                Zip Code: 10006, AS
              </p>
            </div>

            <div className="mb-4">
              <h6 className="pb-2">Phone</h6>
              <p className="mb-0"style={{fontSize:"14px"}}>(623) 934-2400</p>
            </div>

            <div className="mb-4">
              <h6 className="pb-2">Email</h6>
              <p className="mb-0"style={{fontSize:"14px"}}>EComposer@example.com</p>
            </div>

            <div className="mb-4">
              <h6 className="">Open Time</h6>
              <p className="mb-0"style={{fontSize:"14px"}}>
                Our store has re-opened for shopping,<br />
                
              </p>
              <p className='pt-2'style={{fontSize:"14px"}}>exchange Every day 11am to 7pm</p>
            </div>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-5"style={{fontSize:"14px"}}>
              <i Nav className="bi bi-facebook icon-box"></i>
              <i className="bi bi-twitter-x icon-box"></i>
              <i className="bi bi-instagram icon-box"></i>
              <i className="bi bi-tiktok icon-box"></i>
              <i className="bi bi-pinterest icon-box"></i>
            </div>
          </div>

          
</div>
        </div>
      </div>
    </div>

    {/* from */}


    <div className="pt-5 pb-5" style={{backgroundColor:"#F5F5F5"}}>
  <div className="row justify-content-center text-center">
    <div className="col-lg-6 col-md-8">

      <p className="mb-3 fs-1">Get in Touch</p>

      <p className="mb-4 text-muted" style={{ fontSize: "16px" }}>
        If you’ve got great products your making or looking to work with
        us then drop us a line.
      </p>

      <form>
        <div className="row g-3 mb-3 pt-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control py-3"
              placeholder="Name *"
            />
          </div>

          <div className="col-md-6">
            <input
              type="email"
              className="form-control py-3"
              placeholder="Email *"
            />
          </div>
        </div>

        <div className="mb-4">
          <textarea
            className="form-control py-3"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>

        <button
          className="btn text-white px-4 py-2"
          style={{ backgroundColor: "#000" }}
        >
          Send
        </button>
      </form>

    </div>
  </div>
</div>

    </>
  )
}

export default Pages_Contact_Us_2
