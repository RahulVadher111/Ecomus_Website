import React,{ useState } from 'react'



const locations = [
  {
    id: 1,
    title: "Ecomus Paris",
    address: "93 Rue du Chevalier de la Barre, 961821 Paris, France",
    phone: "(+33) 936-1234",
    email: "Ecomus.paris@example.com",
    map: "https://www.google.com/maps?q=Paris&output=embed",
  },
  {
    id: 2,
    title: "Ecomus London",
    address: "Cromwell Rd, South Kensington, London SW1 6BD, UK",
    phone: "(+44) 20 4942 6789",
    email: "Ecomus.london@example.com",
    map: "https://www.google.com/maps?q=London&output=embed",
  },
  {
    id: 3,
    title: "Ecomus Madrid",
    address: "C. de Ferraz, 1, 150596 Madrid, Spain",
    phone: "(+48) 321-2468",
    email: "Ecomus.madrid@example.com",
    map: "https://www.google.com/maps?q=Madrid&output=embed",
  },
  {
    id: 4,
    title: "Ecomus Tokyo",
    address: "152-0035 Tokyo, Meguro City, Jiyugaoka, Japan",
    phone: "(623) 934-2400",
    email: "Ecomus.tokyo@example.com",
    map: "https://www.google.com/maps?q=Tokyo&output=embed",
  },
];

function Pages_Our_Store_locations() {
  const [active, setActive] = useState(locations[0]);
  return (
    <>
    
    <div
        className=" text-center p-5 gridyent"
        style={{ backgroundColor: "#fcffb2", fontSize: "42px" }}
      >
        <p className="mb-4 pt-4 pb-2 ">Our locations</p>
      </div>
    
    {/* sections */}
     <div className="mx-5 py-5">
  <div className="row g-4 align-items-stretch pt-5">

    {/* LEFT SIDE */}
    <div className="col-lg-4 d-flex flex-column">
      {locations.map((loc) => (
        <div
          key={loc.id}
          onClick={() => setActive(loc)}
          className={`p-4 mb-3 rounded location-card ${
            active.id === loc.id ? "active" : ""
          }`}
        >
          <div className="d-flex align-items-center gap-2 mb-3">
            {active.id === loc.id && (
              <i className="bi bi-geo-alt-fill fs-5"></i>
            )}
            <p className="mb-0 fs-4">{loc.title}</p>
          </div>

          <p className="mb-1" ><strong>Address</strong><br /><span style={{ fontSize: "14px" }}>{loc.address}</span></p>
          <p className="mb-1"><strong>Phone</strong><br /><span style={{ fontSize: "14px" }}>{loc.phone}</span></p>
          <p className="mb-0"><strong>Email</strong><br /><span style={{ fontSize: "14px" }}>{loc.email}</span></p>
        </div>
      ))}
    </div>

    {/* RIGHT SIDE MAP */}
    <div className="col-lg-8 d-flex">
      <div className="map-box w-100">
        <iframe
          src={active.map}
          className="w-100 h-100 border-0"
          loading="lazy"
        ></iframe>
      </div>
    </div>

  </div>
</div>

    
    
    </>
  )
}

export default Pages_Our_Store_locations
