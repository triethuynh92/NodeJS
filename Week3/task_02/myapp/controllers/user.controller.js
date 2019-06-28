const User = require('../models/user');

// Create new User

exports.create = function (req, res) {
    const user = new User(
        {
            avatar: req.body.avatar,
            firstName: req.body.firstName,
            type: req.body.type,
            required: req.body.required,
            lastName: req.body.lastName,
            dob: req.body.dob,
            gender: req.body.gender,
            email:req.body.email,
            emailVerified: req.body.emailVerified,
            role: req.body.role,
            username: req.body.username,
            zipcode: req.body.zipcode,
            phoneNumber: req.body.phoneNumber,
            country: req.body.country
        }
    );

    user.save()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the product"
        });
    });
};

// Retrieve all users from the database.
exports.findAll = (req, res) => {
    User
    .find()
    .then(users => {
        res.send(users);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving users"
        });
    })
}

// Find a single User with userID
exports.findOne = (req, res) => {
    User
    .findById(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with ID " + req.params.userId
            });
        }
        res.send(user);
    })
    .catch(err => {
        return res.status(500).send({
            message: "Something wrong retrieving user with ID " + req.params.userId
        });
    })
}

// Update a User

exports.update = (req,res) => {
    // Find and update User with the request body
    User.findByIdAndUpdate(req.params.userId, {$set: req.body})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with ID " + req.params.userId
            });
        }
        res.send(user);
    })
    .catch(err => {
        return res.status(500).send({
            message: "Somthing wrong while updating with ID " + req.params.userId
        });
    })
}


// Delete a User by userId
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send({message: "User was deleted successfully!"})
    })
    .catch(err => {
        return res.status(500).send({
            message: "Could not delete User with ID " + req.params.userId
        });
    })
}