const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Define routes
router.get('/', todoController.getAllTasks);
router.post('/createTask', todoController.createTask);
router.get('/:id', todoController.getTaskById); // Get a specific todo by ID
router.put('/:id', todoController.updateTask);  // Update a todo by ID
router.delete('/:id', todoController.deleteTask); // Delete a todo by ID

module.exports = router;
