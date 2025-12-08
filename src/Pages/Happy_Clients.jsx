import React,  { useRef, useEffect,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// Images
import Lookbook1 from "../Images/Navbar_imgs/Categories_img/lookbook-3.jpg";
import Lookbook2 from "../Images/Navbar_imgs/Categories_img/lookbook-4.jpg";

import rating_01 from "../Images/Navbar_imgs/Categories_img/rating_01.png";
import rating_02 from "../Images/Navbar_imgs/Categories_img/rating_02.png";
import rating_03 from "../Images/Navbar_imgs/Categories_img/rating_03.png";
import rating_04 from "../Images/Navbar_imgs/Categories_img/rating_04.png";

import Shope_look_1 from "../Images/Navbar_imgs/Categories_img/Shope_look_1.png"
import Shope_look_2 from "../Images/Navbar_imgs/Categories_img/Shope_look_2.png"
import Shope_look_3 from "../Images/Navbar_imgs/Categories_img/Shope_look_3.png"

// logos

import logo_01 from "../Images/Navbar_imgs/Categories_img/Logo_01.png"
import logo_02 from "../Images/Navbar_imgs/Categories_img/Logo_02.png"
import logo_03 from "../Images/Navbar_imgs/Categories_img/Logo_03.png"
import logo_04 from "../Images/Navbar_imgs/Categories_img/Logo_04.png"
import logo_05 from "../Images/Navbar_imgs/Categories_img/Logo_05.png"
import logo_06 from "../Images/Navbar_imgs/Categories_img/Logo_06.png"





const testimonials = [
  {
    id: 1,
    rating: "★ ★ ★ ★ ★",
    title: "Best Online Fashion Site",
    review: " I always find something stylish and affordable on this web fashion site",
    name: "Robert Smith",
    from: "Customer from USA",
    productImg: rating_01,
    productName: "Jersey thong body",
    productPrice: "$105.95",
  },
  {
    id: 2,
    rating: "★ ★ ★ ★ ★",
    title: "Great Selection and Quality",
    review: "I love the variety of styles and the high-quality clothing on this web fashion site.",
    name: "Allen Lyn",
    from: "Customer from France",
    productImg: rating_02,
    productName: "Cotton jersey top",
    productPrice: "$7.95",
  },
  {
    id: 3,
    rating: "★ ★ ★ ★ ★",
    title: "Best Customer Service",
    review: "I finally found a web fashion site with stylish and flattering options in my size.",
    name: "Peter Rope",
    from: "Customer from USA",
    productImg: rating_03,
    productName: "Ribbed modal T-shirt",
    productPrice: "From $18.95",
  },
  {
    id: 4,
    rating: "★ ★ ★ ★ ★",
    title: "Great Selection and Quality",
    review: "I love the variety of styles and the high-quality clothing on this web fashion site.",
    name: "Sara Mia",
    from: "Customer from Japan",
    productImg: rating_04,
    productName: "Soft Knit Sweater",
    productPrice: "$16.95",
  },
];

function Happy_Clients() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  const [activeHotspot, setActiveHotspot] = useState(null);

  const toggleHotspot = (id) => {
    setActiveHotspot(activeHotspot === id ? null : id);
  };

  const brandList = [
    { id: 1, img: logo_01 },
    { id: 2, img: logo_02 },
    { id: 3, img: logo_03 },
    { id: 4, img: logo_04 },
    { id: 5, img: logo_05 },
    { id: 6, img: logo_06 },
  ];

  return (
    <>
      {/* SHOP THE LOOK */}
     <div className="my-3">
  <h1 className="text-center text-bold-0 mb-3">Shop the look</h1>
  <p className="text-center mb-5 fs-6">Inspire and let yourself be inspired, from one unique fashion to another.</p>

  <div className="row g-0 position-relative">

    {/* LEFT IMAGE */}
    <div className="col-md-6 p-0 position-relative">
      <img src={Lookbook1} alt="" className="w-100 img-fluid" />

      {/* HOTSPOT 1 */}
      <div
        className="hotspot"
        style={{ top: "55%", left: "42%" }}
        onClick={() => toggleHotspot(1)}
      >
        <div className="dot"></div>
      </div>

      {/* POPUP 1 */}
      {activeHotspot === 1 && (
        <div className="hotspot-card" style={{ top: "40%", left: "48%" }}>
          <div className="d-flex align-items-center gap-4">
            <img src={Shope_look_1} alt="" className="rounded img-fluid" />
            <div>
              <h6 className="m-0 fw-semibold icon-box">Ribbed modal T-shirt</h6>
              <p className="m-0 fw-bold">$20.00</p>
            </div>
            <i className="bi bi-eye  btn btn-outline-dark rounded-circle"></i>
          </div>
        </div>
      )}

      {/* HOTSPOT 2 */}
      <div
        className="hotspot"
        style={{ top: "75%", left: "55%" }}
        onClick={() => toggleHotspot(2)}
      >
        <div className="dot"></div>
      </div>

      {/* POPUP 2 */}
      {activeHotspot === 2 && (
        <div className="hotspot-card" style={{ top: "63%", left: "60%" }}>
          <div className="d-flex align-items-center gap-4">
            <img src={Shope_look_2} alt="" className="rounded img-fluid" />
            <div>
              <h6 className="m-0 fw-semibold icon-box">jersey thong body</h6>
              <p className="m-0 fw-bold">$112.00</p>
            </div>
            <i className="bi bi-eye  btn btn-outline-dark rounded-circle"></i>
          </div>
        </div>
      )}
    </div>

    {/* RIGHT IMAGE */}
    <div className="col-md-6 p-0 position-relative">
      <img src={Lookbook2} alt="" className="w-100 img-fluid" />

      {/* HOTSPOT 3 */}
      <div
        className="hotspot"
        style={{ top: "28%", left: "62%" }}
        onClick={() => toggleHotspot(3)}
      >
        <div className="dot"></div>
      </div>

      {/* POPUP 3 */}
      {activeHotspot === 3 && (
        <div className="hotspot-card" style={{ top: "15%", left: "70%" }}>
          <div className="d-flex align-items-center gap-4">
            <img src={Shope_look_3} alt="" className="rounded img-fluid" />
            <div>
              <h6 className="m-0 fw-semibold icon-box">Ribbed tank top</h6>
              <p className="m-0 fw-bold">$20.00</p>
            </div>
            <i className="bi bi-eye btn btn-outline-dark rounded-circle"></i>
          </div>
        </div>
      )}
    </div>

  </div>
</div>


      {/* HAPPY CLIENTS */}
      <div className="my-5 pt-5 ">
        <h1 className="text-center mb-3">Happy Clients</h1>
        <p className="text-center  fs-6">Hear what they say about us</p>
      

      {/* SLIDER */}
      <div className="container-fluid position-relative p-5 pb-0">
        {/* Arrow Controls */}
        <button ref={prevRef} className="slider-arrow left-arrow">‹</button>
        <button ref={nextRef} className="slider-arrow right-arrow">›</button>

        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={30}
          speed={1100} 
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
           <SwiperSlide key={item.id}>
  <div className="testimonial-card border border-1 rounded-3 p-5">
    
    <div className="testimonial-content">
      <div className="mb-2 fs-4" style={{color:"#ff7b54"}}>
        {item.rating}
      </div>

      <h5>{item.title}</h5>

      <p className="pt-2 text-dark" style={{fontSize:"18px"}}>
        “ {item.review} ”
      </p>

      <div className="mt-3">
        <h6 className="pt-2">{item.name}</h6>
        <p className="text-muted pb-3">{item.from}</p>
      </div>
    </div>

    <hr />

    <div className="d-flex align-items-center gap-3 mt-4">
      <img src={item.productImg} alt="" className="rounded" />
      <div>
        <p className="m-1" style={{ fontSize: "15px" }}>{item.productName}</p>
        <strong className="mx-1">{item.productPrice}</strong>
      </div>
    </div>

  </div>
</SwiperSlide>

          ))}
        </Swiper>
      </div>
      </div>
      
      <div className="pt-4 container-fluid p-5 ">
        <div className="brand-box  rounded-4 border">
          <div className="row g-0 text-center">
            {brandList.map((brand) =>(
              <div key={brand.id} className="col-6 p-4 col-md-4 col-lg-2 border-end brand-item d-flex justify-content-center align-items-center">
                <img src={brand.img} alt="brand" className="brand-logo img-fluid" />

                </div>
            ))}

          </div>

        </div>

      </div>
    </>
  );
}

export default Happy_Clients;
