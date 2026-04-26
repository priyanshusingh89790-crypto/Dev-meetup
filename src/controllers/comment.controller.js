const Comment = require('../models/Comment');

exports.addComment = async (req, res, next) => {
    try {
        const { text } = req.body;
        const postId = req.params.postId;

        if (!text) {
            return res.status(400).json({ success: false, message: "Text is required" });
        }

        const comment = await Comment.create({
            postId,
            userId: req.user._id,
            text
        });

        res.status(201).json({
            success: true,
            data: comment
        });
    } catch (error) {
        next(error);
    }
};

exports.getComments = async (req, res, next) => {
    try {
        const postId = req.params.postId;
        const comments = await Comment.find({ postId }).populate('userId', 'username profilePic').sort({ createdAt: 1 });

        res.status(200).json({
            success: true,
            data: comments
        });
    } catch (error) {
        next(error);
    }
};
