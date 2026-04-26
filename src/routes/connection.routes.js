const express = require("express");
const { protect } = require("../middlewares/auth.middleware");
const { sendRequest, reviewRequest, getPendingRequests, getConnections } = require("../controllers/connection.controller");
const router = express.Router();

router.post("/send/:toUserId", protect, sendRequest);
router.post("/review/:status/:requestId", protect, reviewRequest);
router.get("/pending", protect, getPendingRequests);
router.get("/", protect, getConnections);

module.exports = router;
