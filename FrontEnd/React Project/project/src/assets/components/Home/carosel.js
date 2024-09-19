import React from "react";
import "../css/carosel.css"
import Image1 from '../Img/image1.jpg'
import Image2 from '../Img/image2.jpg'
import Image3 from '../Img/image3.jpg'

export default function carosel() {
  return (
    <>
      
        <div className="">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner carouselCss">
              <div className="carousel-item active">
                <img src={Image1} className="w-100" alt="..." />
  
                <div className="carousel-caption mt-auto mb-auto ms-auto me-auto para1">
  <div className="p-3 w-full mx-auto divp1">
    <h1 className="text-black text-2xl font-bold shadow-md">Precast Detailing Services</h1>
    <p className="d-none d-md-block homehearderp text-black shadow-md">
      Our Precast detailing services include Wall Panel Detailing, Slab Detailing, Beam Detailing, 
      Stair Detailing, Column Detailing, Architectural Precast Detailing, and Utility Precast Product Detailing.
    </p>
  </div>
</div>

              </div>
              <div className="carousel-item">
                <img src={Image2} className="w-100" alt="..." />
                <div className="carousel-caption mt-auto mb-auto ms-auto me-auto para1">
  <div className="p-3 w-full mx-auto divp1">
    <h1 className="text-black text-2xl font-bold shadow-md">Precast Detailing Services</h1>
    <p className="d-none d-md-block homehearderp text-black shadow-md">
      Our Precast detailing services include Wall Panel Detailing, Slab Detailing, Beam Detailing, 
      Stair Detailing, Column Detailing, Architectural Precast Detailing, and Utility Precast Product Detailing.
    </p>
  </div>
</div>
              </div>
              <div className="carousel-item">
                <img src={Image3} className="w-100" alt="..." />
                <div className="carousel-caption mt-auto mb-auto ms-auto me-auto para1">
  <div className="p-3 w-full mx-auto divp1">
    <h1 className="text-black text-2xl font-bold shadow-md">Precast Detailing Services</h1>
    <p className="d-none d-md-block homehearderp text-black shadow-md">
      Our Precast detailing services include Wall Panel Detailing, Slab Detailing, Beam Detailing, 
      Stair Detailing, Column Detailing, Architectural Precast Detailing, and Utility Precast Product Detailing.
    </p>
  </div>
</div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
    </>
  );
}
