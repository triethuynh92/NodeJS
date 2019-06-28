const Product = require('../models/product');

// Create new Product
exports.create = (req, res) => {
    // Create a Product
    const product = new Product({
        name: req.body.name,
	    image: req.body.image,
	    thumbnail: req.body.thumbnail,
	    shortDescription: req.body.shortDescription,
	    categoryId: req.body.categoryId,
	    salePrice: req.body.salePrice,
	    originalPrice: req.body.originalPrice,
	    originalPrice: req.body.originalPrice,
	    images: req.body.images,
	    thumbnails: req.body.thumbnails
    });

    //Save Product in the database
    product.save()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the product"
        });
    });
}


// Retrieve all product from the database.
exports.findAll = (req, res) => {
    Product
    .find()
    .then(products => {
        res.send(products);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving products"
        });
    })
}

// Find a single product with productID
exports.findOne = (req, res) => {
    Product
    .findById(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with ID " + req.params.productId
            });
        }
        res.send(product);
    })
    .catch(err => {
        return res.status(500).send({
            message: "Something wrong retrieving product with ID " + req.params.productId
        });
    })
}

// Update a product
exports.update = (req,res) => {
    // Find and update product with the request body
    Product.findByIdAndUpdate(req.params.productId, {$set: req.body})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with ID " + req.params.productId
            });
        }
        res.send(product);
    })
    .catch(err => {
        return res.status(500).send({
            message: "Somthing wrong while updating with ID " + req.params.productId
        });
    })
}

// Delete a product by productId
exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });
        }
        res.send({message: "Product was deleted successfully!"})
    })
    .catch(err => {
        return res.status(500).send({
            message: "Could not delete product with ID " + req.params.productId
        });
    })
}