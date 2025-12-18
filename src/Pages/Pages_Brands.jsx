import React,{ useState } from 'react'





const brandsData = {
  "123": ["7 Chanel"],
  A: ["Asos", "Armani", "Asics"],
  B: ["Burberry", "Bogner"],
  C: ["Christian Dior", "Chopard", "Cartier", "Calvin Klein", "Cole Haan"],
  E: ["Escada Beaute"],
  F: ["Furla", "Fendi", "Foot Locker"],
  H: ["Hugo Boss", "Hermes"],
  I: ["IWC Schaffhausen"],
  J: ["Jaeger LeCoultre","Just Cavalli"],
  L: ["Longines"],
  N: ["Nine West"],
  O: ["Old Navy","Oakley"],
  P: ["Parda","Patek philippe","Patagonia"],
  R: ["Ray Ban","Roberto Cavalli"],
  S: ["Steve Madden"],
  T: ["Topshop","The North Face","Ted Bakerx"],
  V: ["Valentino"],
  Z: ["Zara"],
};

const alphabets = [
  "Show all",
  "123",
  ...Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  ),
];

function Pages_Brands() {
    const [active, setActive] = useState("Show all");

  const availableKeys = Object.keys(brandsData);

  const filteredKeys =
    active === "Show all"
      ? availableKeys
      : availableKeys.includes(active)
      ? [active]
      : [];

      return (
    
   <>
   <div className=' text-center p-5 gridyent' style={{backgroundColor:"#fcffb2",fontSize:'42px'}}>
      <p className="mb-4 pt-4 pb-2 ">Brands </p>
        </div>
    <div className="mx-5 my-5 ">
        

      {/* Alphabet Buttons */}
      <div className="container d-flex flex-wrap justify-content-center gap-2  pt-3 p-5">
        {alphabets.map((item) => {
          const isAvailable =
            item === "Show all" || availableKeys.includes(item);

          return (
        
            <button
              key={item}
              className={` btn btn-sm p-3 pb-2 pt-2 border ${
                active === item
                  ? "btn-dark"
                  : isAvailable
                  ? "btn-outline-dark white fw-bold text-dark"
                  : "btn-outline-secondary disabled"
              }`}
              onClick={() => isAvailable && setActive(item)}
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* Brand Cards */}
      <div className="row g-4 ">
        {filteredKeys.map((key) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={key}>
            <div className="brand-card p-4 h-100">
              <h1 className="brand-letter">{key}</h1>
              <ul className="list-unstyled mt-3">
                {brandsData[key].map((brand, i) => (
                  <li key={i} className="brand-item">
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
   
   
   </>
  )
}

export default Pages_Brands
