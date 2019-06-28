const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');

// Create a new Product
router.post('', ProductController.create);

// Retrieve all Products
router.get('', ProductController.findAll);

// Retrieve a Product with ProductId
router.get('/:productId', ProductController.findOne);

// Update a Product by ProductId
router.put('/:productId', ProductController.update);

// Delete a Product by ProductId
router.delete('/:productId', ProductController.delete);

module.exports = router;