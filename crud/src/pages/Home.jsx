import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaPlus, FaList, FaEdit, FaTrash, FaArrowRight } from 'react-icons/fa';
import '../css/Home.css'; 
import { Link } from 'react-router-dom';
export function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <Container>
          <div className="hero-content text-center">
            <h1 className="hero-title">Manage Your Data with Elegance</h1>
            <p className="hero-subtitle">Experience seamless CRUD operations with our sophisticated interface</p>

            <Button variant="light" size="lg" className="cta-button">
            <Link className='text text-light text-decoration-none' to="/products"> Get Started
            </Link>  <FaArrowRight className="ms-2" />
            </Button>
          </div>
        </Container>
      </section>

      <section className="features-section">
        <Container>
          <h2 className="section-title text-center mb-5">Core Features</h2>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="feature-card">
                <Card.Body className="text-center">
                  <div className="icon-wrapper">
                    <FaPlus className="feature-icon" />
                  </div>
                  <Card.Title>Create</Card.Title>
                  <Card.Text>
                    Effortlessly add new records with our intuitive creation interface
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="feature-card">
                <Card.Body className="text-center">
                  <div className="icon-wrapper">
                    <FaList className="feature-icon" />
                  </div>
                  <Card.Title>Read</Card.Title>
                  <Card.Text>
                    Beautifully display your data with modern visualization
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="feature-card">
                <Card.Body className="text-center">
                  <div className="icon-wrapper">
                    <FaEdit className="feature-icon" />
                  </div>
                  <Card.Title>Update</Card.Title>
                  <Card.Text>
                    Smooth editing experience with instant preview capabilities
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="feature-card">
                <Card.Body className="text-center">
                  <div className="icon-wrapper">
                    <FaTrash className="feature-icon" />
                  </div>
                  <Card.Title>Delete</Card.Title>
                  <Card.Text>
                    Secure deletion process with confirmation safeguards
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta-section">
        <Container className="text-center">
          <h2 className="cta-title">Ready to Transform Your Data Management?</h2>
          <Button variant="light" size="lg" className="cta-button">
           <Link className='text text-light text-decoration-none' to="/products">Start Now</Link>
            <FaArrowRight className="ms-2" />
          </Button>
        </Container>
      </section>
    </div>
  );
}