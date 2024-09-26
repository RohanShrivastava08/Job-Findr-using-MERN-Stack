import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaBuilding, FaMapMarkerAlt, FaDollarSign, FaClipboardList, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import jobData from '../components/jobData';
import './JobDetails.css';

const JobDetails = () => {
  const { jobId } = useParams();
  const job = jobData.flatMap(category => category.jobs).find(job => job.id === parseInt(jobId));

  if (!job) return <p>Job not found</p>;

  return (
    <Container className="job-details-page">
      <Row>
        <Col md={8} className="job-details-content">
          <Card className="job-card">
            <Card.Body>
              <div className="job-header">
                <h1>{job.title}</h1>
                <div className="job-meta">
                  <FaBuilding /> <span>{job.company}</span>
                  <FaMapMarkerAlt /> <span>{job.location}</span>
                </div>
              </div>
              <Card.Text className="job-description">
                <h2>About the Company</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in justo nec nulla euismod auctor.</p>
                <h2>Job Details</h2>
                <p>{job.description}</p>
                <h2>Requirements</h2>
                <ul>
                  <li><FaStar /> Bachelor’s degree in relevant field</li>
                  <li><FaStar /> 5+ years of experience in customer service</li>
                  <li><FaStar /> Excellent communication skills</li>
                </ul>
                <h2>Skills</h2>
                <p>Customer Service, Team Management, Conflict Resolution</p>
                <h2>Salary</h2>
                <p><FaDollarSign /> {job.salary}</p>
                <h2>Number of Openings</h2>
                <p>2</p>
              </Card.Text>
              <Button variant="primary" className="apply-now-btn">Apply Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="sidebar">
          <h2>Other Jobs in Your Area</h2>
          <ul className="related-jobs">
            {jobData.flatMap(category => category.jobs).slice(0, 5).map(otherJob => (
              <li key={otherJob.id}>
                <a href={`/job-details/${otherJob.id}`}>{otherJob.title}</a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default JobDetails;
