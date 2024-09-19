import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductDetailsCard from './components/cart/ProductDetailsCard'; 

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const convertToId = (id) => {
    return id.toLowerCase().replace(/\s/g, "_");
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(response => {
        const data = response.data;
        const foundProduct = data.find(item => convertToId(item.productName) === id);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Product not found');
        }
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching product data');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='d-flex justify-content-center pt-5 mt-5 pb-5 mb-5 row' style={{width:"100%"}}>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-auto mb-auto'>
        <img src={product.productImage} alt={product.productName} style={{ width: '100%' }} />
      </div>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-auto mb-auto'>
        <h1 style={{color: 'rgb(22, 106, 166)'}}>{product.productName}</h1>
        <p>{product.productDetails}</p>
        <div className='border border-1 border-primary-subtle rounded-5 bg-black'></div>
        <p>{product.productDescription}</p>
        <p>Price: Rs. {product.price}</p>
      </div>
      <div className='col-lg-3 col-md-6 col-sm-12 ms-5 mt-auto mb-auto'>
        <ProductDetailsCard 
          productId={product.productId}
          productName={product.productName}
          productImage={product.productImage}
          price={product.price} 
          originalPrice={product.originalPrice} 
        />
      </div>
    </div>
  );
}
