import React from "react";
import { Container, Row, Col, Button, Card, Table } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "./Home.css";
import WhyChooseUs from "../assets/why-choose-us.jpg";
import WhyChooseUs1 from "../assets/why-choose-us-1.jpg";
import Testimonial1 from "../assets/testimonial1.jpg";
import Testimonial2 from "../assets/testimonial2.jpg";
import Testimonial3 from "../assets/testimonial3.jpg";
import Testimonial4 from "../assets/testimonial4.jpg";
import Testimonial5 from "../assets/testimonial5.jpg";
import Testimonial6 from "../assets/testimonial6.jpg";
import Company1 from "../assets/company1.jpg";
import Company2 from "../assets/company2.jpg";
import Company3 from "../assets/company3.jpg";
import Company4 from "../assets/company4.jpg";
import HeaderBackground from "../assets/header-pic.jpg";
import featureImage1 from '../assets/feature1.jpg';
import featureImage2 from '../assets/feature2.jpg';
import featureImage3 from '../assets/feature3.jpg';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);




const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Container
        fluid
        className="home-hero text-center py-8"
        style={{ backgroundImage: `url(${HeaderBackground})` }}
      >
        <Row>
          <Col> <br />
            <h1 className="display-4">
              Welcome to Job <span className="highlighted-text">Findr</span>
            </h1>
            <p className="lead">Find your dream job today!</p>
            <Button variant="primary" size="lg" href="/jobs">
              Browse Jobs
            </Button>
            <br />
            <p className="lead">Your career, elevated. </p>
            <p className="lead"> Unlock your professional potential.</p> 
          </Col>
        </Row>
      </Container>

     

      {/* Why Choose Us Section */}
      <Container className="my-5 text-center">
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <img
              src={WhyChooseUs1}
              alt="Why Choose Us"
              className="why-choose-us-image"
            />{" "}
            <br />
          </Col>
        </Row>
        <h2>Why Choose Us?</h2>
        <p>
          Job Findr is your ultimate career companion. Our platform is designed
          to simplify your job search and connect you with exciting
          opportunities. With an intuitive interface and powerful search
          filters, you can effortlessly explore a vast array of roles that match
          your skills and aspirations.
        </p>
        <p>
          Discover your perfect fit. We believe that finding the right job is
          more than just matching keywords. That’s why we go the extra mile to
          bring you exclusive job listings from top companies. Our partnerships
          with industry leaders ensure you have access to a wealth of
          opportunities that you won’t find elsewhere.
        </p>
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={6}>
            <img
              src={WhyChooseUs}
              alt="Why Choose Us"
              className="why-choose-us-image"
            />
          </Col>
        </Row>
        <p>
          Stay ahead in your job search. Never miss out on a promising role
          again. Job Findr keeps you informed with real-time notifications about
          application statuses and job listing updates. You'll always be the
          first to know about new opportunities that align with your career
          goals.
        </p>
        <p>
          Empower your career journey. Job Findr is committed to helping you
          achieve your professional aspirations. Our platform provides the tools
          and resources you need to succeed. Start your job search today and
          experience the difference Job Findr can make.
        </p>
        {/* Features Section */}
       <section className="features-section">
                <div className="features-container">
                    <div className="feature-card">
                        <img src={featureImage1} alt="Feature 1" />
                        <h3>Easy Job Search</h3>
                        <p>Find jobs quickly with our advanced search filters and intuitive interface.</p>
                    </div>
                    <div className="feature-card">
                        <img src={featureImage2} alt="Feature 2" />
                        <h3>Secure & Reliable</h3>
                        <p>Rest assured that your data is protected with our top-notch security measures.</p>
                    </div>
                    <div className="feature-card">
                        <img src={featureImage3} alt="Feature 3" />
                        <h3>Real-Time Notifications</h3>
                        <p>Stay updated with real-time notifications about job postings and applications.</p>
                    </div>
                </div>
            </section>
        <p>
          Your career success is our priority. We understand that job hunting
          can be stressful, so we've designed Job Findr to be your reliable
          partner throughout the process. Our dedicated support team is always
          ready to assist you with any questions or challenges you may
          encounter.
        </p>
        <p>
          Join the Job Findr community. Connect with other job seekers, share
          insights, and access valuable career advice. Our platform fosters a
          supportive environment where you can learn, grow, and advance your
          career.
        </p>
      </Container>

       

      {/* Job Hiring Chart */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h2 className="text-center">Job Hiring Trends in 2024</h2>
            <div className="chart-container">
              <Line
                data={{
                  labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ],
                  datasets: [
                    {
                      label: "Job Hiring Trends in 2024",
                      data: [
                        300, 400, 350, 450, 500, 600, 650, 700, 750, 800, 850,
                        900,
                      ],
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


      {/* Companies Partnering with Job Findr Section */}
      <br/><br/><br/><br/>
      <Container className="my-5">
        <h2 className="text-center">Companies Partnering with Job Findr</h2>
        <Row className="justify-content-center">
          <Col md={3} className="mb-4 text-center">
            <Card className="company-card">
              <Card.Img variant="top" src={Company1} className="square-image" />
              <Card.Body>
                <Card.Title>Google </Card.Title>
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
                      "A fantastic platform for job seekers!"
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
                    <Card.Title>Anita Sharma</Card.Title>
                    <Card.Text>
                      "Found my dream job thanks to Job Findr!"
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
                    <Card.Title>Rajesh Singh</Card.Title>
                    <Card.Text>"Highly recommended!"</Card.Text>
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
                    <Card.Title>Pooja Patel</Card.Title>
                    <Card.Text>
                      "Great experience with this platform."
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
                    <Card.Title>Sandeep Verma</Card.Title>
                    <Card.Text>"User-friendly and efficient!"</Card.Text>
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
                    <Card.Text>"Excellent service and support."</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Our Vision, Mission, and Values */}
      <Container className="my-5 text-center">
        <Row>
          <Col md={4} className="mb-4">
            <h2>Our Vision</h2>
            <p>
              Our vision is to create a world where job seekers and employers
              connect seamlessly, fostering growth and success for all.
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h2>Our Mission</h2>
            <p>
              We aim to provide the best job search experience by offering
              innovative tools and resources for job seekers and employers
              alike.
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h2>Our Values</h2>
            <p>
              Integrity, commitment, and excellence drive our mission to support
              career development and job market dynamics.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <Row>
            <Col>
              <p>&copy; 2024 Job Findr. All rights reserved.</p>
              <a href="www.facebook.com" className="social-icon">
                Facebook
              </a>
              <a href="www.twitter.com" className="social-icon">
                Twitter
              </a>
              <a href="www.linkedin.com" className="social-icon">
                LinkedIn
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
