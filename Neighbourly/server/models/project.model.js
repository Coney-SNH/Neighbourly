const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "A first name is required"],
        minlength: [3, "A first name must be at 3 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "A last name is required"],
        minlength: [3, "A  last name must be at least 3 characters long"]
    },
    address: {
        type: String,
        required: [true, "Tool type is required"],
        minlength: [3, "Tool type must be at least 3 characters long"]
        // streetaddress:{
        //     type: String,
        //     required: [true, "An street address is required"],
        //     minlength: [3, "An street address must be at least 3 characters long"]},
        // city:{
        //     type: String,
        //     required: [true, "An City name is required"],
        //     minlength: [3, "An City name must be at least 3 characters long"]},
        // state:{
        //     type: String,
        //     required: [true, "An State name is required"],
        //     minlength: [2, "An State name must be at least 2 characters long"]},
        // zipcode:{
        //         type: Number,
        //         required: [true, "A ZIP code is required"],
        //         minlength: [5, "A ZIP code must be 5 characters long"]}

    },
    tools: [ToolSchema]

}, { timestamps: true });
const User = mongoose.model("User", UserSchema);
module.exports = User;