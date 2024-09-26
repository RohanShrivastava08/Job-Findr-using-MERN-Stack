import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  Card,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./Login.css";
import LoginImage from "../assets/loginImage.jpg";
import WhyChooseUsImage from "../assets/why-choose-us-1.jpg";
import Testimonial1 from "../assets/testimonial1.jpg";
import Testimonial2 from "../assets/testimonial4.jpg";
import Testimonial3 from "../assets/testimonial3.jpg";
import Testimonial4 from "../assets/testimonial2.jpg";
import Testimonial5 from "../assets/testimonial6.jpg";
import Testimonial6 from "../assets/testimonial5.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem("token", token);

      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-page">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* Login Heading and Description Section */}
      <Container className="login-header-container my-5 text-center">
        <h2 className="login-heading">Login</h2>
        <p className="login-description">
          Welcome back to Job Findr! Login to access your account and continue
          your job search journey with us.
        </p>
      </Container>

      {/* Login Form Section */}
      <Container className="my-5 text-center">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="register-form-container">
              <h2 className="register-heading">Login Form</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <br />
                <Button
                  variant="primary"
                  type="submit"
                  className="register-button"
                >
                  Login
                </Button>
              </Form>
              <br />
              <p className="login-link">
                Don't have an account? <Link to="/register">Register here</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Why You Should Register Section */}
      <Container className="my-5 text-center">
        <Row className="justify-content-center"></Row>
        <h2>Why to Login?</h2>
        <p>
          Registering with Job Findr is your first step towards a fulfilling
          career. Our platform is meticulously designed to connect you with
          opportunities that align seamlessly with your skills, experience, and
          aspirations. By creating a profile, you gain access to a vast database
          of job listings from diverse industries and companies of all sizes.
          Imagine having countless job openings tailored to your preferences
          right at your fingertips.
        </p>
        <p>
          Beyond job listings, Job Findr fosters professional growth. Connect
          with like-minded individuals, industry experts, and potential
          employers through our networking features. Expand your knowledge base
          with career advice articles, industry trends, and webinars. Stay ahead
          of the competition by upskilling and acquiring new certifications. Job
          Findr is your comprehensive career development platform.
        </p>
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={6}>
            <img
              src={LoginImage}
              alt="Why Register"
              className="why-choose-us-image"
            />
          </Col>
        </Row>
        <p>
          We understand the importance of privacy and data security. Your
          information is protected with robust encryption and privacy measures.
          Rest assured that your personal details are safe with us. Job Findr is
          committed to providing a secure and trustworthy environment for your
          job search.
        </p>
        <p>
          Unlock the power of data-driven insights with Job Findr's analytics.
          Track your job search performance, identify trends, and measure your
          progress. Gain valuable feedback on your resume and cover letter to
          improve your chances of landing interviews. Make informed career
          decisions with data-backed recommendations.
        </p>
        <p>
          Job Findr is more than just a job board; it's your career partner. Our
          dedicated support team is available to assist you with any questions
          or concerns. We are committed to providing exceptional customer
          service and ensuring your job search experience is smooth and
          successful. Let us guide you towards your dream career.
        </p>
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={6}>
            <img
              src={WhyChooseUsImage}
              alt="Why Choose Us"
              className="why-choose-us-image"
            />
          </Col>
        </Row>
        <p>
          Take control of your career journey with Job Findr.Your dream job is
          just a login away.
        </p>
        <p>
          Your career success starts here. Login to Job Findr and unlock a world
          of opportunities. Discover your perfect match, build your professional
          network, and access valuable career resources. Take control of your
          job search with personalized recommendations and expert guidance. Let
          Job Findr be your trusted partner on the path to your dream career.
        </p>
      </Container>

      {/* Hiring Companies Table */}
      <Container className="my-5">
        <Row>
          <Col>
            <h2 className="text-center">Hiring Companies</h2>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Vacancies</th>
                  <th>Openings</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Infosys</td>
                  <td>30</td>
                  <td>15</td>
                  <td>₹10,00,000</td>
                </tr>
                <tr>
                  <td>Tata Consultancy Services</td>
                  <td>25</td>
                  <td>12</td>
                  <td>₹9,50,000</td>
                </tr>
                <tr>
                  <td>Wipro</td>
                  <td>20</td>
                  <td>10</td>
                  <td>₹8,00,000</td>
                </tr>
                <tr>
                  <td>HCL Technologies</td>
                  <td>35</td>
                  <td>18</td>
                  <td>₹11,00,000</td>
                </tr>
                <tr>
                  <td>Tech Mahindra</td>
                  <td>22</td>
                  <td>9</td>
                  <td>₹8,50,000</td>
                </tr>
                <tr>
                  <td>Capgemini</td>
                  <td>28</td>
                  <td>14</td>
                  <td>₹9,00,000</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      {/* Testimonials Section */}
      <Container className="my-5">
        <Row>
          <Col>
            <h2 className="text-center">What People Are Saying</h2>
            <Row className="justify-content-center">
              <Col md={4} lg={2} className="mb-4 text-center">
                <Card className="testimonial-card">
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={Testimonial1}
                      className="rounded-circle mb-3"
                    />
                    <Card.Title>Ravi Kumar</Card.Title>
                    <Card.Text>
                      "A fantastic platform for job seekers. Found my dream job
                      in no time!"
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} lg={2} className="mb-4 text-center">
                <Card className="testimonial-card">
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={Testimonial2}
                      className="rounded-circle mb-3"
                    />
                    <Card.Title>Priya Sharma</Card.Title>
                    <Card.Text>
                      "Easy to use and very effective. Great support team!"
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} lg={2} className="mb-4 text-center">
                <Card className="testimonial-card">
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={Testimonial3}
                      className="rounded-circle mb-3"
                    />
                    <Card.Title>Ajay Patel</Card.Title>
                    <Card.Text>
                      "The best job portal with excellent job matching
                      features."
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} lg={2} className="mb-4 text-center">
                <Card className="testimonial-card">
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={Testimonial4}
                      className="rounded-circle mb-3"
                    />
                    <Card.Title>Sneha Desai</Card.Title>
                    <Card.Text>
                      "Job Findr made my job search smooth and successful."
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} lg={2} className="mb-4 text-center">
                <Card className="testimonial-card">
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={Testimonial5}
                      className="rounded-circle mb-3"
                    />
                    <Card.Title>Vikram Singh</Card.Title>
                    <Card.Text>
                      "Amazing platform with user-friendly interface. Highly
                      recommended!"
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} lg={2} className="mb-4 text-center">
                <Card className="testimonial-card">
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={Testimonial6}
                      className="rounded-circle mb-3"
                    />
                    <Card.Title>Neha Gupta</Card.Title>
                    <Card.Text>
                      "A comprehensive tool for job seekers. Found a great job
                      in less than a month."
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <footer className="footer bg-dark text-white text-center py-4">
        <p>&copy; 2024 Job Findr. All rights reserved.</p>
        <p>
          Follow us on{" "}
          <a href="https://facebook.com" className="text-white" target="_blank" rel="noopener noreferrer">Facebook</a>{" "}
          <a href="https://twitter.com" className="text-white" target="_blank" rel="noopener noreferrer">Twitter</a>{" "}
          <a href="https://linkedin.com" className="text-white" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </footer>

    </div>
  );
};

export default Login;
