const express = require('express');
const controller = require('./../controllers/authController');

const router = express.Router();

router.post('/', controller.login);

module.exports = router;