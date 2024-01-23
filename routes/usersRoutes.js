const express = require('express');
const router = express.Router();
const usersRoutes = require('../controllers/usersController');

router.get('/', usersRoutes.getUsers)
router.post('/signup', usersRoutes.createUsers);
router.post('/login', usersRoutes.loginUsers);

module.exports = router;
