const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');

router.post('/', studentsController.createStudent);
router.get('/', studentsController.getStudents);
router.get('/search', studentsController.searchStudents);
router.get('/:id', studentsController.getStudent);
router.delete('/:id', studentsController.deleteStudent);
router.get('/:id/siblings', studentsController.getSiblings);

module.exports = router;