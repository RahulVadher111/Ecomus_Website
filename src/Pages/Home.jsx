import React from 'react'

import home01 from "../Images/Navbar_imgs/Home01.jpg"
import home02 from "../Images/Navbar_imgs/Home02.jpg"
import home03 from "../Images/Navbar_imgs/Home03.jpg"


function Home() {
  return (
    <>
    <div id="carouselExampleControls"
        className="carousel slide" 
        data-bs-ride="carousel" 
        data-bs-interval="3000">

      {/* Indicators (dots) */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <div
            className="container-fluid d-flex align-items-center"
            style={{
              backgroundImage: `url(${home01})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "90vh",
            }}
          >
            <div className="w-100">
              <div className="d-flex flex-column justify-content-center text-start p-5 banner-text">
                <p className="display-5" 
                  style={{fontSize:"80px", fontFamily: "Albert Sans, sans-serif"}} >
                  Glamorous <br /> Glam
                </p>
                <p className="lead text-dark fw-semibold line">From casual to formal, we’ve got you covered</p>
                <div>
                  <button className="btn btn-lg  px-4 mt-4  p-3 fs-6 text-white fw-bold bg-dark">
                      SHOP COLLECTION <i class="bi bi-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>    
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div
            className="container-fluid d-flex align-items-center"
            style={{
              backgroundImage: `url(${home02})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "90vh",
            }}
          >
            <div className="w-100">
              <div className="d-flex flex-column justify-content-center text-start px-5 banner-text">
                <h1 className=" display-5 "  style={{fontSize:"90px", fontFamily: "Albert Sans, sans-serif"}}  >
                  Simple <br /> Style
                </h1>
                <p className="lead text-dark fw-bold line">From casual to formal, we’ve got you covered</p>
                <div >
                  <button className="btn  btn-lg  px-4 mt-3  p-3 fs-6 text-light bg-dark"
                    style={{backgroundColor:"#97414b"}}>
                      SHOP COLLECTION <i class="bi bi-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div
            className="container-fluid d-flex align-items-center"
            style={{
              backgroundImage: `url(${home03})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "90vh",
            }}
          >
            <div className="w-100">
              <div className="d-flex flex-column justify-content-center text-start px-5 banner-text">
                <h1 className=" display-5 text-dark"  style={{fontSize:"90px", fontFamily: "Albert Sans, sans-serif"}} >
                  Glamorous  <br /> Glam
                </h1>
                <p className="lead text-dark fw-bold">From casual to formal, we’ve got you covered</p>
                <div >
                  <button className="btn  btn-lg  px-4 mt-3  p-3 fs-6 text-light bg-dark"
                    style={{backgroundColor:"#97414b"}}>
                      SHOP COLLECTION <i class="bi bi-chevron-right"></i>
                  </button> 
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
   </div>

   <div className="scroll-wrapper p-4 " style={{ backgroundColor: "#FCFFB2" }}>
  <div className="scroll-content">
    <span><i class="bi bi-lightning-fill"></i>Spring Clearance Event: Save Up to 70%</span>
    <span><i class="bi bi-lightning-fill"></i>Spring Clearance Event: Save Up to 70%</span>
    <span><i class="bi bi-lightning-fill"></i>Spring Clearance Event: Save Up to 70%</span>
    <span><i class="bi bi-lightning-fill"></i>Spring Clearance Event: Save Up to 70%</span>
  </div>
            
  {/* Duplicate content for seamless effect */}
  <div className="scroll-content">
    <span><i class="bi bi-lightning-fill"></i>Spring Clearance Event: Save Up to 70%</span>
    <span><i class="bi bi-lightning-fill"></i>Spring Clearance Event: Save Up to 70%</span>
    <span><i class="bi bi-lightning-fill"></i>Spring Clearance Event: Save Up to 70%</span>
    <span><i class="bi bi-lightning-fill"></i>Spring Clearance Event: Save Up to 70%</span>
  </div>
</div>



    
    </>
  )
}

export default Home
