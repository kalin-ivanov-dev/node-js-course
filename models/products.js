const { log } = require("console");
const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    fs.readFile(p, (err, fileContent) => {
      let products = [];

      if (!err) {
        products = JSON.parse(fileContent);
      }

      // scope context sensitive
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log("-------THERE WAS AN ERROR ------- ");
        console.log(p);
        console.log(err);
      });
    });
  }

  static getAll(cb) {
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
