import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Toast } from "react-bootstrap";
import "./JobListing.css";
import jobData from "../components/jobData.js";

const JobListing = ({ onSaveJob }) => {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterSalary, setFilterSalary] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobData);
  const [showPopup, setShowPopup] = useState(false);

  const handleSearch = () => {
    let results = jobData.flatMap((category) =>
      category.jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(search.toLowerCase()) &&
          (filterType
            ? job.title.toLowerCase().includes(filterType.toLowerCase())
            : true) &&
          (filterLocation
            ? job.location.toLowerCase().includes(filterLocation.toLowerCase())
            : true) &&
          (filterSalary
            ? parseInt(job.salary.replace(/₹|,/g, "")) <= parseInt(filterSalary)
            : true) &&
          (filterRole
            ? job.title.toLowerCase().includes(filterRole.toLowerCase())
            : true)
      )
    );

    setFilteredJobs([{ category: "Search Results", jobs: results }]);
  };

  const handleSaveJob = (job) => {
    onSaveJob(job);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };

  return (
    <div>
      <header className="job-listing-header">
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <div className="header-content">
                <h1 className="text-center">Job Listings</h1>
                <p className="text-center">
                  Explore a wide range of job opportunities tailored to your
                  skills and interests. Find your next career move with ease.
                </p>
              </div>
              <h2 className="category-header">Find Your Perfect Job</h2>
              <p>
                Our job listings are curated to provide you with a variety of
                career opportunities across different industries and job types.
                Whether you're looking for a role in administrative support,
                engineering, or healthcare, we have a diverse range of positions
                to suit your needs.
              </p>
              <p>
                With advanced search filters and categories, finding a job that
                matches your skills and interests has never been easier. Explore
                the latest job openings and take the next step in your career
                with our comprehensive job listings platform.
              </p>
              <p>
                Stay updated with real-time notifications about job applications
                and status updates. Our goal is to connect you with the best
                opportunities and help you succeed in your job search.
              </p>
              <h2 className="category-header">Search for Jobs</h2>
              <br />
              <Form className="job-search-form">
                <Form.Group controlId="search">
                  <Form.Control
                    type="text"
                    placeholder="Search for jobs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Form.Group>
                <br />
                <Button
                  variant="primary"
                  className="search-btn"
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </Form>
              <Row className="filters">
                <Col md={3}>
                  <Form.Group controlId="filterType">
                    <Form.Label>Job Type</Form.Label>
                    <div className="dropdown">
                      <Form.Control
                        as="select"
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                      >
                        <option value="">All</option>
                        <option value="Administrative">Administrative</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Healthcare">Healthcare</option>
                        {/* Add other options */}
                      </Form.Control>
                      <span className="dropdown-arrow">&#9660;</span>{" "}
                      {/* Down arrow */}
                    </div>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="filterLocation">
                    <Form.Label>Location</Form.Label>
                    <div className="dropdown">
                      <Form.Control
                        as="select"
                        value={filterLocation}
                        onChange={(e) => setFilterLocation(e.target.value)}
                      >
                        <option value="">All</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Chennai">Chennai</option>
                      </Form.Control>
                      <span className="dropdown-arrow">&#9660;</span>{" "}
                      {/* Down arrow */}
                    </div>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="filterSalary">
                    <Form.Label>Salary Range</Form.Label>
                    <div className="dropdown">
                      <Form.Control
                        as="select"
                        value={filterSalary}
                        onChange={(e) => setFilterSalary(e.target.value)}
                      >
                        <option value="">All</option>
                        <option value="500000">Up to ₹5,00,000</option>
                        <option value="1000000">Up to ₹10,00,000</option>
                        <option value="1500000">Up to ₹15,00,000</option>
                        <option value="2000000">Up to ₹20,00,000</option>
                      </Form.Control>
                      <span className="dropdown-arrow">&#9660;</span>{" "}
                      {/* Down arrow */}
                    </div>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="filterRole">
                    <Form.Label>Job Role</Form.Label>
                    <div className="dropdown">
                      <Form.Control
                        as="select"
                        value={filterRole}
                        onChange={(e) => setFilterRole(e.target.value)}
                      >
                        <option value="">All</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                      </Form.Control>
                      <span className="dropdown-arrow">&#9660;</span>{" "}
                      {/* Down arrow */}
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </header>

      <Container className="my-5">
        {Array.isArray(filteredJobs) &&
          filteredJobs.map((category, index) => (
            <div key={index}>
              <h2 className="category-header">{category.category}</h2>
              <Row>
                {category.jobs.map((job) => (
                  <Col md={4} lg={3} key={job.id} className="mb-4">
                    <Card className="job-card">
                      <Card.Body>
                        <Card.Title>{job.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {job.company}
                        </Card.Subtitle>
                        <Card.Text>
                          {job.location} | {job.salary}
                        </Card.Text>
                        <Card.Text>{job.description}</Card.Text>
                        <div className="button-group">
                          <Button
                            variant="primary"
                            as="a"
                            href={`/job-details/${job.id}`}
                          >
                            View Details
                          </Button>
                          <Button
                            variant="secondary"
                            className="save-job-btn"
                            onClick={() => handleSaveJob(job)}
                          >
                            Save Job
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
      </Container>

      {/* Popup for Job Saved */}
      <Toast
        show={showPopup}
        onClose={() => setShowPopup(false)}
        delay={3000}
        autohide
        className="job-saved-toast position-fixed bottom-0 end-0 m-3"
      >
        <Toast.Body>Job Saved to your Dashboard.</Toast.Body>
      </Toast>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <Row>
            <Col className="text-center">
              <p>&copy; 2024 Job Findr. All rights reserved.</p>
              <a href="#" className="social-icon">
                Facebook
              </a>
              <a href="#" className="social-icon">
                Twitter
              </a>
              <a href="#" className="social-icon">
                LinkedIn
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default JobListing;
