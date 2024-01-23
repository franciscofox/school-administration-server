const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../controllers/authMiddleware');
const studentsController = require('../controllers/studentsController');

router.post('/', authenticateToken, studentsController.createStudent);
router.get('/', studentsController.getStudents);
router.get('/search', studentsController.searchStudents);
router.get('/:id', studentsController.getStudent);
router.delete('/:id', authenticateToken, studentsController.deleteStudent);
router.get('/:id/siblings', studentsController.getSiblings);

module.exports = router;
