const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String
    },
    gender: {
        type: String,
        enum: ["MALE", "FEMALE", "OTHER"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        index: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    timestamps: true
})

userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (plainPassword) {
    return bcrypt.compare(plainPassword, this.password);
}

userSchema.methods.generateAuthToken = async function () {
    return await jwt.sign(
        {
            userId: this._id,
            email: this.email,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1h'
        }
    );
};

module.exports = mongoose.model("User", userSchema);