const express = require('express');
const router = express.Router();
const { getJobs, getJobById, createJob, updateJob, deleteJob } = require('../controllers/jobController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getJobs);
router.get('/:id', getJobById);
router.post('/', authMiddleware, createJob);
router.put('/:id', authMiddleware, updateJob);
router.delete('/:id', authMiddleware, deleteJob);

module.exports = router;
