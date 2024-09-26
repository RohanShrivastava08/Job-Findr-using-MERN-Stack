import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { fetchNews } from '../components/newsApi';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css';

// Register the components you use
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const [news, setNews] = useState([]);
  const [techNews, setTechNews] = useState([]); // State for technology news
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const getNews = async () => {
      const businessNewsData = await fetchNews('business'); // Fetch job-related news
      setNews(businessNewsData);

      const techNewsData = await fetchNews('technology'); // Fetch technology news
      setTechNews(techNewsData);
    };

    getNews();
  }, []);

  // Dummy data
  const appliedJobs = [
    { id: 1, title: 'Software Engineer', company: 'Company A' },
    { id: 2, title: 'Product Manager', company: 'Company B' },
    { id: 3, title: 'UX Designer', company: 'Company C' },
    { id: 4, title: 'Data Scientist', company: 'Company D' },
    { id: 5, title: 'Backend Developer', company: 'Company E' },
  ];

  const savedJobs = [
    { id: 1, title: 'Frontend Developer', company: 'Company F' },
    { id: 2, title: 'DevOps Engineer', company: 'Company G' },
    { id: 3, title: 'QA Engineer', company: 'Company H' },
    { id: 4, title: 'Project Coordinator', company: 'Company I' },
    { id: 5, title: 'Systems Analyst', company: 'Company J' },
  ];

  const interviews = [
    { id: 1, title: 'JavaScript Developer', company: 'Company K', date: '2024-09-01' },
    { id: 2, title: 'Senior React Developer', company: 'Company L', date: '2024-09-05' },
    { id: 3, title: 'Full Stack Developer', company: 'Company M', date: '2024-09-10' },
    { id: 4, title: 'UI/UX Designer', company: 'Company N', date: '2024-09-15' },
    { id: 5, title: 'Data Analyst', company: 'Company O', date: '2024-09-20' },
  ];

  const shortlisted = [
    { id: 1, title: 'Business Analyst', company: 'Company P' },
    { id: 2, title: 'Cloud Engineer', company: 'Company Q' },
    { id: 3, title: 'Scrum Master', company: 'Company R' },
    { id: 4, title: 'Marketing Specialist', company: 'Company S' },
    { id: 5, title: 'Sales Manager', company: 'Company T' },
  ];

  const hired = [
    { id: 1, title: 'Software Engineer', company: 'Company U' },
    { id: 2, title: 'Product Designer', company: 'Company V' },
    { id: 3, title: 'Database Administrator', company: 'Company W' },
    { id: 4, title: 'Network Engineer', company: 'Company X' },
    { id: 5, title: 'Tech Lead', company: 'Company Y' },
  ];

  // Data for charts
  const jobStatsData = {
    labels: ['Engineering', 'Product', 'Design', 'Data Science', 'Management'],
    datasets: [
      {
        label: 'Jobs Applied',
        data: [12, 8, 5, 6, 3],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const hiringStatsData = {
    labels: ['Engineering', 'Product', 'Design', 'Data Science', 'Management'],
    datasets: [
      {
        label: 'Hiring Statistics',
        data: [10, 7, 4, 8, 6],
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Change to green color
        borderColor: 'rgba(75, 192, 192, 1)',      // Change to green color
        borderWidth: 1,
      },
    ],
  };

  const jobHiringData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Job Hiring in 2024',
        data: [50, 45, 60, 55, 70],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const jobComparisonData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: '2023',
        data: [30, 40, 50, 60, 70],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: '2024',
        data: [50, 45, 60, 55, 70],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='dashboard-page'>
    <Container className="dashboard-container my-5 pt-3">
      <Row>
        <Col md={12} className="dashboard-intro-section">
          <h2 className="dashboard-title">Dashboard</h2>
          <p className="dashboard-intro">
            Welcome to your personalized dashboard! Here you can manage your job applications, saved jobs, and profile.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>Job Hiring in 2024</Card.Title>
              <Line data={jobHiringData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>Job Comparison (2023 vs 2024)</Card.Title>
              <Bar data={jobComparisonData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>Applied Jobs</Card.Title>
              <Card.Text>
                View the jobs you have applied for and track your application status.
              </Card.Text>
              {appliedJobs.length > 0 ? (
                <ListGroup variant="flush">
                  {appliedJobs.map(job => (
                    <ListGroup.Item key={job.id} className="job-list-item">
                      <div className="job-list-content">
                        <h5>{job.title}</h5>
                        <span className="job-company">{job.company}</span>
                      </div>
                      <Button variant="link" href={`/job-details/${job.id}`}>View Details</Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <Card.Text>No jobs applied yet.</Card.Text>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>Saved Jobs</Card.Title>
              <Card.Text>
                Manage the jobs you have saved for future reference.
              </Card.Text>
              {savedJobs.length > 0 ? (
                <ListGroup variant="flush">
                  {savedJobs.map(job => (
                    <ListGroup.Item key={job.id} className="job-list-item">
                      <div className="job-list-content">
                        <h5>{job.title}</h5>
                        <span className="job-company">{job.company}</span>
                      </div>
                      <Button variant="link" href={`/job-details/${job.id}`}>View Details</Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <Card.Text>No jobs saved yet.</Card.Text>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>Interviews</Card.Title>
              {interviews.length > 0 ? (
                <ListGroup variant="flush">
                  {interviews.map(interview => (
                    <ListGroup.Item key={interview.id} className="job-list-item">
                      <div className="job-list-content">
                        <h5>{interview.title}</h5>
                        <span className="job-company">{interview.company}</span>
                        <div className="interview-date">{interview.date}</div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <Card.Text>No upcoming interviews.</Card.Text>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>Shortlisted</Card.Title>
              {shortlisted.length > 0 ? (
                <ListGroup variant="flush">
                  {shortlisted.map(job => (
                    <ListGroup.Item key={job.id} className="job-list-item">
                      <div className="job-list-content">
                        <h5>{job.title}</h5>
                        <span className="job-company">{job.company}</span>
                      </div>
                      <Button variant="link" href={`/job-details/${job.id}`}>View Details</Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <Card.Text>No jobs shortlisted yet.</Card.Text>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
  <Col md={6}>
    <Card className="dashboard-card">
      <Card.Body>
        <Card.Title>Job Statistics</Card.Title>
        <Bar 
          data={jobStatsData} 
          options={{ 
            responsive: true, 
            plugins: { 
              legend: { position: 'top' } 
            } 
          }} 
        />
      </Card.Body>
    </Card>
  </Col>

  <Col md={6}>
    <Card className="dashboard-card">
      <Card.Body>
        <Card.Title>Hiring Statistics</Card.Title>
        <Bar 
          data={hiringStatsData} 
          options={{ 
            responsive: true, 
            plugins: { 
              legend: { position: 'top' } 
            } 
          }} 
          // Change the color of the bars to green
          plugins={{
            legend: {
              display: false,
            },
          }}
          datasetIdKey="id"
        />
      </Card.Body>
    </Card>
  </Col>
</Row>

      <Row className="mt-4">
        
        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>Calendar</Card.Title>
              <Calendar
                onChange={setValue}
                value={value}
                tileClassName={({ date, view }) => {
                  if (view === 'month') {
                    // Add some conditional classes here if needed
                  }
                }}
              />
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>Hired</Card.Title>
              {hired.length > 0 ? (
                <ListGroup variant="flush">
                  {hired.map(job => (
                    <ListGroup.Item key={job.id} className="job-list-item">
                      <div className="job-list-content">
                        <h5>{job.title}</h5>
                        <span className="job-company">{job.company}</span>
                      </div>
                      <Button variant="link" href={`/job-details/${job.id}`}>View Details</Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <Card.Text>No jobs hired yet.</Card.Text>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Row className="mt-4">
          <Col md={6}>
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title>News</Card.Title>
                <ListGroup variant="flush">
                  {news.map((item, index) => (
                    <ListGroup.Item key={index} className="news-item">
                      <h6>{item.title}</h6>
                      <p>{item.description}</p>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title>Technology News</Card.Title>
                <ListGroup variant="flush">
                  {techNews.map((item, index) => (
                    <ListGroup.Item key={index} className="news-item">
                      <h6>{item.title}</h6>
                      <p>{item.description}</p>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>


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

export default Dashboard;
