const Product = require("../models/products");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const prod = new Product(req.body.title);
  prod.save();

  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.getAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "All products",
      path: "/admin/products",
    });
  });
};
