import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import logo from "../Images/Navbar_imgs/logo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";

// import { useState } from "react";

// home imgs
import home_01 from "../Images/Navbar_imgs/Home_imgs/home-01.jpg";
import home_02 from "../Images/Navbar_imgs/Home_imgs/home-02.jpg";
import home_03 from "../Images/Navbar_imgs/Home_imgs/home-03.jpg";
import home_04 from "../Images/Navbar_imgs/Home_imgs/home-04.jpg";
import home_05 from "../Images/Navbar_imgs/Home_imgs/home-05.jpg";
import home_06 from "../Images/Navbar_imgs/Home_imgs/home-06.jpg";
import home_07 from "../Images/Navbar_imgs/Home_imgs/home-07.jpg";
import home_08 from "../Images/Navbar_imgs/Home_imgs/home-08.jpg";
import home_09 from "../Images/Navbar_imgs/Home_imgs/home-09.jpg";
import home_010 from "../Images/Navbar_imgs/Home_imgs/home-010.jpg";
import home_011 from "../Images/Navbar_imgs/Home_imgs/home-011.jpg";
import home_012 from "../Images/Navbar_imgs/Home_imgs/home-012.jpg";
// shope

import shope_01 from "../Images/Navbar_imgs/Home_imgs/Shope_01.jpg";
import shope_02 from "../Images/Navbar_imgs/Home_imgs/Shope_02.jpg";

import Seller_1_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_1_01.jpg";
import Seller_3_01 from "../Images/Navbar_imgs/Seller_imgs/Seller_3_01.jpg";

function Navbar() {
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedFlag, setSelectedFlag] = useState(
    "https://flagcdn.com/w20/us.png"
  );

  const [selectedLang, setSelectedLang] = useState("English");

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHome, setShowHome] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [showBlogs, setShowBlogs] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <>
      {/* TOP BAR */}
      <div className="container-fluid">
        <div className="row text-center p-2 pt-1 mx-2">
          <div className="d-flex gap-2 mt-2 roundedx-circle col-md-4 gap-2 ">
            <a
              href="#"
              className="text-dark border rounded-circle p-1 cricleicone facebook"
            >
              <i class="bi bi-facebook p-1"></i>
            </a>
            <a
              href="#"
              className="text-dark border rounded-circle p-1  cricleicone twitter"
            >
              <i class="bi bi-twitter-x p-1"></i>
            </a>
            <a
              href="#"
              className="text-dark border rounded-circle p-1  cricleicone instagram"
            >
              <i class="bi bi-instagram p-1"></i>
            </a>
            <a
              href="#"
              className="text-dark border rounded-circle p-1  cricleicone tiktok"
            >
              <i class="bi bi-tiktok p-1"></i>
            </a>
            <a
              href="#"
              className="text-dark border rounded-circle p-1  cricleicone pinterest"
            >
              <i class="bi bi-pinterest p-1"></i>
            </a>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={700}
              allowTouchMove={false} // user swipe disable (optional)
              style={{ height: "22px" }} // perfect height to avoid shaking
            >
              <SwiperSlide>
                <p
                  className="text-center fw-semibold m-0"
                  style={{ fontSize: "14px" }}
                >
                  Time to Refresh your wardrobe.
                </p>
              </SwiperSlide>

              <SwiperSlide>
                <p
                  className="text-center fw-semibold m-0"
                  style={{ fontSize: "14px" }}
                >
                  Spring Fashion sale{" "}
                  <span className="text-danger border-bottom border-danger">
                    Shope now <i class="bi bi-arrow-up-right"></i>{" "}
                  </span>
                </p>
              </SwiperSlide>

              <SwiperSlide>
                <p
                  className="text-center fw-semibold m-0"
                  style={{ fontSize: "14px" }}
                >
                  Summer sale discount off 70%
                </p>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="col-md-4 ">
            <div className="d-flex align-items-center justify-content-end">
              {/* ---------- Currency Dropdown ---------- */}
              <div className="custom-dropdown">
                <button
                  className="dropdown-btn"
                  onClick={() => setCurrencyOpen(!currencyOpen)}
                >
                  <img src={selectedFlag} width="18" height="14" />
                  {selectedCurrency}
                  <i className="bi bi-chevron-down ms-1"></i>
                </button>

                {currencyOpen && (
                  <div className="dropdown-menu-box">
                    <div
                      className="dropdown-item"
                      onClick={() => {
                        setSelectedCurrency("EUR");
                        setSelectedFlag("https://flagcdn.com/w20/fr.png");
                        setCurrencyOpen(false);
                      }}
                    >
                      <img src="https://flagcdn.com/w20/fr.png" width="20" />
                      EUR € | France
                    </div>

                    <div
                      className="dropdown-item"
                      onClick={() => {
                        setSelectedCurrency("EUR");
                        setSelectedFlag("https://flagcdn.com/w20/de.png");
                        setCurrencyOpen(false);
                      }}
                    >
                      <img src="https://flagcdn.com/w20/de.png" width="20" />
                      EUR € | Germany
                    </div>

                    <div
                      className="dropdown-item"
                      onClick={() => {
                        setSelectedCurrency("USD");
                        setSelectedFlag("https://flagcdn.com/w20/us.png");
                        setCurrencyOpen(false);
                      }}
                    >
                      <img src="https://flagcdn.com/w20/us.png" width="20" />
                      USD $ | United States
                    </div>

                    <div
                      className="dropdown-item"
                      onClick={() => {
                        setSelectedCurrency("VND");
                        setSelectedFlag("https://flagcdn.com/w20/vn.png");
                        setCurrencyOpen(false);
                      }}
                    >
                      <img src="https://flagcdn.com/w20/vn.png" width="20" />
                      VND ₫ | Vietnam
                    </div>
                  </div>
                )}
              </div>

              {/* ---------- Language Dropdown ---------- */}
              <div className="custom-dropdown ms-3">
                <button
                  className="dropdown-btn"
                  onClick={() => setLangOpen(!langOpen)}
                >
                  {selectedLang}
                  <i className="bi bi-chevron-down ms-1"></i>
                </button>

                {langOpen && (
                  <div className="dropdown-menu-box">
                    <div
                      className="dropdown-item"
                      onClick={() => {
                        setSelectedLang("English");
                        setLangOpen(false);
                      }}
                    >
                      English
                    </div>
                    <div
                      className="dropdown-item"
                      onClick={() => {
                        setSelectedLang("العربية");
                        setLangOpen(false);
                      }}
                    >
                      العربية
                    </div>
                    <div
                      className="dropdown-item"
                      onClick={() => {
                        setSelectedLang("简体中文");
                        setLangOpen(false);
                      }}
                    >
                      简体中文
                    </div>
                    <div
                      className="dropdown-item"
                      onClick={() => {
                        setSelectedLang("اردو");
                        setLangOpen(false);
                      }}
                    >
                      اردو
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div
        className={`py-3  w-100  bg ${showNavbar ? "show" : "hide"}`}
        style={{ zIndex: 1030 }}
      >
        <div className="container-fluid">
          <div className="row align-items-center  mx-3 pt-2">
            <NavLink to="/" className="col-md-3">
              <img src={logo} alt="" />
            </NavLink>

            <div
              className="col-md-6  d-flex align-item-center justify-content-center "
              style={{ fontFamily: "Albert Sans, sans-serif" }}
            >
              <ul className="nav">
                {/* 🔹 Home Dropdown with 6 Images */}
                <li
                  className="nav-item dropdown position-static"
                  onMouseEnter={() => setShowHome(true)}
                  onMouseLeave={() => setShowHome(false)}
                >
                  <a className="nav-link text-dark hover">
                    Home <i className="bi bi-chevron-down Small"></i>
                  </a>

                  {/* Mega Menu */}
                  <div
                    className={`dropdown-menu w-100 mt-0 border-0 shadow-lg ${
                      showHome ? "d-block" : ""
                    }`}
                    style={{ top: "", left: 0, cursor: "pointer" }}
                  >
                    <div className="container py-4">
                      <div
                        className=" row text-center  d-flex flex-wrap"
                        style={{ fontSize: "17px" }}
                      >
                        {/* 6 Images (2 rows x 3 cols) */}
                        <div className="col-md-2 mb-3 bg-light p-2 hoverborder">
                          <img
                            src={home_01}
                            className="img-fluid  rounded zoom-img"
                            alt="Home 1"
                          />
                          <p className="mt-2 dark">Home fashion 01</p>
                        </div>
                        <div className="col-md-2 mb-3 bg-light p-2 hoverborder">
                          <img
                            src={home_02}
                            className="img-fluid  rounded zoom-img"
                            alt="Home 2"
                          />
                          <p className="mt-2 dark">Home multi brand</p>
                        </div>
                        <div className="col-md-2 mb-3 bg-light p-2 hoverborder">
                          <img
                            src={home_03}
                            className="img-fluid  rounded zoom-img"
                            alt="Home 3"
                          />
                          <p className="mt-2 dark">Home fashion 02</p>
                        </div>
                        <div className="col-md-2 bg-light p-2 hoverborder">
                          <img
                            src={home_04}
                            className="img-fluid  rounded zoom-img"
                            alt="Home 4"
                          />
                          <p className="mt-2 dark">Home fashion 03</p>
                        </div>
                        <div className="col-md-2 bg-light p-2 hoverborder">
                          <img
                            src={home_05}
                            className="img-fluid  rounded zoom-img"
                            alt="Home 5"
                          />
                          <p className="mt-2 dark">Home fashion 04</p>
                        </div>
                        <div className="col-md-2 bg-light p-2 hoverborder">
                          <img
                            src={home_06}
                            className="img-fluid  rounded zoom-img"
                            alt="Home 6"
                          />
                          <p className="mt-2 dark">Home fashion 05</p>
                        </div>
                        <div className="col-md-2 bg-light p-2 hoverborder">
                          <img
                            src={home_07}
                            className="img-fluid  rounded zoom-img"
                            alt="Home 6"
                          />
                          <p className="mt-2 dark">Home fashion 06</p>
                        </div>
                        <div className="col-md-2 bg-light p-2 hoverborder">
                          <img
                            src={home_08}
                            className="img-fluid  rounded zoom-img"
                            alt="Home 6"
                          />
                          <p className="mt-2 dark">Home drinkwear</p>
                        </div>
                        <div className="col-md-2 bg-light p-2 hoverborder">
                          <img
                            src={home_09}
                            className="img-fluid  rounded zoom-img"
                            alt="Home 6"
                          />
                          <p className="mt-2 dark">Home Supplement</p>
                        </div>
                        <div className="col-md-2 bg-light p-2 hoverborder">
                          <img
                            src={home_010}
                            className="img-fluid  rounded zoom-img"
                            alt="Home 6"
                          />
                          <p className="mt-2 dark">Home personalized pod</p>
                        </div>
                        <div className="col-md-2 bg-light p-2 hoverborder">
                          <img
                            src={home_011}
                            className="img-fluid  rounded zoom-img"
                            alt="Home 6"
                          />
                          <p className="mt-2 dark">Home pickleball</p>
                        </div>
                        <div className="col-md-2 bg-light p-2 hoverborder">
                          <img
                            src={home_012}
                            className="img-fluid  rounded zoom-img"
                            alt="Home 6"
                          />
                          <p className="mt-2 dark">Home Ceramic</p>
                        </div>
                        <div className="pt-4">
                          <button className="btn btn-dark p-3 fw-bold">
                            view all demoes (48+){" "}
                            <i class="bi bi-chevron-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* 🔹 Shop Dropdown */}
                <li
                  className="nav-item dropdown position-static"
                  onMouseEnter={() => setShowShop(true)}
                  onMouseLeave={() => setShowShop(false)}
                >
                  <NavLink
                    to="/Shopping_page"
                    className="nav-link text-dark hover"
                  >
                    Shop <i className="bi bi-chevron-down Small"></i>
                  </NavLink>

                  {/* Mega Menu */}
                  <div
                    className={`dropdown-menu w-100 mt-0 border-0 shadow-lg ${
                      showShop ? "d-block" : ""
                    }`}
                    style={{ top: "", left: 0 }}
                  >
                    <div className="container py-4">
                      <div className="row">
                        {/* 🔹 Left side: Categories (9 columns) */}
                        <div className="col-md-12 d-flex p-4 ">
                          <div
                            className="col-md-2"
                            style={{ fontSize: "14px" }}
                          >
                            <h6 className=" pb-3 fw-semibold">Shop layouts</h6>
                            <NavLink
                              to="/Shopping_page"
                              className="list-unstyled text-decoration-none text-muted pb-2"
                            >
                              <li className="pb-3 shope">Default</li>
                              <li className="pb-3 shope">Left sidebar</li>
                              <li className="pb-3 shope">Right sidebar</li>
                              <li className="pb-3 shope">Fullwidth</li>
                              <li className="pb-3 shope">Sub collection</li>
                              <li className="pb-3 shope">Collections list</li>
                            </NavLink>
                          </div>

                          <div
                            className="col-md-2"
                            style={{ fontSize: "14px" }}
                          >
                            <h6 className=" pb-3 fw-semibold">Features</h6>
                            <NavLink
                              to="/Shopping_page"
                              className="list-unstyled text-muted text-decoration-none"
                            >
                              <li className="pb-3 shope">Pagination links</li>
                              <li className="pb-3 shope">
                                Pagination loadmore
                              </li>
                              <li className="pb-3 shope">
                                Pagination infinite scrolling
                              </li>
                              <li className="pb-3 shope">Filter sidebar</li>
                              <li className="pb-3 shope">Filter hidden</li>
                            </NavLink>
                          </div>

                          <div
                            className="col-md-2 "
                            style={{ fontSize: "14px" }}
                          >
                            <h6 className=" pb-3 fw-semibold">
                              Product styles
                            </h6>
                            <NavLink
                              to="/Shopping_page"
                              className="list-unstyled text-muted text-decoration-none"
                            >
                              <li className="pb-3 shope">Product style 01</li>
                              <li className="pb-3 shope ">Product style 02</li>
                              <li className="pb-3 shope">Product style 03</li>
                              <li className="pb-3 shope">Product style 04</li>
                              <li className="pb-3 shope">Product style 05</li>
                              <li className="pb-3 shope">Product style 06</li>
                              <li className="pb-3 shope">Product style 07</li>
                            </NavLink>
                          </div>

                          <div className="row g-3">
                            {/* First Image */}
                            <div className="col-md-6">
                              <div className="position-relative">
                                <img
                                  src={shope_01}
                                  className="img-fluid w-100 rounded-2 zoom-img"
                                  alt="Heart Shine"
                                />
                                <button
                                  className="btn bg-white category-btn fw-semibold px-4 py-2 position-absolute d-flex align-items-center"
                                  style={{
                                    bottom: "30px",
                                    left: "100px",
                                  }}
                                >
                                  man{" "}
                                  <i className="bi bi-arrow-up-right ms-2"></i>
                                </button>
                              </div>
                            </div>

                            {/* Second Image */}
                            <div className="col-md-6 ">
                              <div className="position-relative">
                                <img
                                  src={shope_02}
                                  className="img-fluid w-100 rounded-2 zoom-img"
                                  alt="Heart Shine"
                                />
                                <button
                                  className="btn bg-white category-btn fw-semibold px-4 py-2 position-absolute d-flex align-items-center"
                                  style={{
                                    bottom: "30px",
                                    left: "100px",
                                  }}
                                >
                                  Women{" "}
                                  <i className="bi bi-arrow-up-right ms-2"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* 🔹 Products Dropdown */}
                <li
                  className="nav-item dropdown position-static"
                  onMouseEnter={() => setShowProducts(true)}
                  onMouseLeave={() => setShowProducts(false)}
                >
                  <a className="nav-link text-dark hover">
                    Products <i className="bi bi-chevron-down Small"></i>
                  </a>

                  {/* Mega Menu for Products */}
                  <div
                    className={`dropdown-menu w-100 mt-0 border-0 shadow-lg ${
                      showProducts ? "d-block" : ""
                    }`}
                    style={{ top: "", left: 0 }}
                  >
                    <div className="container py-4">
                      <div className="row gx-4">
                        {/* 🔹 Left Side Categories */}
                        <div className="col-lg-8 d-flex">
                          <div className="row w-100 gx-3">
                            {/* Column 1 */}
                            <div
                              className="col-md-3"
                              style={{ fontSize: "14px" }}
                            >
                              <h6 className="fw-semibold pb-2">
                                Product layouts
                              </h6>
                              <NavLink to="/Product_card" className="list-unstyled text-muted">
                                <li className="pb-3 shope">Product default</li>
                                <li className="pb-3 shope">Product grid 1</li>
                                <li className="pb-3 shope">Product grid 2</li>
                                <li className="pb-3 shope">Product stacked</li>
                                <li className="pb-3 shope">
                                  Product right thumbnails
                                </li>
                                <li className="pb-3 shope">
                                  Product drawer sidebar
                                </li>
                                <li className="pb-3 shope">
                                  Product description accordion
                                </li>
                                <li className="pb-3 shope">
                                  Product description list
                                </li>
                                <li className="pb-3 shope">
                                  Product description vertical
                                </li>
                              </NavLink>
                            </div>

                            {/* Column 2 */}
                            <div
                              className="col-md-3"
                              style={{ fontSize: "14px" }}
                            >
                              <h6 className="fw-semibold pb-2 shope">
                                Product details
                              </h6>
                              <ul className="list-unstyled text-muted">
                                <li className="pb-3 shope">
                                  Product inner zoom
                                </li>
                                <li className="pb-3 shope">
                                  Product zoom magnifier
                                </li>
                                <li className="pb-3 shope">Product no zoom</li>
                                <li className="pb-3 shope">
                                  Product photoswipe popup
                                </li>
                                <li className="pb-3 shope">
                                  Product external zoom and <br /> photoswipe
                                  popup
                                </li>
                                <li className="pb-3 shope">Product video</li>
                                <li className="pb-3 shope">
                                  Product 3D, AR models
                                </li>
                                <li className="pb-3 shope">
                                  Product options & customizer
                                </li>
                                <li className="pb-3 shope">
                                  Advanced product types
                                </li>
                                <li className="pb-3 shope">
                                  Recipient info form for <br /> gift card
                                  products
                                </li>
                              </ul>
                            </div>

                            {/* Column 3 */}
                            <div
                              className="col-md-3"
                              style={{ fontSize: "14px" }}
                            >
                              <h6 className="fw-semibold pb-2 shope">
                                Product swatches
                              </h6>
                              <ul className="list-unstyled text-muted">
                                <li className="pb-3 shope">
                                  Product color swatch
                                </li>
                                <li className="pb-3 shope">
                                  Product rectangle
                                </li>
                                <li className="pb-3 shope">
                                  Product rectangle color
                                </li>
                                <li className="pb-3 shope">
                                  Product swatch image
                                </li>
                                <li className="pb-3 shope">
                                  Product swatch image rounded
                                </li>
                                <li className="pb-3 shope">
                                  Product swatch dropdown
                                </li>
                                <li className="pb-3 shope">
                                  Product swatch dropdown color
                                </li>
                              </ul>
                            </div>

                            {/* Column 4 */}
                            <div
                              className="col-md-3"
                              style={{ fontSize: "14px" }}
                            >
                              <h6 className="fw-semibold pb-2 shope">
                                Product features
                              </h6>
                              <ul className="list-unstyled text-muted">
                                <li className="pb-3 shope">
                                  Frequently bought together
                                </li>
                                <li className="pb-3 shope">
                                  Frequently bought together{" "}
                                </li>
                                <li className="pb-3 shope">
                                  Product upsell features
                                </li>
                                <li className="pb-3 shope">
                                  Product pre-orders
                                </li>
                                <li className="pb-3 shope">
                                  Back in stock notification
                                </li>
                                <li className="pb-3 shope">Product pickup</li>
                                <li className="pb-3 shope">
                                  Variant images grouped
                                </li>
                                <li className="pb-3 shope">
                                  Complimentary products
                                </li>

                                <li className="pb-3 shope position-relative">
                                  <span
                                    className="badge position-absolute top-0 end-0 translate-middle-y"
                                    style={{ backgroundColor: "#31A56D" }}
                                  >
                                    NEW
                                  </span>
                                  Quick order list
                                </li>

                                <li className="pb-3 shope position-relative">
                                  <span
                                    className="badge position-absolute top-0 end-0 translate-middle-y"
                                    style={{ backgroundColor: "#31A56D" }}
                                  >
                                    NEW
                                  </span>
                                  Volume Discount
                                </li>

                                <li className="pb-3 shope position-relative">
                                  <span
                                    className="badge position-absolute top-0 end-0 translate-middle-y"
                                    style={{ backgroundColor: "#31A56D" }}
                                  >
                                    NEW
                                  </span>
                                  Volume Discount Grid
                                </li>

                                <li className="pb-3 shope position-relative">
                                  <span
                                    className="badge position-absolute top-0 end-0 translate-middle-y"
                                    style={{ backgroundColor: "#31A56D" }}
                                  >
                                    NEW
                                  </span>
                                  Buy X Get Y
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* 🔹 Right Side: Popular Collection */}
                        <div className="col-lg-4 d-flex gap-3 align-items-center justify-content-center">
                          <div>
                            <img
                              src={Seller_1_01}
                              alt="Popular Collection"
                              className="img-fluid rounded "
                              style={{
                                maxHeight: "300px",
                                objectFit: "cover",
                                width: "100%",
                              }}
                            />

                            <div className="pt-4">
                              <p>
                                Ribbed Tank Top <br /> <span>$16.95</span>
                              </p>
                            </div>
                          </div>
                          <div>
                            <img
                              src={Seller_3_01}
                              alt="Popular Collection"
                              className="img-fluid rounded "
                              style={{
                                maxHeight: "300px",
                                objectFit: "cover",
                                width: "100%",
                              }}
                            />
                            <div className="pt-4">
                              <p>
                                Oversized printed T-Shirt <br />{" "}
                                <span>$10.00</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* 🔹 Pages Dropdown */}

                <li
                  className="nav-item dropdown"
                  onMouseEnter={() => setShowPages(true)}
                  onMouseLeave={() => setShowPages(false)}
                >
                  <a className="nav-link text-dark hover">
                    Pages <i className="bi bi-chevron-down Small"></i>
                  </a>

                  <ul
                    className={`dropdown-menu shadow p-4 border-0 mt-0 rounded-0 ${
                      showPages ? "d-block" : ""
                    }`}
                    style={{ minWidth: "280px" }}
                  >
                    {/* About us (submenu) */}
                    <li className="dropdown-submenu position-relative pb-2">
                      <a className="dropdown-item shope" href="#">
                        About us
                      </a>
                    </li>

                    {/* Contact (submenu) */}
                    <li className="dropdown-submenu position-relative pb-2">
                      <a className="dropdown-item shope" href="#">
                        Brands <i className="bi bi-chevron-right float-end"></i>
                      </a>
                      <ul className="dropdown-menu position-absolute top-0 start-100 border-0 p-3">
                        <li>
                          <a className="dropdown-item shope " href="#">
                            Brand{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item shope " href="#">
                            Brand V2
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="dropdown-submenu position-relative pb-2">
                      <a className="dropdown-item shope" href="#">
                        Contact{" "}
                        <i className="bi bi-chevron-right float-end"></i>
                      </a>
                      <ul className="dropdown-menu position-absolute top-0 start-100 border-0 p-3">
                        <li>
                          <a className="dropdown-item shope " href="#">
                            Contact 1{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item shope " href="#">
                            Contact 2
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="dropdown-submenu position-relative pb-2">
                      <a className="dropdown-item shope" href="#">
                        FAQ <i className="bi bi-chevron-right float-end"></i>
                      </a>
                      <ul className="dropdown-menu position-absolute top-0 start-100 border-0 p-3">
                        <li>
                          <a className="dropdown-item shope " href="#">
                            FAQ 1{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item shope " href="#">
                            FAQ 2
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="dropdown-submenu position-relative pb-2">
                      <a className="dropdown-item shope" href="#">
                        Store <i className="bi bi-chevron-right float-end"></i>
                      </a>
                      <ul className="dropdown-menu position-absolute top-0 start-100 border-0 p-3">
                        <li>
                          <a className="dropdown-item shope " href="#">
                            Our Stroe{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item shope " href="#">
                            Stroe locator
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* Normal Items */}

                    <li className="position-relative">
                      <span
                        className="badge position-absolute top-0 end-0 translate-middle-y"
                        style={{ backgroundColor: "#31A56D" }}
                      >
                        NEW
                      </span>
                      <a className="dropdown-item shope pb-2" href="#">
                        Timeline
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item shope pb-2" href="#">
                        View cart
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item shope pb-2" href="#">
                        Check out
                      </a>
                    </li>

                    <li className="dropdown-submenu position-relative pb-2">
                      <a className="dropdown-item shope" href="#">
                        Payment{" "}
                        <i className="bi bi-chevron-right float-end"></i>
                      </a>
                      <ul className="dropdown-menu position-absolute top-0 start-100 border-0 p-3">
                        <li>
                          <a className="dropdown-item shope " href="#">
                            Payment Conformation{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item shope " href="#">
                            Payment Failure
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="dropdown-submenu position-relative pb-2">
                      <a className="dropdown-item shope" href="#">
                        My Account{" "}
                        <i className="bi bi-chevron-right float-end"></i>
                      </a>
                      <ul className="dropdown-menu position-absolute top-0 start-100 border-0 p-3">
                        <li>
                          <a className="dropdown-item shope " href="#">
                            My account{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item shope " href="#">
                            {" "}
                            My order
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item shope " href="#">
                            MY order details
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item shope " href="#">
                            My address
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item shope " href="#">
                            My Account details
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item shope " href="#">
                            My Wishlist
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a className="dropdown-item shope pb-2" href="#">
                        invoice
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item shope pb-2" href="#">
                        404
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item shope pb-2" href="#">
                        icons
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Blod dropdwoun */}

                <li
                  className="nav-item dropdown"
                  onMouseEnter={() => setShowBlogs(true)}
                  onMouseLeave={() => setShowBlogs(false)}
                >
                  <a className="nav-link text-dark hover">
                    Blog <i className="bi bi-chevron-down Small"></i>
                  </a>

                  <ul
                    className={`dropdown-menu shadow p-4 border-0 mt-0 rounded-0 ${
                      showBlogs ? "d-block" : ""
                    }`}
                    style={{ minWidth: "280px" }}
                  >
                    {/* About us (submenu) */}

                    <li>
                      <a className="dropdown-item shope pb-2" href="#">
                        Grid layout
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item shope pb-2" href="#">
                        Left sidebar
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item shope pb-2" href="#">
                        Right sidebar
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item shope pb-2" href="#">
                        Blog list
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item shope pb-2" href="#">
                        Single Post
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Buy Now */}
                <li className="nav-item">
                  <a className="nav-link text-dark hover">Buy now</a>
                </li>
              </ul>
            </div>

            {/* Right Side Links */}
            <div className="col-md-3 text-end icons-wrapper">
              <div className="icon-box">
                <i className="bi bi-search fs-5"></i>
              </div>

              <div className="icon-box">
                <i className="bi bi-person fs-5"></i>
              </div>

              <div className="icon-box position-relative">
                <i className="bi bi-heart fs-5"></i>
                <span className="badge-count">0</span>
              </div>

              <div className="icon-box position-relative">
                <i className="bi bi-bag fs-5"></i>
                <span className="badge-count">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
