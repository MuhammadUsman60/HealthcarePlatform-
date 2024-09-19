import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../css/allcss.css'; 

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log("Cart from localStorage:", cart);

    setCartItems(cart);
    calculateTotalPrice(cart);
  };

  const calculateTotalPrice = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

 
  const handleRemove = (productId, productName) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.productId !== productId || item.productName !== productName
    );
  
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = existingCart.filter(
      (item) => item.productId !== productId || item.productName !== productName
    );
    
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  
    setCartItems(updatedCartItems);
    calculateTotalPrice(updatedCartItems);
  };
  

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('token');

    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <Container className="mt-4">
      <h1 className="mb-4 text-center headerfonts">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <Card className="mb-4 p-3" key={item.productId}>
              <Row className="align-items-center">
                <Col xs={4} md={2}>
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="img-fluid"
                  />
                </Col>
                <Col xs={8} md={6} className='parafonts'>
                  <h5>{item.productName ||item.name }</h5>
                  <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
                  <p><strong>Quantity:</strong> {item.quantity}</p>
                  <p><strong>Total:</strong> ${(item.price * item.quantity).toFixed(2)}</p>
                </Col>
                <Col md={4} className="text-end">
                  <Button
                    variant="danger"
                    onClick={() => handleRemove(item.productId, item.productName)}

                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </Card>
          ))}
          <h2 className="text-center mt-4 parafonts">Total Price: ${totalPrice.toFixed(2)}</h2>
          <div className="text-center mt-4">
            <Link
              className="btn btn-success"
              to="/CheckoutPage"
              state={{ cartData: cartItems, totalPrice }}
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      ) : (
        <p className="text-center">Your cart is empty.</p>
      )}
    </Container>
  );
};

export default CartPage;
