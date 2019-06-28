const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

// Create a new User
router.post('', UserController.create);

// Retrieve all Users
router.get('', UserController.findAll);

// Retrieve a User with userId
router.get('/:userId', UserController.findOne);

// Update a User by userId
router.put('/:userId', UserController.update);

// Delete a User by userId
router.delete('/:userId', UserController.delete);

module.exports = router;