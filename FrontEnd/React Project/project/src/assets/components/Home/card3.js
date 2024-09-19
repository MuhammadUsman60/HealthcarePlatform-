import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Card3() {
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

  function convertToId(id) {
    return id.toLowerCase().replace(/\s/g, "_");
  }

  const filteredData = data.filter((item) => item.categories === "Daily Well-being");

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  return (
    <div className='row m-4' style={{ width: '98%' }}>
      <h2 className="card-text d-flex justify-content-center mt-4" style={{ color: '#166aa6' }}>Daily Well-being</h2>
      {filteredData.map((item) => {
        let id = convertToId(item.productName);
        return (
          <div className="col-lg-4 col-md-6 col-sm-12 ms-3 mt-4" key={item.productId} style={{ width: '16rem' }}>
            <Link to={`/productDetails/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card" style={{ height: '100%' }}>
                <div style={{ height: "70%" }}>
                  <img src={item.productImage} className="card-img-top" alt={item.productName} />
                </div>
                <div className="card-body">
                  <h6 className="card-text" style={{ color: '#166aa6' }}>{item.productName}</h6>
                  <p className="card-text">{item.productDetails}</p>
                  <button className='btn btn-primary w-100'>Add to cart</button>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
