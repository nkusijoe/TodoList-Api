const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');
const config = require('./configs/todoConfigs');

const app = express();
const { PORT, DATABASE } = config;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(DATABASE.URI, DATABASE.OPTIONS);

// MongoDB connection events
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(1); 
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// Todo Routes
app.use('/api/tasks', todoRoutes);

// User Routes
app.use('/api/users', userRoutes);

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
  console.log('Shutting down server...');
  server.close(() => {
    mongoose.connection.close(false, () => {
      console.log('Server and MongoDB connection closed');
      process.exit(0);
    });
  });
});
