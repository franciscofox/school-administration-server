const express = require('express');
const router = express.Router();
const usersRoutes = require('../controllers/usersController');

router.post('/signup', usersRoutes.createUsers);
router.get('/login', usersRoutes.loginUsers);

module.exports = router;
