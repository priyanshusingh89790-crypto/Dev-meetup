const express = require("express");
const router = express.Router();
const { userAuthGuard } = require("../middleware/auth.middleware");
const connectionController = require("../controller/connection.controller");

// Send connection request
router.post(
  "/request/send/:toUserId",
  userAuthGuard,
  connectionController.sendRequest,
);

// Review (accept/reject) an incoming request
router.post(
  "/request/review/:status/:requestId",
  userAuthGuard,
  connectionController.reviewRequest,
);

// Get pending connection requests
router.get(
  "/request/pending",
  userAuthGuard,
  connectionController.getPendingRequests,
);

// Get accepted connections
router.get("/accepted", userAuthGuard, connectionController.getConnections);

module.exports = router;
