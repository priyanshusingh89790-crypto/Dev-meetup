const express = require('express');
const router = express.Router();
const { userAuthGuard } = require('../middleware/auth.middleware')

const auth = require('../controller/auth.controller');

router.post('/v1/signup', auth.signUp)
router.post('/v1/login', auth.login);
router.post('/v1/chnage_password', userAuthGuard, auth.changePassword);

module.exports = router;