import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "./Profile.css";
import UserPic from "../assets/userImage.jpg";

const Profile = ({ user = {} }) => {
  const skills = ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"];
  const hobbies = ["Coding", "Reading", "Travelling", "Gaming"];
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      role: "Software Engineer",
      duration: "Jan 2021 - Present",
    },
    {
      company: "Innovative Labs",
      role: "Junior Developer",
      duration: "Jun 2019 - Dec 2020",
    },
    {
      company: "Startup XYZ",
      role: "Intern",
      duration: "Jan 2019 - May 2019",
    },
  ];
  const education = [
    {
      degree: "B.Sc. Computer Science",
      institution: "State University",
      year: "2015 - 2019",
    },
  ];
  const accomplishments = [
    "Developed a full-stack web application that served 10,000+ users.",
    "Received Employee of the Year award in 2022.",
  ];
  const certifications = [
    "Certified MERN Stack Developer - Coursera",
    "AWS Certified Solutions Architect - Associate",
  ];

  return (
    <div className="profile-page">
      {/* Header Section with Background Image */}
      <div className="profile-header">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="profile-header-title">Profile Page</h1>
              <p className="profile-header-subtitle">
                Your professional journey at a glance
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Card className="profile-card">
              <Card.Body className="text-center">
                <img
                  src={UserPic}
                  alt="Profile"
                  className="profile-image mb-3"
                />
                <Card.Title>{user.name || "Zidio WebDev"}</Card.Title>
                <Card.Text>Tech Developer | MERN Stack</Card.Text>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. <br/> <br/> <br/>
                   It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Card.Body>
            </Card>

            <Card className="profile-card mt-4">
              <Card.Body>
                <Card.Title>Skills</Card.Title>
                <ul className="skills-list">
                  {skills.map((skill, index) => (
                    <li key={index} className="skill-item">
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>

            <Card className="profile-card mt-4">
              <Card.Body>
                <Card.Title>Hobbies</Card.Title>
                <ul className="hobbies-list">
                  {hobbies.map((hobby, index) => (
                    <li key={index} className="hobby-item">
                      {hobby}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={8}>
            <Card className="profile-card">
              <Card.Body>
                <Card.Title>Profile Information</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>First Name:</strong> {user.firstName || "Zidio"}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Last Name:</strong> {user.lastName || "WebDev"}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Age:</strong> 25
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Work Experience:</strong> 3 Years
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Current CTC:</strong> $80,000
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Package:</strong> $100,000
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Email:</strong> {user.email || "user@example.com"}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>

            <Card className="profile-card mt-4">
              <Card.Body>
                <Card.Title>Experience</Card.Title>
                <ul className="experience-list">
                  {experiences.map((exp, index) => (
                    <li key={index}>
                      <strong>{exp.company}</strong> - {exp.role} (
                      {exp.duration})
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>

            <Card className="profile-card mt-4">
              <Card.Body>
                <Card.Title>Education</Card.Title>
                <ul className="education-list">
                  {education.map((edu, index) => (
                    <li key={index}>
                      <strong>{edu.degree}</strong>, {edu.institution} (
                      {edu.year})
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>

            <Card className="profile-card mt-4">
              <Card.Body>
                <Card.Title>Accomplishments</Card.Title>
                <ul className="accomplishments-list">
                  {accomplishments.map((acc, index) => (
                    <li key={index}>{acc}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>

            <Card className="profile-card mt-4">
              <Card.Body>
                <Card.Title>Certifications</Card.Title>
                <ul className="certifications-list">
                  {certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
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
    </div>
  );
};

export default Profile;
