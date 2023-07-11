const { log } = require("console");
const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    let products = [];
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      // scope context sensitive
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log("-------THERE WAS AN ERROR ------- ");
        console.log(err);
      });
    });
  }

  static getAll(cb) {
    getProductsFromFile(cb);
  }
};
