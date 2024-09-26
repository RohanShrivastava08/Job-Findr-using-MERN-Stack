const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();


app.use(cors({ origin: 'http://localhost:3000' }));


app.use(express.json());


app.use('/auth', authRoutes);

mongoose.connect('mongodb://localhost/job-findr', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

require('dotenv').config();
