import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Card2() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const API_URL = "http://localhost:8000/api/products";

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const convertToId = (id) => id.toLowerCase().replace(/\s/g, "_");

  const filteredData = data.filter((item) => item.categories === "Medicines");

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  return (
    <div className="row m-4" style={{ width: "98%" }}>
      <div className="d-flex justify-content-between container">
        <h2 className="card-text ms-auto me-auto" style={{ color: "#166aa6" }}>
          Medicines
        </h2>
        
      </div>
      {filteredData.map((item) => {
        const id = convertToId(item.productName);
        return (
          <div
            className="col-lg-4 col-md-6 col-sm-12 ms-3 mt-4"
            key={item.productId}
            style={{ width: "16rem" }}
          >
            <Link
              to={`/productDetails/${id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card" style={{ height: "100%" }}>
                <div
                  style={{ height: "70%" }}
                  className="d-flex justify-content-center"
                >
                  <img
                    src={item.productImage}
                    className="card-img-top"
                    alt={item.productName}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-text" style={{ color: "#166aa6" }}>
                    {item.productName}
                  </h5>
                  <p className="card-text" style={{ fontSize: "small" }}>
                    {item.productDetails}
                  </p>
                  <button className="btn btn-primary w-100">Add to cart</button>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
