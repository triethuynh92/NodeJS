const Category = require('../models/category');

// Create new Category

exports.create = function (req, res) {
    const category = new Category(
        {
            name: req.body.name,
            description: req.body.description
        }
    );

    category.save()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the category"
        });
    });
};

// Retrieve all category from the database.
exports.findAll = (req, res) => {
    Category
    .find()
    .then(categories => {
        res.send(categories);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving categories"
        });
    })
}

// Find a single Category with categoryID
exports.findOne = (req, res) => {
    Category
    .findById(req.params.categoryId)
    .then(category => {
        if(!category) {
            return res.status(404).send({
                message: "Category not found with ID " + req.params.categoryId
            });
        }
        res.send(category);
    })
    .catch(err => {
        return res.status(500).send({
            message: "Something wrong retrieving category with ID " + req.params.categoryId
        });
    })
}

// Update a Category

exports.update = (req,res) => {
    // Find and update Category with the request body
    Category.findByIdAndUpdate(req.params.categoryId, {$set: req.body})
    .then(category => {
        if(!category) {
            return res.status(404).send({
                message: "Category not found with ID " + req.params.categoryId
            });
        }
        res.send(category);
    })
    .catch(err => {
        return res.status(500).send({
            message: "Somthing wrong while updating with ID " + req.params.categoryId
        });
    })
}


// Delete a Category by categoryId
exports.delete = (req, res) => {
    Category.findByIdAndRemove(req.params.categoryId)
    .then(category => {
        if(!category) {
            return res.status(404).send({
                message: "Category not found with id " + req.params.categoryId
            });
        }
        res.send({message: "Category was deleted successfully!"})
    })
    .catch(err => {
        return res.status(500).send({
            message: "Could not delete Category with ID " + req.params.categoryId
        });
    })
}