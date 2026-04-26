const express = require('express');
const { getLatestNews } = require('../controllers/news.controller');
const router = express.Router();

router.get('/', getLatestNews);

module.exports = router;
