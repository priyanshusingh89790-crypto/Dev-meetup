const express = require('express');
const { createPost, getPosts, deletePost, toggleLike } = require('../controllers/post.controller');
const { protect } = require('../middlewares/auth.middleware');
const router = express.Router();

router.post('/', protect, createPost);
router.get('/', getPosts);
router.delete('/:id', protect, deletePost);
router.put('/:id/like', protect, toggleLike);

module.exports = router;
