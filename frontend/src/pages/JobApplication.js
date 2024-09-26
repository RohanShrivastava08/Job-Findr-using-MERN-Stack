import React from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const JobApplication = ({ job }) => {
  const handleApply = async () => {
    try {
      await axios.post(`/api/jobs/${job.id}/apply`);
      
    } catch (err) {
     
    }
  };

  return (
    <Container>
      <h1>Apply for {job.title}</h1>
      <Button variant="primary" onClick={handleApply}>Apply Now</Button>
      <Alert variant="success">Application submitted successfully!</Alert>
    </Container>
  );
};

export default JobApplication;