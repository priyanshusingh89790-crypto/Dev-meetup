const express = require('express');
const { addComment, getComments } = require('../controllers/comment.controller');
const { protect } = require('../middlewares/auth.middleware');
const router = express.Router();

router.post('/:postId', protect, addComment);
router.get('/:postId', getComments);

module.exports = router;
