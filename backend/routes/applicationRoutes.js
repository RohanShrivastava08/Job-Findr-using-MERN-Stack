const express = require('express');
const { createApplication, getApplicationsByJob, updateApplicationStatus, deleteApplication } = require('../controllers/applicationController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createApplication);
router.get('/job/:jobId', getApplicationsByJob);
router.put('/:id', protect, updateApplicationStatus);
router.delete('/:id', protect, deleteApplication);

module.exports = router;
