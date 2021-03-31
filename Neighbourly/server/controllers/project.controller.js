const User = require("../models/project.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY

// /C This function is creating a new author
module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then(user => {
            console.log(user)
            const userToken = jwt.sign({
                id: user._id
            }, SECRET_KEY);
            res
                .cookie("usertoken", userToken, secret, {
                    httpOnly: true
                })
                .json({ msg: "success!", user: user });
        })
        .catch(err => res.json(err));
};
module.exports.loginUser = async(req, res) => {
    console.log(SECRET_KEY)
    const user = await User.findOne({ email: req.body.logEmail });
    console.log(user)
    if (user === null) {
        // email not found in users collection
        return res.sendStatus(400);
    }
    // if we made it this far, we found a user with this email address
    // let's compare the supplied password to the hashed password in the database
    const correctPassword = await bcrypt.compare(req.body.logPassword, user.password);
    if (!correctPassword) {
        // password wasn't a match!
        return res.sendStatus(400);
    }
    // if we made it this far, the password was correct
    const userToken = jwt.sign({
        id: user._id
    }, SECRET_KEY);
    // note that the response object allows chained calls to cookie and json
    res.cookie("usertoken", userToken, SECRET_KEY, {
            httpOnly: true
        })
        .json({ msg: "success!" });
}
module.exports.getAllUsers = (req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.getOneUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(findeOneUser => res.json({ user: findeOneUser }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updateUser => res.json({ user: updateUser }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(user => res.json({ user: user }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
// to add on the nested schema   add to the updateUser controller {$addToSet:{quotes: req.body}}()