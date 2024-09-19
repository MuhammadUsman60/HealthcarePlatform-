import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductDetailsCard({ userId, productId, productName, productImage, price, originalPrice }) {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  // Ensure price and originalPrice have valid fallback values
  const validPrice = price || 0;
  const effectiveOriginalPrice = originalPrice !== undefined ? originalPrice : validPrice;

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10) || 1);
  };

  const calculateTotal = () => {
    return quantity * validPrice;
  };

  const handleAddToCart = () => {
    const productData = {
      userId,
      productId,
      productName,
      productImage,
      price: validPrice,
      originalPrice: effectiveOriginalPrice,
      quantity,
    };

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    existingCart.push(productData);
    localStorage.setItem('cart', JSON.stringify(existingCart));

    setAddedToCart(true);
    alert(`Product added to cart! Total: Rs. ${calculateTotal().toFixed(2)}`);
  };

  return (
    <div className="card mb-2 p-3 rounded rounded-2 ms-auto">
      <button className="btn btn-secondary">UNIT(S)</button>
      <p>
        Rs: {validPrice.toFixed(2)} <del>{effectiveOriginalPrice.toFixed(2)}</del>
      </p>
      <div>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="form-control mb-2"
        />
        <span>Total: Rs. {calculateTotal().toFixed(2)}</span>
      </div>
      <button className="btn btn-primary mt-auto" onClick={handleAddToCart}>
        Add to cart
      </button>
      {addedToCart && (
        <Link className="btn btn-danger mt-2 w-100" to="/CartPage">
          View Cart
        </Link>
      )}
    </div>
  );
}

export default ProductDetailsCard;
