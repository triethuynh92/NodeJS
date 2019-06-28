const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/category.controller');

// Create a new Category
router.post('', CategoryController.create);

// Retrieve all Categories
router.get('', CategoryController.findAll);

// Retrieve a Category with CategoryId
router.get('/:categoryId', CategoryController.findOne);

// Update a Category by CategoryId
router.put('/:categoryId', CategoryController.update);

// Delete a Category by CategoryId
router.delete('/:categoryId', CategoryController.delete);

module.exports = router;