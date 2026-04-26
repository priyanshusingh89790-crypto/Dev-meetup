const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false
    },
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String
    },
    gender: {
        type: String,
        enum: ["MALE", "FEMALE", "OTHER"],
    },
    phone: {
        type: String,
        trim: true
    },
    bio: {
        type: String,
        trim: true
    },
    profilePic: {
        type: String,
        trim: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    timestamps: true
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.comparePassword = async function (plainPassword) {
    return bcrypt.compare(plainPassword, this.password);
};

userSchema.methods.generateAuthToken = async function () {
    return await jwt.sign(
        {
            id: this._id,
            email: this.email,
        },
        process.env.JWT_SECRET || 'fallback_secret',
        {
            expiresIn: '1h'
        }
    );
};

module.exports = mongoose.model("User", userSchema);
