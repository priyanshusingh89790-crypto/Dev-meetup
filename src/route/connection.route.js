const express = require('express')

const router = express.Router()

const connection = require('../controller/connection.controller');

router.post('/request', connection.sendRequest)

module.exports = router;