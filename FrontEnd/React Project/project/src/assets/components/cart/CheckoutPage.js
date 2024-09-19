import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/allcss.css';


export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    product: '',
    price: '',
  });

  const location = useLocation();
  const navigate = useNavigate();
  const cartData = location.state?.cartData || [];  
  const totalPrice = location.state?.totalPrice || 0; 

  useEffect(() => {
    console.log("Cart Data in CheckoutPage:", cartData);  
    
    if (cartData.length > 0) {
      const productDetails = cartData
        .map(item => `${item.productName || item.name + '  labTest'} (Qty: ${item.quantity})`)
        .join(', ');

      setFormData({
        ...formData,
        product: productDetails,
        price: totalPrice.toFixed(2)
      });
    }
  }, [cartData, totalPrice]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/orders', formData);
      localStorage.removeItem('cart'); 
      localStorage.removeItem('totalPrice'); 
      alert('Order placed successfully!');
      navigate('/');
    } catch (error) {
      console.error('There was an error placing the order:', error);
      alert('Failed to place order.');
    }
  };

  return (
    <div className="container mx-auto p-4 parafonts">
      <h2 className='headerfonts'>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label parafonts">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label parafonts">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label parafonts">Product</label>
          <input
            type="text"
            name="product"
            value={formData.product}
            className="form-control"
            readOnly
          />
        </div>
        <div className="mb-3">
          <label className="form-label parafonts">Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            className="form-control"
            readOnly
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Place Order
        </button>
      </form>
    </div>
  );
}
