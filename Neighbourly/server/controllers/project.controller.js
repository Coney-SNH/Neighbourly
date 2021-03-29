const User = require("../models/project.model");


// /C This function is creating a new author
module.exports.createNewUser = (req, res) => {
    // const { fullName } = req.body
    User.create(req.body)
        .then(data => res.json({ results: data }))
        .catch(err => res.json({ errors: err }));
};
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
// to add on the nested schema   add to the updateUser controller {$addToSet:{quotes: req.body}}