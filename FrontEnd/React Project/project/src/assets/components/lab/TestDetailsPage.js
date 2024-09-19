import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const TestDetailsPage = () => {
  const { categoryName } = useParams();
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token'); 

    if (!token) {
      navigate('/login'); 
    }
  }, [navigate]);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/labTestdetails');
        console.log('API Response:', response.data);

        const filteredData = response.data.filter(
          (item) => item.category.toLowerCase() === categoryName.toLowerCase()
        );

        console.log('Filtered Data:', filteredData);

        setTests(filteredData);
      } catch (err) {
        console.error('Error fetching tests:', err);
        setError("Failed to load tests. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, [categoryName]);

  const addToCart = (test) => {
    // Retrieve the current cart from local storage or initialize it as an empty array
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Current Cart:', cart);
  
    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(item => item._id === test._id);
  
    if (existingItemIndex > -1) {
      // Item exists in local storage, update the quantity
      cart[existingItemIndex].quantity += 1;
    } else {
      // Item does not exist, add a new item
      cart.push({
        _id: test._id,
        name: test.name,
        price: test.price,
        quantity: 1, // Initialize quantity as 1
       
      });
    }
  
    // Update local storage with the modified cart
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Updated Cart:', cart);
    alert(`${test.name} has been added to your cart.`);
  };
  

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-danger">{error}</div>;

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center headerfonts">{categoryName}</h2>
      <Row>
        {tests.map((test, index) => (
          <Col md={4} className="mb-4 fcolor" key={test._id}>
            <Card>
              <Card.Body>
                <Card.Title className="parafonts">{test.name}</Card.Title>
                <Card.Text>
                  <strong>Manufacturer:</strong> {test.manufacturer}
                </Card.Text>
                <Card.Text>
                  <strong>Pack Size:</strong> {test.packSize}
                </Card.Text>
                <Card.Text>
                  <strong>Price:</strong> ${test.price} <br />
                  <small className="text-muted"><s>${test.originalPrice}</s> {test.discount}</small>
                </Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => addToCart(test)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TestDetailsPage;
