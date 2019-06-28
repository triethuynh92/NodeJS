
const ProductModel = require('../models/product');
const CategoryModel = require('../models/category');
const UserModel = require('../models/user');


const countProduct = async () => {
  return ProductModel.count().exec();
};

const countUser = async () => {
  return UserModel.count().exec();
};

const countCategory = async () => {
  return CategoryModel.count().exec();
};

exports.getAdminPage = (req, res) => {
  Promise
  .all([
    countProduct(),
    countCategory(),
    countUser(),
  ]).then(([productsTotal, categoriesTotal, usersTotal]) => {
      res.render('admin' , {
        productsTotal: productsTotal,
        categoriesTotal: categoriesTotal,
        usersTotal: usersTotal,
        ordersTotal: 0
      });
  });
}

exports.getProductsPage = (req, res) => {
    ProductModel
    .find({})
    .limit(50)
    .exec()
    .then((data) => {
      res.render('products', {
        products: data
      });
    })
    .catch(err => {
      console.log(err);
    });
    
}

exports.getCategoriesPage = (req, res) => {
  CategoryModel
  .find({})
  .limit(10)
  .exec()
  .then((data) => {
    res.render('categories', {
      categories: data
    } )
  })
  .catch(err => {
    console.log(err);
  });
}

exports.getUsersPage = (req, res) => {
   UserModel
   .find()
   .limit(20)
   .exec()
   .then((data) => {
     res.render('users', {
      users: data
     })
   })
   .catch(err => {
     console.log(err);
   })
}

exports.getProductDetails = (req, res) => {
  ProductModel
  .findById(req.params.id)
  .then(product => {
    if(!product) {
      return res.status(404).send({
        message: "Products not found with id " + req.params.id
      });
    }
    res.render('productDetails', {
      product: product
    });
  })
  .catch(err => {
    console.log(err);
  })
} 

exports.getUserDetails = (req, res) => {
  UserModel
  .findById(req.params.id)
  .then(user => {
    if(!user) {
      return res.status(404).send({
        message: "Users not found with id " + req.params.id
      });
    }
    res.render('usersDetails', {
      user: user
    });
  })
  .catch(err => {
    console.log(err);
  })
}