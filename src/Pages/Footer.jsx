// import React from 'react'
import React, { useState } from "react";

import logo from "../Images/Navbar_imgs/logo.svg";

import Footer_1 from "../Images/Navbar_imgs/Home_imgs/Footer_1.png";
import Footer_2 from "../Images/Navbar_imgs/Home_imgs/Footer_2.png";
import Footer_3 from "../Images/Navbar_imgs/Home_imgs/Footer_3.png";
import Footer_4 from "../Images/Navbar_imgs/Home_imgs/Footer_4.png";
import Footer_5 from "../Images/Navbar_imgs/Home_imgs/Footer_5.png";

function Footer() {
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedFlag, setSelectedFlag] = useState(
    "https://flagcdn.com/w20/us.png"
  );

  const [selectedLang, setSelectedLang] = useState("English");

  return (
    <>
      <footer className="footer-section py-3 ">
        <div className="container-fluid p-5 pb-0">
          <div className="row gy-5 border-top border-2">
            {/* ---------------- LEFT COLUMN ---------------- */}
            <div className="col-lg-3 pb-3">
              <img
                src={logo}
                alt="Logo"
                className="footer-logo mb-4"
                style={{ width: "130px" }}
              />

              <p className="footer-text pb-1">
                Address: 1234 Fashion Street, Suite 567,
              </p>
              <p className="footer-text pb-1">New York, NY 10001</p>

              <p className="footer-text text-semibold pb-1">
                Email:{" "}
                <a href="#" className="footer-link text-muted">
                  info@fashionshop.com
                </a>
              </p>

              <p className="footer-text text-muted">
                Phone: <strong>(212) 555-1234</strong>
              </p>

              <p
                className="footer-direction mt-3 "
                style={{ fontSize: "15px" }}
              >
                Get direction <i className="bi bi-arrow-up-right"></i>
              </p>

              {/* SOCIAL ICONS */}
              <div class="d-flex gap-2 mt-4">
                <a
                  href="#"
                  className="text-dark border rounded-circle p-1  facebook"
                >
                  <i class="bi bi-facebook p-1"></i>
                </a>
                <a
                  href="#"
                  className="text-dark border rounded-circle p-1   twitter"
                >
                  <i class="bi bi-twitter-x p-1"></i>
                </a>
                <a
                  href="#"
                  className="text-dark border rounded-circle p-1   instagram"
                >
                  <i class="bi bi-instagram p-1"></i>
                </a>
                <a
                  href="#"
                  className="text-dark border rounded-circle p-1   tiktok"
                >
                  <i class="bi bi-tiktok p-1"></i>
                </a>
                <a
                  href="#"
                  className="text-dark border rounded-circle p-1   pinterest"
                >
                  <i class="bi bi-pinterest p-1"></i>
                </a>
              </div>
            </div>

            {/* ---------------- HELP COLUMN ---------------- */}
            <div className="col-lg-3">
              <h5 className="footer-heading pb-2">Help</h5>
              <ul className="footer-list">
                <li>Privacy Policy</li>
                <li>Returns + Exchanges</li>
                <li>Shipping</li>
                <li>Terms & Conditions</li>
                <li>FAQ’s</li>
                <li>Compare</li>
                <li>My Wishlist</li>
              </ul>
            </div>

            {/* ---------------- ABOUT COLUMN ---------------- */}
            <div className="col-lg-3">
              <h5 className="footer-heading pb-2">About us</h5>
              <ul className="footer-list">
                <li>Our Story</li>
                <li>Visit Our Store</li>
                <li>Contact Us</li>
                <li>Account</li>
              </ul>
            </div>

            {/* ---------------- SUBSCRIBE SECTION ---------------- */}
            <div className="col-lg-3">
              <h5 className="footer-heading pb-2">Sign Up for Email</h5>
              <p className="footer-text-small ">
                Sign up to get first dibs on new arrivals, sales,
              </p>
              <p className="footer-text-small pb-3">
                {" "}
                exclusive content, events and more!
              </p>

              <div className="border p-2 pt-2">
                <div className="input-group d-flex ">
                  <input
                    type="text"
                    className="form-control border-dark-subtle border-0"
                    placeholder="Enter your email...."
                    style={{ borderRight: "0" }}
                  />
                  <button class="btn btn-dark d-flex align-items-center">
                    Subscribe <i class="bi bi-arrow-up-right ms-2"></i>
                  </button>
                </div>
              </div>

              {/* FLAG + LANGUAGE */}
              <div className="d-flex align-items-center pt-5">
                {/* ---------- Currency Dropdown ---------- */}
                <div className="custom-dropdown">
                  <button
                    className="dropdown-btn"
                    onClick={() => setCurrencyOpen(!currencyOpen)}
                  >
                    <img src={selectedFlag} width="18" height="12" />
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

          {/* ---------------- COPYRIGHT ---------------- */}
          <hr className="footer-line " />

          <div className="d-flex justify-content-between align-items-center flex-wrap pt-3 pb-1">
            <p className="footer-text m-0">
              © 2025 Ecomus Store. All Rights Reserved
            </p>

            <div className="d-flex gap-3">
              <img src={Footer_1} className="footer imgs" />
              <img src={Footer_2} className="footer imgs" />
              <img src={Footer_3} className="footer imgs" />
              <img src={Footer_4} className="footer imgs" />
              <img src={Footer_5} className="footer imgs" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
