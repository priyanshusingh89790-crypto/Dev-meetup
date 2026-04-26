const Chat = require('../models/Chat');
const Message = require('../models/Message');

exports.createChat = async (req, res, next) => {
    try {
        const { userId, isGroup, name, users } = req.body;

        if (isGroup) {
            if (!users || users.length < 2) {
                return res.status(400).json({ success: false, message: "Group chat must have at least 2 other users" });
            }
            users.push(req.user._id);
            const chat = await Chat.create({ name, isGroup, users });
            return res.status(201).json({ success: true, data: chat });
        } else {
            if (!userId) {
                return res.status(400).json({ success: false, message: "User ID is required" });
            }
            // Check if chat exists 
            const existingChat = await Chat.findOne({
                isGroup: false,
                $and: [
                    { users: { $elemMatch: { $eq: req.user._id } } },
                    { users: { $elemMatch: { $eq: userId } } }
                ]
            });

            if (existingChat) {
                return res.status(200).json({ success: true, data: existingChat });
            }

            const chat = await Chat.create({ isGroup: false, users: [req.user._id, userId] });
            return res.status(201).json({ success: true, data: chat });
        }
    } catch (error) {
        next(error);
    }
};

exports.getChats = async (req, res, next) => {
    try {
        const chats = await Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
            .populate("users", "username profilePic email")
            .sort({ updatedAt: -1 });

        res.status(200).json({ success: true, data: chats });
    } catch (error) {
        next(error);
    }
};

exports.sendMessage = async (req, res, next) => {
    try {
        const { chatId, content } = req.body;

        if (!chatId || !content) {
            return res.status(400).json({ success: false, message: "ChatId and content are required" });
        }

        const message = await Message.create({
            chatId,
            senderId: req.user._id,
            content
        });

        await message.populate('senderId', 'username profilePic');

        // Optional: socket.io realtime events
        if (req.io) {
            req.io.to(chatId.toString()).emit("message received", message);
        }

        // Update chat's updatedAt
        await Chat.findByIdAndUpdate(chatId, { updatedAt: Date.now() });

        res.status(201).json({ success: true, data: message });
    } catch (error) {
        next(error);
    }
};

exports.getMessages = async (req, res, next) => {
    try {
        const messages = await Message.find({ chatId: req.params.chatId }).populate('senderId', 'username profilePic');
        
        res.status(200).json({ success: true, data: messages });
    } catch (error) {
        next(error);
    }
};
