// Mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Bcrypt
const bcrypt = require("bcrypt");


// Schema
const normalUserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        minlength: [2, 'First name must be at least 2 characters long'],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        minlength: [2, 'Last name must be at least 2 characters long'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        minlength: [5, 'Email must be at least 5 characters long'],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long'],
        trim: true,
    },

});

// set up pre-save middleware to create password
normalUserSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
normalUserSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const NormalUser = mongoose.model('NormalUser', normalUserSchema);

module.exports = NormalUser
