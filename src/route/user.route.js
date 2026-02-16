const express = require('express');

const router = express.Router()
const user = require('../controller/user.controller')

router.put('/v1/profile', user.updateUserProfile)

module.exports = router;