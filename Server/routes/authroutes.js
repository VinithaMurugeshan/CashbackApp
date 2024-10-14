const express = require('express');
const authController = require('../controller/authcontroller');

const router = express.Router();
// router for login and registration
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
