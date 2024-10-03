const express = require('express');
const { register, login, getUserData, createTask, getTasks, updateTaskStatus,deleteTask, updateTaskDetails
    } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', getUserData);
router.post('/tasks', createTask); 
router.get('/tasks', getTasks); 
router.patch('/tasks/status', updateTaskStatus); 
router.delete('/tasks',deleteTask);
router.patch('/tasks/update', updateTaskDetails);

module.exports = router;