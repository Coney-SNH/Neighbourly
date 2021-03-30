const mongoose = require("mongoose");
const ToolSchema = require('./tools.model');
const ReviewSchema = require('./review.model');

var validateEmail = function(email) {
    var re= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "A unique username is required"],
        unique: [true, "A user by that username already exists"],
        minlength: [2, "Your username must be at least 3 characters long"]
    },
    firstName: {
        type: String,
        required: [true, "A first name is required"],
        minlength: [2, "A first name must be at 3 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "A last name is required"],
        minlength: [2, "A  last name must be at least 3 characters long"]
    },
    email: {
        type: String,
        required: [true, "An email is required"],
        trim: true,
        lowercase: true,
        unique: true,
        validate: [validateEmail, "Please enter a valid email."]
        },
    password: {
        type: String,
        required: [true, "A password is required"],
        minlength: [8, "Your password must be at least 8 characters in length"]
    },
    confirmPassword: {
        type: String,
        required: [true, "You must confrim your password"],
        minlength: [8, "Your password must be at least 8 characters in length"]
    },

    address: {
        street: {
            type: String,
            required: [true, "You need a valid street address"],
            minlength: [2, "Your street address should be longer than that"]
        },
        city: {
            type: String,
            required: [true, "Please input a valid city name"],
            minLength: [3, "You must enter a valid city name."]
        },
        state: {
            type: String,
            required: [true, "You must enter a state"],
            minLength: [2, "You must choose a two letter state name"],
            maxLength: [2, "You must choose a two letter state name"]
        }, 
        zipcode: {
            type: Number,
            required: [true, "You must enter a zipcode"],
            minLength: [5, "You must enter a valid zipcode"]
        }
    },

    tools: [ToolSchema],
    
    reviews: [ReviewSchema]

}, { timestamps: true });
const User = mongoose.model("User", UserSchema);
module.exports = User;