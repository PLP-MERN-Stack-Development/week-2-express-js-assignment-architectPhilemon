const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// In-memory products store
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

// GET all products
router.get('/', (req, res) => {
    res.json(products);
});

// GET single product
router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
});

// POST new product
router.post('/', (req, res) => {
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
router.put('/:id', (req, res) => {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }
    products[index] = {
        ...products[index],
        ...req.body,
        id: req.params.id
    };
    res.json(products[index]);
});

// DELETE product
router.delete('/:id', (req, res) => {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }
    products = products.filter(p => p.id !== req.params.id);
    res.status(204).send();
});

module.exports = router; 