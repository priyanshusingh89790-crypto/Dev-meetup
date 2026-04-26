const express = require('express');
const { createChat, getChats, sendMessage, getMessages } = require('../controllers/chat.controller');
const { protect } = require('../middlewares/auth.middleware');
const router = express.Router();

router.post('/', protect, createChat);
router.get('/', protect, getChats);
router.post('/message', protect, sendMessage);
router.get('/message/:chatId', protect, getMessages);

module.exports = router;
