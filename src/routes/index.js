const express = require('express');
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const newsRoutes = require('./news.routes');
const postRoutes = require('./post.routes');
const commentRoutes = require('./comment.routes');
const chatRoutes = require('./chat.routes');
const connectionRoutes = require('./connection.routes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/news', newsRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/chat', chatRoutes);
router.use('/connections', connectionRoutes);

module.exports = router;
