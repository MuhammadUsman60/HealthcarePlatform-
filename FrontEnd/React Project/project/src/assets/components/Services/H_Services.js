import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../css/allcss.css';

const categories = [
  { name: "Home Nursing", image: 'https://plus.unsplash.com/premium_photo-1661573503198-8afdbcf3b200?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: "homeNursing" },
  { name: "Physiotherapy", image: 'https://plus.unsplash.com/premium_photo-1661779581951-eb3a2fe942bb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: "physiotherapy" },
  { name: "Blood Sample Collection", image: 'https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1616&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: "bloodSampleCollection",to:'/labTestdetails/bloodTests' },
  { name: "Medication Administration", image: 'https://images.unsplash.com/photo-1618093877862-3630a08f737f?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: "medicationAdministration" },
  { name: "Wound Care", image: 'https://images.unsplash.com/photo-1626178794106-474fa92d6524?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: "woundCare" },
];

const H_Services = () => {
  return (
    <Container className="mt-4">
      <Row>
        {categories.map((category, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Link to={category.to || `/LabTest`  }>
              <Card>
                <Card.Img variant="top" src={category.image} alt={category.name} />
                <Card.Body>
                  <Card.Title className="headerfonts">{category.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default H_Services;
