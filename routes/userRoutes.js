const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes
router.get('/', userController.getAllUsers);
router.post('/createUser', userController.createUser);
router.get('/:id', userController.getUserById); // Get a specific user by ID
router.put('/:id', userController.updateUser);  // Update a user by ID
router.delete('/:id', userController.deleteUser); // Delete a user by ID

module.exports = router;
