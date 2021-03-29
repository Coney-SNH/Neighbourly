const ProjectController = require("../controllers/project.controller");

module.exports = app => {
    // Creating a new author
    app.post("/api/user", ProjectController.createNewUser);
    // R
    app.get("/api/user", ProjectController.getAllUsers);
    app.get("/api/user/:id", ProjectController.getOneUser);
    // U
    app.put("/api/user/:id", ProjectController.updateUser);
    // D
    app.delete("/api/user/:id", ProjectController.deleteUser);

};