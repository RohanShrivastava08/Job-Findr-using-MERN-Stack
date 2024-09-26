const mongoose = require('mongoose');

const jobSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    qualifications: { type: String, required: true },
    responsibilities: { type: String, required: true },
    location: { type: String, required: true },
    salaryRange: { type: String, required: true },
    employer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Job', jobSchema);
