import { Row, Col, Container } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// import "../footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>Delivering top-notch services and products with passion and quality since 2025 .</p>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Contact</h5>
            <p>Email: <a href="mailto:contact@company.com" className="text-light">contact@company.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-light">+123 456 7890</a></p>
          </Col>

          <Col md={4} className="mb-3 text-center text-md-end">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="text-light me-3"><FaFacebook size={20} /></a>
              <a href="#" className="text-light me-3"><FaTwitter size={20} /></a>
              <a href="#" className="text-light me-3"><FaInstagram size={20} /></a>
              <a href="#" className="text-light"><FaLinkedin size={20} /></a>
            </div>
          </Col>
        </Row>

        <hr className="my-3 border-light" />

        <Row className="text-center">
          <Col>
            <p className="mb-1">
              &copy; {new Date().getFullYear()} Reactify. All rights reserved.
            </p>
            <p className="small">Powered by <strong>Mohamed Ennara</strong> | ITI Intern | Python Full Stack Developer</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
