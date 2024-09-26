import React from "react";
import { Line } from "react-chartjs-2";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Register.css";
import { toast, ToastContainer } from 'react-toastify'; 
import WhyChooseUsImage from "../assets/why-choose-us.jpg";
import RegisterImage from "../assets/RegisterImage.jpg";
import Company1 from "../assets/company1.jpg";
import Company2 from "../assets/company2.jpg";
import Company3 from "../assets/company3.jpg";
import Company4 from "../assets/company4.jpg";
import Testimonial1 from "../assets/testimonial1.jpg";
import Testimonial2 from "../assets/testimonial2.jpg";
import Testimonial3 from "../assets/testimonial3.jpg";
import Testimonial4 from "../assets/testimonial4.jpg";
import Testimonial5 from "../assets/testimonial5.jpg";
import Testimonial6 from "../assets/testimonial6.jpg";
import { Link } from "react-router-dom";
import { registerUser } from "../utils/api";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.formBasicName.value,
      email: event.target.formBasicEmail.value,
      password: event.target.formBasicPassword.value,
    };

    try {
      const response = await registerUser(formData);
      console.log('Registration Success:', response.data);
      
      // Show success notification
      toast.success('Registration successful! 🎉', {
        position: "top-center",
        autoClose: 5000,
      });
      
      // Redirect to login page after success
      setTimeout(() => {
        navigate('/login');
      }, 3000); // Wait 3 seconds before redirecting

    } catch (error) {
      console.error('Registration Error:', error);
      toast.error('Registration failed. Please try again.', {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };


  return (
    <div className="register-page">
      {/* Register Heading and Description */}
      <Container className="register-header-container my-5 text-center">
        <h2 className="register-heading">Register</h2>
        <p className="register-description">
          Join Job Findr today and take the first step towards your dream job. Our simple and secure registration process ensures that your career journey begins on the right foot.
        </p>
      </Container>

      {/* Registration Form */}
      <Container className="my-5 text-center">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="register-form-container">
              <h2 className="register-heading">Registration Form</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="register-button">
                  Register
                </Button>
              </Form>
              <p className="login-link mt-3">
                Have an account? <Link to="/login">Login here</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Why You Should Register */}
      <Container className="my-5 text-center">
        <h2>Why You Should Register?</h2>
        <p>
          Registering with Job Findr is your first step towards a fulfilling career. Our platform connects you with opportunities that match your skills and aspirations. By creating a profile, you gain access to a vast database of job listings from various industries and companies.
        </p>
        <p>
          Our advanced matching algorithm filters job opportunities that align with your career goals, saving you time and effort. Additionally, we offer tools for crafting resumes, practicing interviews, and staying updated on industry trends.
        </p>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <img src={RegisterImage} alt="Why Register" className="why-choose-us-image" />
          </Col>
        </Row>
        <p>
          With Job Findr, you receive personalized recommendations and access to exclusive job listings. Our platform simplifies the job search process, providing resources to help you build a strong job search strategy.
        </p>
        <p>
          Join our community of job seekers and employers. Connect, share experiences, and build valuable relationships through our online forums and networking events.
        </p>
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={6}>
            <img src={WhyChooseUsImage} alt="Why Choose Us" className="why-choose-us-image" />
          </Col>
        </Row>
        <p>
          Our secure registration process ensures your personal information is protected while you focus on finding your perfect job. Register now and let Job Findr help you achieve your professional goals.
        </p>
      </Container>

      {/* Companies Partnering with Job Findr */}
      <Container className="my-5">
        <h2 className="text-center">Companies Partnering with Job Findr</h2>
        <Row className="justify-content-center">
          <Col md={3} className="mb-4 text-center">
            <Card className="company-card">
              <Card.Img variant="top" src={Company1} className="square-image" />
              <Card.Body>
                <Card.Title>Google</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4 text-center">
            <Card className="company-card">
              <Card.Img variant="top" src={Company2} className="square-image" />
              <Card.Body>
                <Card.Title>Kaleidico</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4 text-center">
            <Card className="company-card">
              <Card.Img variant="top" src={Company3} className="square-image" />
              <Card.Body>
                <Card.Title>Nissan</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4 text-center">
            <Card className="company-card">
              <Card.Img variant="top" src={Company4} className="square-image" />
              <Card.Body>
                <Card.Title>Q-Area</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Job Hiring Trends Chart */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h2 className="text-center">Job Hiring Trends in 2024</h2>
            <div className="chart-container">
              <Line
                data={{
                  labels: [
                    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                  ],
                  datasets: [
                    {
                      label: "Job Hiring Trends in 2024",
                      data: [300, 400, 350, 450, 500, 600, 650, 700, 750, 800, 850, 900],
                      fill: false,
                      borderColor: "#007bff",
                      tension: 0.1,
                    },
                  ],
                }}
                options={{ responsive: true, maintainAspectRatio: true }}
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Testimonials Section */}
      <Container className="my-5">
        <br/><br/><br/><br/>
        <h2 className="text-center">What People Are Saying</h2>
        <Row className="justify-content-center">
          <Col md={4} lg={2} className="mb-4 text-center">
            <Card className="testimonial-card">
              <Card.Body>
                <Card.Img variant="top" src={Testimonial1} className="rounded-circle mb-3" />
                <Card.Title>Ravi Kumar</Card.Title>
                <Card.Text>"A fantastic platform for job seekers!"</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={2} className="mb-4 text-center">
            <Card className="testimonial-card">
              <Card.Body>
                <Card.Img variant="top" src={Testimonial2} className="rounded-circle mb-3" />
                <Card.Title>Anita Sharma</Card.Title>
                <Card.Text>"Found my dream job thanks to Job Findr!"</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={2} className="mb-4 text-center">
            <Card className="testimonial-card">
              <Card.Body>
                <Card.Img variant="top" src={Testimonial3} className="rounded-circle mb-3" />
                <Card.Title>Rajesh Singh</Card.Title>
                <Card.Text>"Highly recommended!"</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={2} className="mb-4 text-center">
            <Card className="testimonial-card">
              <Card.Body>
                <Card.Img variant="top" src={Testimonial4} className="rounded-circle mb-3" />
                <Card.Title>Priya Patel</Card.Title>
                <Card.Text>"Great experience and support!"</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={2} className="mb-4 text-center">
            <Card className="testimonial-card">
              <Card.Body>
                <Card.Img variant="top" src={Testimonial5} className="rounded-circle mb-3" />
                <Card.Title>Deepak Agarwal</Card.Title>
                <Card.Text>"Efficient and user-friendly!"</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={2} className="mb-4 text-center">
            <Card className="testimonial-card">
              <Card.Body>
                <Card.Img variant="top" src={Testimonial6} className="rounded-circle mb-3" />
                <Card.Title>Neha Reddy</Card.Title>
                <Card.Text>"A valuable tool for job seekers!"</Card.Text>
              </Card.Body>
            </Card>
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

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Register;
