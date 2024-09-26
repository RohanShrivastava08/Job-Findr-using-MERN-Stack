import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const JobForm = ({ job }) => {
  const [formData, setFormData] = useState(job || {
    title: '',
    description: '',
    qualifications: '',
    responsibilities: '',
    location: '',
    salary: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (job) {
        await axios.put(`/api/jobs/${job.id}`, formData);
      } else {
        await axios.post('/api/jobs', formData);
      }
      // Handle success
    } catch (err) {
      // Handle error
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Job Title</Form.Label>
          <Form.Control type="text" placeholder="Enter job title" name="title" value={formData.title} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter job description" name="description" value={formData.description} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formQualifications">
          <Form.Label>Qualifications</Form.Label>
          <Form.Control type="text" placeholder="Enter job qualifications" name="qualifications" value={formData.qualifications} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formResponsibilities">
          <Form.Label>Responsibilities</Form.Label>
          <Form.Control type="text" placeholder="Enter job responsibilities" name="responsibilities" value={formData.responsibilities} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter job location" name="location" value={formData.location} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formSalary">
          <Form.Label>Salary Range</Form.Label>
          <Form.Control type="text" placeholder="Enter salary range" name="salary" value={formData.salary} onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit">Save Job</Button>
      </Form>
    </Container>
  );
};

export default JobForm;
