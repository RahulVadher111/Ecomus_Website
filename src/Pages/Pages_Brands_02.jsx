import React,{ useState } from 'react'

// imgs

import Brand_01 from "../Images/Brands_imgs/Brand_01.png"
import Brand_02 from "../Images/Brands_imgs/Brand_02.png"
import Brand_03 from "../Images/Brands_imgs/Brand_03.png"
import Brand_04 from "../Images/Brands_imgs/Brand_04.png"
import Brand_05 from "../Images/Brands_imgs/Brand_05.png"
import Brand_06 from "../Images/Brands_imgs/Brand_06.png"
import Brand_07 from "../Images/Brands_imgs/Brand_07.png"
import Brand_08 from "../Images/Brands_imgs/Brand_08.png"
import Brand_09 from "../Images/Brands_imgs/Brand_09.png"
import Brand_10 from "../Images/Brands_imgs/Brand_10.png"
import Brand_11 from "../Images/Brands_imgs/Brand_11.png"
import Brand_12 from "../Images/Brands_imgs/Brand_12.png"
import Brand_13 from "../Images/Brands_imgs/Brand_13.png"
import Brand_14 from "../Images/Brands_imgs/Brand_14.png"
import Brand_15 from "../Images/Brands_imgs/Brand_15.png"
import Brand_16 from "../Images/Brands_imgs/Brand_16.png"
import Brand_17 from "../Images/Brands_imgs/Brand_17.png"
import Brand_18 from "../Images/Brands_imgs/Brand_18.png"
import Brand_19 from "../Images/Brands_imgs/Brand_19.png"
import Brand_20 from "../Images/Brands_imgs/Brand_20.png"
import Brand_21 from "../Images/Brands_imgs/Brand_21.png"
import Brand_22 from "../Images/Brands_imgs/Brand_22.png"
import Brand_23 from "../Images/Brands_imgs/Brand_23.png"
import Brand_24 from "../Images/Brands_imgs/Brand_24.png"
import Brand_25 from "../Images/Brands_imgs/Brand_25.png"
import Brand_26 from "../Images/Brands_imgs/Brand_26.png"
import Brand_27 from "../Images/Brands_imgs/Brand_27.png"
import Brand_28 from "../Images/Brands_imgs/Brand_28.png"
import Brand_29 from "../Images/Brands_imgs/Brand_29.png"
import Brand_30 from "../Images/Brands_imgs/Brand_30.png"
import Brand_31 from "../Images/Brands_imgs/Brand_31.png"
import Brand_32 from "../Images/Brands_imgs/Brand_32.png"
import Brand_33 from "../Images/Brands_imgs/Brand_33.png"
import Brand_34 from "../Images/Brands_imgs/Brand_34.png"





const brandsData = {
  "123": [
    {  logo: Brand_01,name: "7 Chanel" },
  ],
  A: [
    {  logo: Brand_02,name: "Asos", },
    {  logo: Brand_03,name: "Armani", },
    {  logo: Brand_04,name: "Asics", },
  ],
  B: [
    {  logo: Brand_05,name: "Burberry", },
    { logo: Brand_06,name: "Bogner",  },
  ],
  C: [
    {  logo: Brand_07, name: "Christian Dior", },
    {  logo: Brand_08, name: "Chopard", },
    {  logo: Brand_09, name: "Catier", },
    {  logo: Brand_10, name: "Calvin Klein", },
    
  ],

  E: [
    {  logo: Brand_11,name: "Escada Beaute", },
  ],

  F: [
    {  logo: Brand_12, name: "Furla", },
    {  logo: Brand_13, name: "Fendi", },
    {  logo: Brand_14, name: "Foot Locker", },
  ],

  H: [
    {  logo: Brand_15, name: "Hugo Boss", },
    {  logo: Brand_16, name: "Hermes", },
    
    
  ],
  I: [
    {  logo: Brand_17, name: "Iwc Schaffhausen", },
  ],

  J: [
    {  logo: Brand_18, name: "Jaeger Le Coultre", },
    {  logo: Brand_19, name: "Just Cavalli", },
  ],
  L: [
    {  logo: Brand_20, name: "Longines", },
  ],
  
  N: [
    {  logo: Brand_21, name: "Nice West", },
  ],
  
  O: [
    {  logo: Brand_22, name: "Old Navy", },
    {  logo: Brand_23, name: "Oakley", },
  ],
  
  P: [
    {  logo: Brand_24, name: "Parda", },
    {  logo: Brand_25, name: "Patek philippe", },
    {  logo: Brand_26, name: "Patagonia", },
  ],
  
  R: [
    {  logo: Brand_27, name: "Ray Ban", },
    {  logo: Brand_28, name: "Roberto Cavalli", },
  ],
  
  S: [
    {  logo: Brand_29, name: "Steve Madden", },
  ],

   T: [
    {  logo: Brand_30, name: "Topshop"},
    {  logo: Brand_31, name: "The North Face", },
    {  logo: Brand_32, name: "Ted Baker", },
  ],

  V: [
    {  logo: Brand_33, name: "Valentino", },
  ],

   Z: [
    {  logo: Brand_34, name: "Zara", },
  ],

};

const alphabets = [
  "Show all",
  "123",
  ...Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  ),
];

function Pages_Brands_02() {
    const [active, setActive] = useState("Show all");

  const keys =
    active === "Show all"
      ? Object.keys(brandsData)
      : [active];


  return (
   <>
   <div className=' text-center p-5 gridyent' style={{backgroundColor:"#fcffb2",fontSize:'42px'}}>
      <p className="mb-4 pt-4 pb-2 ">Brands v2</p>
        </div>
    <div className="mx-5 my-5">

      {/* Alphabet Filter */}
      <div className="container d-flex flex-wrap justify-content-center gap-2  pt-3 p-5">
        {alphabets.map((item) => {
          const isAvailable =
            item === "Show all" ||
            brandsData[item];

          return (
            <button
              key={item}
              className={`btn btn-sm p-3 pb-2 pt-2 ${
                active === item
                  ? "btn-dark"
                  : isAvailable
                  ? "btn-outline-secondary white fw-bold text-dark"
                  : "btn-outline-secondary disabled"
              }`}
              onClick={() =>
                isAvailable && setActive(item)
              }
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* Brand Rows */}
      {keys.map((key) => (
        <div
          key={key + active}
          className="row align-items-center brand-row py-4 mx-5 slide-left"
        >

          {/* Left Alphabet */}
          <div className="col-md-1 text-center border-end p-3">
            <h2 className="brand-alpha">{key}</h2>
          </div>

          {/* Divider */}
          {/* <div className="col-md-1 d-none d-md-block">
            <div className="brand-divider"></div>
          </div> */}

          {/* Logos */}
          <div className="col-md-10">
            <div className="row">
              {brandsData[key].map((item, i) => (
                <div
                  key={i}
                  className="col-lg-3 col-md-4 col-12 text-center "
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="brand-logo w-100 "
                  />
                  <p className="brand-name">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
   
   </>
  )
}

export default Pages_Brands_02
