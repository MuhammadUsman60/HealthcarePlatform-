import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function CardForAll() {
  const { categories } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const API_URL = "http://localhost:8000/api/products";
  const CART_API_URL = "http://localhost:8000/api/cart";

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

  const filteredData = data.filter(
    (item) => item.categories.toLowerCase() === categories.toLowerCase()
  );

  const addToCart = async (item) => {
    try {
      await axios.post(CART_API_URL, {
        id: item.productId,
        name: item.productName,
        price: item.productPrice,
        quantity: 1,
        image: item.productImage,
      });
      alert(`${item.productName} added to cart`);
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  if (filteredData.length === 0) {
    return <div>No products found in {categories}</div>;
  }

  return (
    <div className="row m-4" style={{ width: '98%' }}>
      <h2 className="card-text d-flex justify-content-center mt-4" style={{ color: '#166aa6' }}>
        {categories}
      </h2>
      {filteredData.map((item) => {
        let id = convertToId(item.productName);
        return (
          <div className="col-lg-4 col-md-6 col-sm-12 ms-3 mt-4" key={item.productId} style={{ width: '16rem' }}>
            <Link to={`/productDetails/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card" style={{ height: '100%' }}>
                <div style={{ height: "70%" }} className="d-flex justify-content-center">
                  <img src={item.productImage} className="card-img-top" alt={item.productName} />
                </div>
                <div className="card-body">
                  <h6 className="card-text" style={{ color: '#166aa6' }}>{item.productName}</h6>
                  <p className="card-text" style={{ fontSize: "small" }}>{item.productDetails}</p>
                  <button
                    className="btn btn-primary w-100"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(item);
                      
                    }} 
                    to={`/productDetails/${id}`}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
