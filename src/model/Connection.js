const mongoose = require('mongoose');

const connectionSchema = mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    status: {
        type: String,
        enum: ["PENDING", "ACCEPTED", "REJCTED"],
        require: true,
        default: "PENDING"
    }
},{
    timestamps: true
})

module.exports = mongoose.model("Connection", connectionSchema);