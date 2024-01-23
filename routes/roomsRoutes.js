const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../controllers/authMiddleware');
const roomsController = require('../controllers/roomsController');

router.post('/', authenticateToken, roomsController.createRoom);
router.get('/', roomsController.getRooms);
router.get('/search', roomsController.searchRooms);
router.get('/:id', roomsController.getRoom);
router.get('/:id/students', roomsController.getStudentsinRoom);
router.delete('/:id', authenticateToken, roomsController.deleteRoom);

module.exports = router;
