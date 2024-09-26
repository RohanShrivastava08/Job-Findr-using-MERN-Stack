import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JobListing from './pages/JobListing';
import Register from './pages/Register';
import Login from './pages/Login';
import JobApplication from './pages/JobApplication';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import JobDetails from './pages/JobDetails';
import Profile from './pages/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [savedJobs, setSavedJobs] = useState([]);

  const handleSaveJob = (job) => {
    // Check if the job is already saved
    if (!savedJobs.some(savedJob => savedJob.id === job.id)) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  // Mock user object
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinedDate: 'January 1, 2023',
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobListing onSaveJob={handleSaveJob} />} />
        <Route path="/job-details/:jobId" element={<JobDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/apply/:jobId" element={<JobApplication />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/employer-dashboard" element={<Dashboard savedJobs={savedJobs} isEmployer={true} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
