/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Seller_1_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_1_01.jpg";
import Seller_1_02 from "../Images/Navbar_imgs/Seller_imgs/Seller_1_02.jpg";
import Seller_1_03 from "../Images/Navbar_imgs/Seller_imgs/Seller_1_03.jpg";

import Seller_2_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_2_01.jpg";
import Seller_2_02 from "../Images/Navbar_imgs/Seller_imgs/Seller_2_02.jpg";
import Seller_2_03 from "../Images/Navbar_imgs/Seller_imgs/Seller_2_03.jpg";

import Seller_3_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_3_01.jpg";
import Seller_3_02 from "../Images/Navbar_imgs/Seller_imgs/Seller_3_02.jpg";
import Seller_4_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_4_01.jpg";
import Seller_4_02 from "../Images/Navbar_imgs/Seller_imgs/Seller_4_02.jpg";
import Seller_4_03 from "../Images/Navbar_imgs/Seller_imgs/Seller_4_03.jpg";

import Seller_5_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_5_01.jpg";
import Seller_5_02 from "../Images/Navbar_imgs/Seller_imgs/Seller_5_02.jpg";
import Seller_6_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_6_01.jpg";
import Seller_6_02 from "../Images/Navbar_imgs/Seller_imgs/Seller_6_02.jpg";
import Seller_6_03 from "../Images/Navbar_imgs/Seller_imgs/Seller_6_03.jpg";
import Seller_6_04 from "../Images/Navbar_imgs/Seller_imgs/Seller_6_04.jpg";
import Seller_6_05 from "../Images/Navbar_imgs/Seller_imgs/Seller_6_05.jpg";

import Seller_7_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_7_01.jpg";
import Seller_7_02 from "../Images/Navbar_imgs/Seller_imgs/Seller_7_02.jpg";
import Seller_7_03 from "../Images/Navbar_imgs/Seller_imgs/Seller_7_03.jpg";

import Seller_8_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_8_01.jpg";
import Seller_8_02 from "../Images/Navbar_imgs/Seller_imgs/Seller_8_02.jpg";
import Seller_8_03 from "../Images/Navbar_imgs/Seller_imgs/Seller_8_03.jpg";

import Seller_9_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_9_01.jpg";
import Seller_9_02 from "../Images/Navbar_imgs/Seller_imgs/Seller_9_02.jpg";
import Seller_10_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_10_01.jpg";
import Seller_10_02 from "../Images/Navbar_imgs/Seller_imgs/Seller_10_02.jpg";
import Seller_11_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_11_01.jpg";
import Seller_11_02 from "../Images/Navbar_imgs/Seller_imgs/Seller_11_02.jpg";
import Seller_11_03 from "../Images/Navbar_imgs/Seller_imgs/Seller_11_03.jpg";

import Seller_12_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_12_01.jpg";
import Seller_12_02 from "../Images/Navbar_imgs/Seller_imgs/Seller_12_02.jpg";


const products = [
  {
    id: 1,
    title: "Ribbed Tank Top",
    price: 16.95,
    images: [Seller_1_01, Seller_1_02, Seller_1_03],
    colors: ["#f7b948", "#fff", "#000"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    title: "Ribbed Modal T-shirt",
    price: 18.95,
    images: [Seller_2_03, Seller_2_01, Seller_2_02, Seller_2_03],
    colors: ["#3f3d3fff", "#c9e6c4", "#a88cc9"],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 3,
    title: "Oversized Printed T-shirt ",
    price: 20.95,
    images: [Seller_3_01, Seller_3_02],
    colors: ["#fff", "#f7b7e8"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    title: "Oversized Printed T-shirt ",
    price: 21.95,
    images: [Seller_4_02, Seller_4_01, Seller_4_03],
    colors: ["#d9c4f1", "#fff", "#000"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    title: "V-neck linen T-shirt",
    price: 22.95,
    images: [Seller_5_01, Seller_5_02],
    colors: ["#fed8b1", "#fed9b1"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    title: "Loose Fit Sweatshirt",
    price: 19.95,
    images: [Seller_6_02, Seller_6_01, Seller_6_03, Seller_6_04, Seller_6_05],
    colors: ["#fff", "#fed9b1", "#000", "#230decff", "#b7d58dff"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    title: "Regular Fit Oxford Shirtx",
    price: 17.95,
    images: [Seller_7_01, Seller_7_02, Seller_7_03],
    colors: ["#e3f2fd", "#222", "#063676ff"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 8,
    title: "Loose Fit Hoodie",
    price: 23.95,
    images: [Seller_8_02, Seller_8_01, Seller_8_03],
    colors: ["#fff", "#000", "#3d0fe6ff"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 9,
    title: "Patterned scarf",
    price: 24.95,
    images: [Seller_9_01, Seller_9_02],
    colors: ["#ffeb3b", "#000"],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 10,
    title: "Slim Fit Fine-knit Turtleneck Sweater",
    price: 26.95,
    images: [Seller_10_01, Seller_10_02],
    colors: ["#222", "#fff"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 11,
    title: "Slim Fit Fine-knit Turtleneck Sweater",
    price: 15.95,
    images: [Seller_11_01, Seller_11_02, Seller_11_03],
    colors: ["#dee2e6", "#dee4e6", "#f6acebff"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 12,
    title: "Slim Fit Fine-knit Turtleneck Sweater",
    price: 14.95,
    images: [Seller_12_02, Seller_12_01],
    colors: ["#222", "#212121"],
    sizes: ["S", "M", "L"],
  },
];


function Shopping_page() {
  return (

    <>

    <div>
        <div className="new-arrival-section">

      {/* ------- Top Title Section ------- */}
      <div className="text-center py-5">
        <h1 className="">New Arrival</h1>
        <p className="text-muted">
          Shop through our latest selection of Fashion
        </p>
      </div>

      
    </div>
    </div>
    <div className="py-5 container-fluid p-5 my-" >
       <div>

        {/* ------------- Filter Row ------------- */}
        <Row className="align-items-center mb-4 justify-content-between">

          {/* Filter Button */}
          <Col lg="2" xs="4">
            <Button variant="light" className="filter-btn shadow-sm w-50 d-flex align-items-center gap-2">
              <i className="bi bi-filter"></i> FILTER
            </Button>
          </Col>

          {/* Icons (center) */}
          <Col lg="6" className="d-none d-lg-flex justify-content-center gap-3 view-icons">
           
            <span className="size text-muted">:-</span>
            <span className="size text-muted">::</span>
            <span className="size text-muted">:::</span>
            <span className="size">::::</span>
            <span className="size text-muted">:::::</span>
            <span className="size text-muted">::::::</span>



            {/* <i class="bi bi-grid-1x2"></i>
            <i class="bi bi-grid-3x2"></i>
            <i className="bi bi-grid-fill active-icon"></i>
            <i className="bi bi-grid-3x3-gap-fill"></i>
            <i class="bi bi-grid-4x4"></i> */}
            
          </Col>

          {/* Dropdown + RTL */}
          <Col lg="3" xs="8" className="d-flex justify-content-end align-items-center gap-3">
            <Dropdown>
              <Dropdown.Toggle variant="light" className="shadow-sm w-100  border">
                Featured 
              </Dropdown.Toggle>

              <Dropdown.Menu className="p-1 pt-2 pb-2">
                <Dropdown.Item>Latest</Dropdown.Item>
                <Dropdown.Item>Beat Selling</Dropdown.Item>
                <Dropdown.Item>Alphabetically, A-Z</Dropdown.Item>
                <Dropdown.Item>Alphabetically, Z-A</Dropdown.Item>
                <Dropdown.Item>Price, low to high</Dropdown.Item>
                <Dropdown.Item>Price, high to low</Dropdown.Item>
                <Dropdown.Item>Date, old to new</Dropdown.Item>
                <Dropdown.Item>Date, new to old</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Col>
        </Row>
      </div>

      <Row>
        {products.map((product) => (
          <Col key={product.id} lg={3} md={4} sm={6} className="mb-5">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      

      <div className="text-center">
        <a href="#" className="btn btn-light bg-dark text-white border mx-2">1</a>
        <a href="#" className="btn btn-light border mx-2">2</a>
        <a href="#" className="btn btn-light border mx-2">3</a>
        <a href="#" className="btn btn-light border mx-2">4</a>
        <a href="#" className="btn btn-light border mx-2"><i class="bi bi-chevron-right"></i></a>


      </div>
</div>
</>
  );
}
function ProductCard({ product }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [zoomImage, setZoomImage] = useState(false);
  const [hover, setHover] = useState(false);

  const changeImage = (i) => {
    setZoomImage(false);
    setTimeout(() => {
      setImgIndex(i);
      setZoomImage(true);
    }, 100);
  };

 return (
    <>
      <div
        className=" rounded-3  position-relative"
        onMouseEnter={() => {
          setHover(true);
          changeImage(1);
        }}
        onMouseLeave={() => {
          setHover(false);
          changeImage(0);
        }}
        style={{ transition: "0.3s" }}
      >
        {/* IMAGE */}
        <div
          style={{
            borderRadius: "18px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={product.images[imgIndex]}
            className="w-100"
            alt="product"
            style={{
              height: "465px",
              objectFit: "cover",
              transition: "0.5s ease",
              transform: zoomImage ? "scale(1.05)" : "scale(1)",
            }}
          />

          {/* ⭐ ICONS — FIXED ON TOP (correct position) */}
          {hover && (
            <div
              className="position-absolute start-50 translate-middle-x d-flex gap-2"
              style={{
                bottom: "40px", // 👈 Sizes ke thoda upar
                zIndex: 30,
              }}
            >
              <button className="btn btn-light rounded">
                <i class="bi bi-bag-dash"></i>
              </button>
              <button className="btn btn-light rounded">
                <i class="bi bi-heart"></i>
              </button>
              <button className="btn btn-light rounded">
                <i class="bi bi-shuffle"></i>
              </button>
              <button className="btn btn-light rounded">
                <i class="bi bi-eye"></i>
              </button>
            </div>
          )}

          {/* ⭐ SIZES — BOTTOM FIXED */}
          {hover && (
            <div
              className="position-absolute bottom-0 start-0 end-0 bg-dark text-white text-center py-1"
              style={{
                borderRadius: "0 0 18px 18px",
                opacity: 0.5,
                zIndex: 20,
              }}
            >
              {product.sizes.map((s) => (
                <span key={s} className="mx-2 fw-semibold">
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* TITLE */}
        <h6 className="mt-3">{product.title}</h6>
        <p className="fw-bold">${product.price}</p>

        {/* COLORS */}
        <div className="d-flex gap-2">
          {product.colors.map((clr, i) => (
            <button
              key={i}
              onMouseEnter={() => changeImage(i)}
              className="rounded-circle border"
              style={{
                width: "18px",
                height: "18px",
                background: clr,
                cursor: "pointer",
              }}
            ></button>
          ))}
        </div>
      </div>

     
    </>
  );
}


export default Shopping_page
