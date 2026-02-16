const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        trim: true
    },
    lastName: {
        type: String
    },
    gender: {
        type: String,
        enums: ["MALE", "FEMALE", "OTHER"],
    },
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    isActive: {
        type: Boolean,
        require: true,
        default: true
    }
}, {
    timestamps: true
})

userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
})

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