// Categories.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import collection_1 from "../Images/Navbar_imgs/Categories_img/collection_1.jpg";
import collection_2 from "../Images/Navbar_imgs/Categories_img/collection_2.jpg";
import collection_3 from "../Images/Navbar_imgs/Categories_img/collection_3.jpg";
import collection_4 from "../Images/Navbar_imgs/Categories_img/collection_4.jpg";
import collection_5 from "../Images/Navbar_imgs/Categories_img/collection_5.jpg";

const infromation = [
  { id: 1, title: "Clothing", image: collection_1 },
  { id: 2, title: "Sunglasses", image: collection_2 },
  { id: 3, title: "Bags", image: collection_3 },
  { id: 4, title: "Fashion", image: collection_4 },
  { id: 5, title: "Accessories", image: collection_5 },
];

function Categories() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container-fluid py-5 p-5">
      {/* Arrows first, then heading */}
      <div className="d-flex align-items-center mb-4">
        <button
          ref={prevRef}
          className="cat-prev btn btn-outline-dark rounded-circle me-2"
        >
          ‹
        </button>
        <button
          ref={nextRef}
          className="cat-next btn btn-outline-dark rounded-circle me-3"
        >
          ›
        </button>
        <h6 className="fw-bold m-0">SHOP BY CATEGORIES</h6>
      </div>

      <div className="row g-4">
        {/* LEFT – Swiper */}
        <div className="col-12 col-lg-9">
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            loop={true}
            spaceBetween={30}
            speed={1300}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {infromation.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="position-relative">
                  <img
                    src={item.image}
                    className="img-fluid w-100 rounded-4"
                    alt={item.title}
                  />

                  {/* YOUR SAME BUTTON CLASS */}
                  <button
                    className="btn bg-white category-btn fw-semibold px-4 py-2 position-absolute d-flex align-items-center"
                    style={{
                      bottom: "20px",
                      left: "20px",
                    }}
                  >
                    {item.title}
                    <i className="bi bi-arrow-up-right ms-2"></i>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="col-lg-3">
          <div className="border broder-dark rounded-4 p-4 d-flex flex-column justify-content-end h-100">
            <h2>Discover all new items</h2>
            <button
              className=" fs-4 border border-dark btn  rounded-circle m-0"
              style={{ width: "50px" }}
            >
              ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
