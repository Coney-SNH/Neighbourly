const mongoose = require("mongoose");


const ToolSchema = new mongoose.Schema({
        {
            type: {
                type: String,
                required: [true, "Tool type is required"],
                minlength: [3, "Tool type must be at least 3 characters long"]
            },

            description: {
                type: String,
                required: [true, "Description is required "],
                minlength: [3, "Description must be at least 3 characters long"]
            },
        }],

        description: {
            type: String,
            required: [true, "Description is required "],
            minlength: [3, "Description must be at least 3 characters long"]
        },
        price: {
            type: Number,
            required: [true, "Price is required"],
            default: 0.01,
            min: [0.01, "Price must be greater than "],
        },
    },
    { timestamps: true });
const Tool = mongoose.model("Tool", ToolSchema);
module.exports = Tool;