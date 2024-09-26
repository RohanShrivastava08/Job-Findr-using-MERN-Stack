const Job = require('../models/Job');
const Application = require('../models/Application');

// Get dashboard data for user
const getDashboardData = async (req, res) => {
  try {
    const jobs = await Job.find({ employer: req.user._id });
    const applications = await Application.find({ applicant: req.user._id });

    res.json({
      jobs,
      applications,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getDashboardData };
