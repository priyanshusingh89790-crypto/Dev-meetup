const express = require('express');
const { signUp, login, changePassword } = require('../controllers/auth.controller');
const { protect } = require('../middlewares/auth.middleware');
const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.post('/change-password', protect, changePassword);

module.exports = router;
