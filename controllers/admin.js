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
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const prod = new Product(title, imageUrl, description, price);
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
