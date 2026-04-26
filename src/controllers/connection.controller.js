const Connection = require("../models/Connection");
const User = require("../models/User");

exports.sendRequest = async (req, res, next) => {
  try {
    const fromUserId = req.user._id;
    const toUserId = req.params.toUserId;

    if (fromUserId.equals(toUserId)) {
      return res
        .status(400)
        .json({
          success: false,
          message: "You cannot send a connection request to yourself.",
        });
    }

    const toUser = await User.findById(toUserId);
    if (!toUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found!" });
    }

    const existingConnection = await Connection.findOne({
      $or: [
        { from: fromUserId, to: toUserId },
        { from: toUserId, to: fromUserId },
      ],
    });

    if (existingConnection) {
      return res
        .status(400)
        .json({
          success: false,
          message:
            "A connection request already exists between you and this user.",
        });
    }

    const newConnection = new Connection({
      from: fromUserId,
      to: toUserId,
      status: "PENDING",
    });

    await newConnection.save();

    res
      .status(200)
      .json({
        success: true,
        message: "Connection request sent successfully!",
        data: newConnection,
      });
  } catch (error) {
    next(error);
  }
};

exports.reviewRequest = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    const { status, requestId } = req.params;

    const allowedStatus = ["ACCEPTED", "REJECTED"];
    if (!allowedStatus.includes(status.toUpperCase())) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid status type." });
    }

    const connectionRequest = await Connection.findOne({
      _id: requestId,
      to: loggedInUser._id,
      status: "PENDING",
    });

    if (!connectionRequest) {
      return res
        .status(404)
        .json({
          success: false,
          message: "Connection request not found or not pending.",
        });
    }

    connectionRequest.status = status.toUpperCase();
    await connectionRequest.save();

    res
      .status(200)
      .json({
        success: true,
        message: `Connection request ${status.toLowerCase()}!`,
        data: connectionRequest,
      });
  } catch (error) {
    next(error);
  }
};

exports.getPendingRequests = async (req, res, next) => {
  try {
    const loggedInUser = req.user;

    const connectionRequests = await Connection.find({
      to: loggedInUser._id,
      status: "PENDING",
    }).populate("from", "firstName lastName username email gender");

    res
      .status(200)
      .json({
        success: true,
        message: "Pending requests fetched successfully.",
        data: connectionRequests,
      });
  } catch (error) {
    next(error);
  }
};

exports.getConnections = async (req, res, next) => {
  try {
    const loggedInUser = req.user;

    const connections = await Connection.find({
      $or: [
        { from: loggedInUser._id, status: "ACCEPTED" },
        { to: loggedInUser._id, status: "ACCEPTED" },
      ],
    })
      .populate("from", "firstName lastName username email gender")
      .populate("to", "firstName lastName username email gender");

    const data = connections.map((row) => {
      if (row.from._id.equals(loggedInUser._id)) {
        return row.to;
      } else {
        return row.from;
      }
    });

    res
      .status(200)
      .json({
        success: true,
        message: "Connections fetched successfully.",
        data: data,
      });
  } catch (error) {
    next(error);
  }
};
