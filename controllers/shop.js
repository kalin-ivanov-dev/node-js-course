const Product = require("../models/products");

exports.getProducts = (req, res, next) => {
  Product.getAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.getAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "All products",
      path: "/products",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    prods: [],
    pageTitle: "Your Cart",
    path: "/cart",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};
