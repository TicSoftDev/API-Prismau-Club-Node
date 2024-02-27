const express = require('express');
const userController = require('./../controllers/userController');
const verificarToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(verificarToken);

router.post('/', userController.createUser);
router.get('/',  userController.getUsers);

module.exports = router;