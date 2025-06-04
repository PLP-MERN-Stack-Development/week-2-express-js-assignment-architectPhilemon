// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import middleware
const logger = require('./src/middleware/logger');
const authenticateApiKey = require('./src/middleware/auth');

// Import routes
const productsRouter = require('./src/routes/products');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(logger);

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to the Products API',
    endpoints: {
      products: '/api/products',
      search: '/api/products/search',
      stats: '/api/products/stats'
    }
  });
});

// API routes with authentication
app.use('/api/products', authenticateApiKey, productsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the app for testing purposes
module.exports = app; 