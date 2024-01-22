const express = require('express');
const router = express.Router();
const roomsController = require('../controllers/roomsController');

router.post('/', roomsController.createRoom);
router.get('/', roomsController.getRooms);
router.get('/search', roomsController.searchRooms);
router.get('/:id', roomsController.getRoom);
router.get('/:id/students', roomsController.getStudentsinRoom);
router.delete('/:id', roomsController.deleteRoom);

module.exports = router;