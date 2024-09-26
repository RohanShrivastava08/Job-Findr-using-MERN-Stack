import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const ProfileForm = ({ isEmployer }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    resume: null,
    companyInfo: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });
    try {
      await axios.post(`/api/${isEmployer ? 'employer' : 'job-seeker'}/profile`, formDataToSend);
      // Handle success
    } catch (err) {
      // Handle error
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formContact">
          <Form.Label>Contact</Form.Label>
          <Form.Control type="text" placeholder="Enter contact details" name="contact" onChange={handleChange} required />
        </Form.Group>
        {!isEmployer && (
          <Form.Group controlId="formResume">
            <Form.Label>Resume</Form.Label>
            <Form.Control type="file" name="resume" onChange={handleFileChange} />
          </Form.Group>
        )}
        {isEmployer && (
          <Form.Group controlId="formCompanyInfo">
            <Form.Label>Company Information</Form.Label>
            <Form.Control type="text" placeholder="Enter company information" name="companyInfo" onChange={handleChange} required />
          </Form.Group>
        )}
        <Button variant="primary" type="submit">Save Profile</Button>
      </Form>
    </Container>
  );
};

export default ProfileForm;
