import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import allergyTests from '../Img/lab/categories/AllergyTest.jpg';
import bloodTests from '../Img/lab/categories/BloodTest.jpg';
import diabetesTests from '../Img/lab/categories/DiabetesTest.jpg';
import drugTests from '../Img/lab/categories/DrugTest.jpg';
import heartTests from '../Img/lab/categories/HeartTest.jpg';
import hormoneTests from '../Img/lab/categories/HormoneTest.jpg';
import immunologyTests from '../Img/lab/categories/ImmunologyTest.jpg';
import infectionDiseaseTests from '../Img/lab/categories/InfectionDiseaseTest.jpg';
import mineralDeficiencyTests from '../Img/lab/categories/MineralDeficiencyTest.jpg';
import thyroidTests from '../Img/lab/categories/ThyroidTest.jpg';
import kidneyTests from '../Img/lab/categories/BloodTest.jpg'; 

// Categories data
const categories = [
  { name: "Allergy Tests", image: allergyTests, category: "allergyTests" },
  { name: "Blood Tests", image: bloodTests, category: "bloodTests" },
  { name: "Diabetes Tests", image: diabetesTests, category: "diabetesTests" },
  { name: "Drug Tests", image: drugTests, category: "drugTests" },
  { name: "Heart Tests", image: heartTests, category: "heartTests" },
  { name: "Hormone Tests", image: hormoneTests, category: "hormoneTests" },
  { name: "Immunology Tests", image: immunologyTests, category: "immunologyTests" },
  { name: "Infection Disease Tests", image: infectionDiseaseTests, category: "infectionDiseaseTests" },
  { name: "Kidney Tests", image: kidneyTests, category: "kidneyTests" },
  { name: "Mineral Deficiency Tests", image: mineralDeficiencyTests, category: "mineralDeficiencyTests" },
  { name: "Thyroid Tests", image: thyroidTests, category: "thyroidTests" },
];

const LabCategoriesPage = () => {
  return (
    <Container className="mt-4">
      <Row>
        {categories.map((category, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Link to={`/labTestdetails/${category.category}`}>
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

export default LabCategoriesPage;
