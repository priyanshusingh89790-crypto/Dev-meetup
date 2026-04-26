const Post = require('../models/Post');

exports.createPost = async (req, res, next) => {
    try {
        const { content, image } = req.body;
        const post = await Post.create({
            userId: req.user._id,
            content,
            image
        });

        res.status(201).json({
            success: true,
            data: post
        });
    } catch (error) {
        next(error);
    }
};

exports.getPosts = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 10;
        const startIndex = (page - 1) * limit;

        const posts = await Post.find()
            .populate('userId', 'username profilePic')
            .sort({ createdAt: -1 })
            .skip(startIndex)
            .limit(limit);

        res.status(200).json({
            success: true,
            count: posts.length,
            pagination: { page, limit },
            data: posts
        });
    } catch (error) {
        next(error);
    }
};

exports.deletePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ success: false, message: "Post not found" });
        }

        if (post.userId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ success: false, message: "Not authorized to delete this post" });
        }

        await post.deleteOne();

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        next(error);
    }
};

exports.toggleLike = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ success: false, message: "Post not found" });
        }

        const index = post.likes.indexOf(req.user._id);
        if (index === -1) {
            post.likes.push(req.user._id);
        } else {
            post.likes.splice(index, 1);
        }

        await post.save();

        res.status(200).json({
            success: true,
            data: post
        });
    } catch (error) {
        next(error);
    }
};
