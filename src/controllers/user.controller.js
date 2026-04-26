const User = require('../models/User');

exports.getProfile = async (req, res, next) => {
    try {
        const username = req.params.username;
        const user = await User.findOne({ username });
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        next(error);
    }
};

exports.updateProfile = async (req, res, next) => {
    try {
        const { username, bio, profilePic } = req.body;
        const userId = req.user._id;

        if (username) {
            const existingUser = await User.findOne({ username, _id: { $ne: userId } });
            if (existingUser) {
                return res.status(400).json({
                    success: false,
                    message: "Username is already taken"
                });
            }
        }

        const updatedUser = await User.findByIdAndUpdate(userId, {
            username: username || req.user.username,
            bio: bio !== undefined ? bio : req.user.bio,
            profilePic: profilePic !== undefined ? profilePic : req.user.profilePic
        }, { new: true, runValidators: true });

        res.status(200).json({
            success: true,
            data: updatedUser
        });
    } catch (error) {
        next(error);
    }
};
