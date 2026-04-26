const express = require('express');
const { getProfile, updateProfile } = require('../controllers/user.controller');
const { protect } = require('../middlewares/auth.middleware');
const router = express.Router();

router.get('/:username', getProfile);
router.put('/update', protect, updateProfile);

module.exports = router;
