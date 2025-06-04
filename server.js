// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
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

// In-memory products data store
let products = [
    {
        id: uuidv4(),
        name: "Sample Product 1",
        price: 29.99,
        description: "This is a sample product"
    },
    {
        id: uuidv4(),
        name: "Sample Product 2",
        price: 39.99,
        description: "This is another sample product"
    }
];

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

// GET all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// GET single product
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
});

// POST new product
app.post('/api/products', (req, res) => {
    const newProduct = {
        id: uuidv4(),
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT update product
app.put('/api/products/:id', (req, res) => {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }
    products[index] = {
        ...products[index],
        ...req.body,
        id: req.params.id // preserve the original id
    };
    res.json(products[index]);
});

// DELETE product
app.delete('/api/products/:id', (req, res) => {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }
    products = products.filter(p => p.id !== req.params.id);
    res.status(204).send();
});

// TODO: Implement custom middleware for:
// - Request logging
// - Authentication
// - Error handling

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